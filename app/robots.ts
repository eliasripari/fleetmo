import { MetadataRoute } from "next";
import { headers } from "next/headers";

export default function robots(): MetadataRoute.Robots {
  const headersList = headers();
  const host = headersList.get("host") || "fleetmo.app";

  // Configurazione per fleetmo.app (landing page pubblica)
  if (host === "fleetmo.app" || host === "www.fleetmo.app") {
    return {
      rules: [
        {
          userAgent: "*",
          allow: [
            "/",
            "/it/",
            "/en/",
            "/posts/",
            "/providers/",
            "/suppliers/",
            "/sitemap.xml",
          ],
          disallow: [
            "/api/",
            "/_next/",
            "/favicon.ico",
            "/*.json$",
            "/test/",
            "/admin/",
            "/wp-admin/",
            "/wp-content/",
            "/wp-includes/",
          ],
          crawlDelay: 1,
        },
      ],
      sitemap: "https://fleetmo.app/sitemap.xml",
    };
  }

  // Configurazione per my.fleetmo.app (app protetta)
  if (host === "my.fleetmo.app") {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: ["/"],
        },
      ],
    };
  }

  // Configurazione per wp.fleetmo.app (WordPress backend)
  if (host === "wp.fleetmo.app") {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: [
            "/",
            "/wp-admin/",
            "/wp-content/",
            "/wp-includes/",
            "/wp-json/",
            "/admin/",
            "/login/",
          ],
        },
      ],
    };
  }

  // Default fallback (blocca tutto per domini non riconosciuti)
  return {
    rules: [
      {
        userAgent: "*",
        disallow: ["/"],
      },
    ],
  };
}
