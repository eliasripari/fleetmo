import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/wordpress";
import { siteConfig } from "@/site.config";
import { routing } from "@/i18n/routing";
import { headers } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers();
  const host = headersList.get("host") || "fleetmo.app";

  // Solo fleetmo.app deve generare sitemap pubbliche
  if (host !== "fleetmo.app" && host !== "www.fleetmo.app") {
    return [];
  }

  const posts = await getAllPosts();
  const { locales, defaultLocale } = routing;

  // Generate URLs for all locales - solo pagine pubbliche
  const staticPages = [
    "",
    "/providers",
    "/suppliers",
    "/posts",
    "/posts/authors",
    "/posts/categories",
    "/posts/tags",
  ];

  const staticUrls: MetadataRoute.Sitemap = [];

  // Add URLs for each locale
  locales.forEach((locale) => {
    staticPages.forEach((page) => {
      const isDefault = locale === defaultLocale;
      const localePath = isDefault ? page : `/${locale}${page}`;

      staticUrls.push({
        url: `${siteConfig.site_domain}${localePath}`,
        lastModified: new Date(),
        changeFrequency:
          page === "" ? "yearly" : page === "/posts" ? "weekly" : "monthly",
        priority:
          page === ""
            ? 1
            : page === "/posts"
            ? 0.8
            : page === "/providers" || page === "/suppliers"
            ? 0.9
            : 0.5,
      });
    });
  });

  // Add blog posts for each locale
  const postUrls: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    posts.forEach((post) => {
      const isDefault = locale === defaultLocale;
      const localePath = isDefault
        ? `/posts/${post.slug}`
        : `/${locale}/posts/${post.slug}`;

      postUrls.push({
        url: `${siteConfig.site_domain}${localePath}`,
        lastModified: new Date(post.modified),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return [...staticUrls, ...postUrls];
}
