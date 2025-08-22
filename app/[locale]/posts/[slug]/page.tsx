import {
  getPostBySlug,
  getFeaturedMediaById,
  getAuthorById,
  getCategoryById,
  getAllPosts,
} from "@/lib/wordpress";

import { Section, Container, Article, Prose } from "@/components/craft";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site.config";

import Link from "next/link";
import Balancer from "react-wrap-balancer";

import type { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  console.log("Generating static params for posts:", posts);

  // Generate params for both locales for each post
  const params = [];
  for (const post of posts) {
    // Add English version
    params.push({
      slug: post.slug,
      locale: "en",
    });
    // Add Italian version
    params.push({
      slug: post.slug,
      locale: "it",
    });
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const { slug, locale } = params;
  const post = await getPostBySlug(slug, locale);

  if (!post) {
    return {};
  }

  const ogUrl = new URL(`${siteConfig.site_domain}/api/og`);
  ogUrl.searchParams.append("title", post.title.rendered);
  const description = post.excerpt.rendered.replace(/<[^>]*>/g, "").trim();
  ogUrl.searchParams.append("description", description);

  return {
    title: post.title.rendered,
    description: description,
    openGraph: {
      title: post.title.rendered,
      description: description,
      type: "article",
      url: `${siteConfig.site_domain}/posts/${post.slug}`,
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title.rendered,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.rendered,
      description: description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function Page({
  params,
}: {
  params: { slug: string; locale: string };
}) {
  const { slug, locale } = params;
  console.log("Fetching post with slug:", slug, "and locale:", locale);

  try {
    const post = await getPostBySlug(slug, locale);
    console.log("Post data:", JSON.stringify(post, null, 2));

    if (!post) {
      throw new Error("Post not found");
    }

    const featuredMedia = post.featured_media
      ? await getFeaturedMediaById(post.featured_media)
      : null;
    const author = await getAuthorById(post.author);
    const date = new Date(post.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const category = await getCategoryById(post.categories[0]);

    return (
      <Section>
        <Container>
          <Prose>
            <h1 className="!tracking-tight">
              <Balancer>
                <span
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                ></span>
              </Balancer>
            </h1>
            <div className="flex justify-between items-center gap-4 text-sm mb-4">
              <h5>
                Published {date}
                {author?.name && (
                  <span>
                    {" "}
                    by <a href={`/posts/?author=${author.id}`}>{author.name}</a>
                  </span>
                )}
              </h5>

              {category && (
                <Link
                  href={`/posts/?category=${category.id}`}
                  className={cn(
                    badgeVariants({ variant: "outline" }),
                    "!no-underline"
                  )}
                >
                  {category.name}
                </Link>
              )}
            </div>
            {featuredMedia?.source_url && (
              <div className="h-96 my-12 md:h-[500px] overflow-hidden flex items-center justify-center border rounded-lg bg-accent/25">
                {/* eslint-disable-next-line */}
                <img
                  className="w-full h-full object-cover"
                  src={featuredMedia.source_url}
                  alt={post.title.rendered}
                />
              </div>
            )}
          </Prose>

          <Article
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </Container>
      </Section>
    );
  } catch (error: any) {
    console.error("Error loading post:", error);

    return (
      <Section>
        <Container>
          <Prose>
            <h1>Post Not Found</h1>
            <p>Sorry, the requested post could not be found.</p>
            <Link href="/posts">← Back to Posts</Link>
          </Prose>
        </Container>
      </Section>
    );
  }
}
