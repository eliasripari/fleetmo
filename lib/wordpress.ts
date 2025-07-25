// Description: WordPress API functions
// Used to fetch data from a WordPress site using the WordPress REST API
// Types are imported from `wp.d.ts`

import querystring from "query-string";
import { revalidateTag } from "next/cache";

import type {
  Post,
  Category,
  Tag,
  Page,
  Author,
  FeaturedMedia,
} from "./wordpress.d";

// WordPress Config
const baseUrl = process.env.WORDPRESS_URL;

if (!baseUrl) {
  throw new Error("WORDPRESS_URL environment variable is not defined");
}

// Utility type for fetch options
interface FetchOptions {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };
}

function getUrl(path: string, query?: Record<string, any>) {
  const params = query ? querystring.stringify(query) : null;
  return `${baseUrl}${path}${params ? `?${params}` : ""}`;
}

// Default fetch options for WordPress API calls
const defaultFetchOptions: FetchOptions = {
  next: {
    tags: ["wordpress"],
    revalidate: 3600, // Revalidate every hour by default
  },
};

// Error handling utility
class WordPressAPIError extends Error {
  constructor(message: string, public status: number, public endpoint: string) {
    super(message);
    this.name = "WordPressAPIError";
  }
}

// Utility function for making WordPress API requests
async function wordpressFetch<T>(
  url: string,
  options: FetchOptions = {}
): Promise<T> {
  try {
    const userAgent = "Next.js WordPress Client";

    console.log("Making request to:", url);
    const response = await fetch(url, {
      ...defaultFetchOptions,
      ...options,
      headers: {
        "User-Agent": userAgent,
      },
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("WordPress API error response:", errorText);
      throw new WordPressAPIError(
        `WordPress API request failed: ${response.statusText}`,
        response.status,
        url
      );
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error in wordpressFetch:", error);
    if (error instanceof WordPressAPIError) {
      throw error;
    }
    throw new WordPressAPIError(
      `Failed to fetch from WordPress: ${error?.message || "Unknown error"}`,
      500,
      url
    );
  }
}

// WordPress Functions

export async function getAllPosts(filterParams?: {
  author?: string;
  tag?: string;
  category?: string;
  search?: string;
  lang?: string;
}): Promise<Post[]> {
  try {
    const query: Record<string, any> = {
      _embed: true,
      per_page: 100,
    };

    if (filterParams?.lang) {
      query.lang = filterParams.lang;
    }

    if (filterParams?.search) {
      // Search in post content and title
      query.search = filterParams.search;

      // If we have additional filters with search, use them
      if (filterParams?.author) {
        query.author = filterParams.author;
      }
      if (filterParams?.tag) {
        query.tag = filterParams.tag;
      }
      if (filterParams?.category) {
        query.categories = filterParams.category;
      }
    } else {
      // If no search term, just apply filters
      if (filterParams?.author) {
        query.author = filterParams.author;
      }
      if (filterParams?.tag) {
        query.tag = filterParams.tag;
      }
      if (filterParams?.category) {
        query.categories = filterParams.category;
      }
    }

    const url = getUrl(`/wp-json/wp/v2/posts`, query);
    const posts = await wordpressFetch<Post[]>(url, {
      next: {
        ...defaultFetchOptions.next,
        tags: ["wordpress", "posts"],
      },
    });

    // If we have a specific language and no posts found, try fallback to default language
    if (filterParams?.lang && (!posts || posts.length === 0)) {
      console.log(
        `No posts found for language ${filterParams.lang}, falling back to default`
      );

      // Remove lang parameter and try again
      const fallbackQuery = { ...query };
      delete fallbackQuery.lang;

      const fallbackUrl = getUrl(`/wp-json/wp/v2/posts`, fallbackQuery);
      const fallbackPosts = await wordpressFetch<Post[]>(fallbackUrl, {
        next: {
          ...defaultFetchOptions.next,
          tags: ["wordpress", "posts"],
        },
      });

      return fallbackPosts || [];
    }

    return posts || [];
  } catch (error: any) {
    console.error("Error in getAllPosts:", error);
    // Return empty array instead of throwing error
    return [];
  }
}

export async function getPostById(id: number): Promise<Post> {
  const url = getUrl(`/wp-json/wp/v2/posts/${id}`);
  const response = await wordpressFetch<Post>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `post-${id}`],
    },
  });

  return response;
}

export async function getPostBySlug(
  slug: string,
  lang?: string
): Promise<Post> {
  try {
    const query: Record<string, any> = {
      _embed: true,
    };

    if (lang) {
      query.lang = lang;
    }

    const url = getUrl(`/wp-json/wp/v2/posts`, { ...query, slug });
    console.log("Fetching post with URL:", url);

    const posts = await wordpressFetch<Post[]>(url);
    console.log("Posts response:", posts);

    if (!posts || posts.length === 0) {
      // If no post found in the requested language, try to find the original post
      const originalUrl = getUrl(`/wp-json/wp/v2/posts`, {
        _embed: true,
        slug,
      });
      console.log("Trying to fetch original post with URL:", originalUrl);

      const originalPosts = await wordpressFetch<Post[]>(originalUrl);
      console.log("Original posts response:", originalPosts);

      if (!originalPosts || originalPosts.length === 0) {
        throw new WordPressAPIError("Post not found", 404, url);
      }

      const originalPost = originalPosts[0];

      // If the original post has translations and we have a language, try to get the translation
      if (
        lang &&
        originalPost.translations &&
        originalPost.translations[lang]
      ) {
        const translationId = originalPost.translations[lang];
        const translationUrl = getUrl(`/wp-json/wp/v2/posts/${translationId}`, {
          _embed: true,
        });
        console.log("Fetching translation with URL:", translationUrl);

        const translation = await wordpressFetch<Post>(translationUrl);
        return translation;
      }

      return originalPost;
    }

    return posts[0];
  } catch (error: any) {
    console.error("Error in getPostBySlug:", error);
    if (error instanceof WordPressAPIError) {
      throw error;
    }
    throw new WordPressAPIError(
      `Failed to fetch post: ${error?.message || "Unknown error"}`,
      500,
      `posts?slug=${slug}`
    );
  }
}

export async function getAllCategories(): Promise<Category[]> {
  const url = getUrl("/wp-json/wp/v2/categories");
  const response = await wordpressFetch<Category[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "categories"],
    },
  });

  return response;
}

export async function getCategoryById(id: number): Promise<Category> {
  const url = getUrl(`/wp-json/wp/v2/categories/${id}`);
  const response = await wordpressFetch<Category>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `category-${id}`],
    },
  });

  return response;
}

export async function getCategoryBySlug(slug: string): Promise<Category> {
  const url = getUrl("/wp-json/wp/v2/categories", { slug });
  const response = await wordpressFetch<Category[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `category-${slug}`],
    },
  });

  return response[0];
}

export async function getPostsByCategory(categoryId: number): Promise<Post[]> {
  const url = getUrl("/wp-json/wp/v2/posts", { categories: categoryId });
  const response = await wordpressFetch<Post[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `category-${categoryId}`],
    },
  });

  return response;
}

export async function getPostsByTag(tagId: number): Promise<Post[]> {
  const url = getUrl("/wp-json/wp/v2/posts", { tags: tagId });
  const response = await wordpressFetch<Post[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `tag-${tagId}`],
    },
  });

  return response;
}

export async function getTagsByPost(postId: number): Promise<Tag[]> {
  const url = getUrl("/wp-json/wp/v2/tags", { post: postId });
  const response = await wordpressFetch<Tag[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `post-${postId}`],
    },
  });

  return response;
}

export async function getAllTags(): Promise<Tag[]> {
  const url = getUrl("/wp-json/wp/v2/tags");
  const response = await wordpressFetch<Tag[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "tags"],
    },
  });

  return response;
}

export async function getTagById(id: number): Promise<Tag> {
  const url = getUrl(`/wp-json/wp/v2/tags/${id}`);
  const response = await wordpressFetch<Tag>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `tag-${id}`],
    },
  });

  return response;
}

export async function getTagBySlug(slug: string): Promise<Tag> {
  const url = getUrl("/wp-json/wp/v2/tags", { slug });
  const response = await wordpressFetch<Tag[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `tag-${slug}`],
    },
  });

  return response[0];
}

export async function getAllPages(): Promise<Page[]> {
  const url = getUrl("/wp-json/wp/v2/pages");
  const response = await wordpressFetch<Page[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "pages"],
    },
  });

  return response;
}

export async function getPageById(id: number): Promise<Page> {
  const url = getUrl(`/wp-json/wp/v2/pages/${id}`);
  const response = await wordpressFetch<Page>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `page-${id}`],
    },
  });

  return response;
}

export async function getPageBySlug(
  slug: string,
  lang?: string
): Promise<Page> {
  try {
    const query: Record<string, any> = { _embed: true };
    if (lang) query.lang = lang;

    const url = getUrl(`/wp-json/wp/v2/pages`, { ...query, slug });
    const pages = await wordpressFetch<Page[]>(url);

    if (!pages || pages.length === 0) {
      // Fallback: cerca la pagina originale
      const originalUrl = getUrl(`/wp-json/wp/v2/pages`, {
        _embed: true,
        slug,
      });
      const originalPages = await wordpressFetch<Page[]>(originalUrl);

      if (!originalPages || originalPages.length === 0) {
        throw new WordPressAPIError("Page not found", 404, url);
      }

      const originalPage = originalPages[0];
      // Se la pagina originale ha traduzioni, cerca la traduzione
      if (
        lang &&
        originalPage.translations &&
        originalPage.translations[lang]
      ) {
        const translationId = originalPage.translations[lang];
        const translationUrl = getUrl(`/wp-json/wp/v2/pages/${translationId}`, {
          _embed: true,
        });
        const translation = await wordpressFetch<Page>(translationUrl);
        return translation;
      }
      return originalPage;
    }
    return pages[0];
  } catch (error: any) {
    throw new WordPressAPIError(
      `Failed to fetch page: ${error?.message || "Unknown error"}`,
      500,
      `pages?slug=${slug}`
    );
  }
}

export async function getAllAuthors(): Promise<Author[]> {
  const url = getUrl("/wp-json/wp/v2/users");
  const response = await wordpressFetch<Author[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", "authors"],
    },
  });

  return response;
}

export async function getAuthorById(id: number): Promise<Author> {
  const url = getUrl(`/wp-json/wp/v2/users/${id}`);
  const response = await wordpressFetch<Author>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `author-${id}`],
    },
  });

  return response;
}

export async function getAuthorBySlug(slug: string): Promise<Author> {
  const url = getUrl("/wp-json/wp/v2/users", { slug });
  const response = await wordpressFetch<Author[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `author-${slug}`],
    },
  });

  return response[0];
}

export async function getPostsByAuthor(authorId: number): Promise<Post[]> {
  const url = getUrl("/wp-json/wp/v2/posts", { author: authorId });
  const response = await wordpressFetch<Post[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `author-${authorId}`],
    },
  });

  return response;
}

export async function getPostsByAuthorSlug(
  authorSlug: string
): Promise<Post[]> {
  const author = await getAuthorBySlug(authorSlug);
  const url = getUrl("/wp-json/wp/v2/posts", { author: author.id });
  const response = await wordpressFetch<Post[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `author-${authorSlug}`],
    },
  });

  return response;
}

export async function getPostsByCategorySlug(
  categorySlug: string
): Promise<Post[]> {
  const category = await getCategoryBySlug(categorySlug);
  const url = getUrl("/wp-json/wp/v2/posts", { categories: category.id });
  const response = await wordpressFetch<Post[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `category-${categorySlug}`],
    },
  });

  return response;
}

export async function getPostsByTagSlug(tagSlug: string): Promise<Post[]> {
  const tag = await getTagBySlug(tagSlug);
  const url = getUrl("/wp-json/wp/v2/posts", { tags: tag.id });
  const response = await wordpressFetch<Post[]>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `tag-${tagSlug}`],
    },
  });

  return response;
}

export async function getFeaturedMediaById(id: number): Promise<FeaturedMedia> {
  const url = getUrl(`/wp-json/wp/v2/media/${id}`);
  const response = await wordpressFetch<FeaturedMedia>(url, {
    next: {
      ...defaultFetchOptions.next,
      tags: ["wordpress", `media-${id}`],
    },
  });

  return response;
}

// Helper function to search across categories
export async function searchCategories(query: string): Promise<Category[]> {
  const url = getUrl("/wp-json/wp/v2/categories", {
    search: query,
    per_page: 100,
  });
  return wordpressFetch<Category[]>(url);
}

// Helper function to search across tags
export async function searchTags(query: string): Promise<Tag[]> {
  const url = getUrl("/wp-json/wp/v2/tags", {
    search: query,
    per_page: 100,
  });
  return wordpressFetch<Tag[]>(url);
}

// Helper function to search across authors
export async function searchAuthors(query: string): Promise<Author[]> {
  const url = getUrl("/wp-json/wp/v2/users", {
    search: query,
    per_page: 100,
  });
  return wordpressFetch<Author[]>(url);
}

// Helper function to revalidate WordPress data
export async function revalidateWordPressData(tags: string[] = ["wordpress"]) {
  try {
    for (const tag of tags) {
      revalidateTag(tag);
    }
  } catch (error) {
    console.error("Failed to revalidate WordPress data:", error);
    throw new Error("Failed to revalidate WordPress data");
  }
}

// Export error class for error handling
export { WordPressAPIError };
