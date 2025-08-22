import { headers } from "next/headers";
import { siteConfig } from "@/site.config";

/**
 * Genera l'URL canonico corretto per la pagina
 * Rimuove il prefisso /en/ per la lingua di default
 */
export async function getCanonicalUrl(pathname: string): Promise<string> {
  const headersList = headers();
  const host = headersList.get("host") || "fleetmo.app";

  // Solo per fleetmo.app
  if (host !== "fleetmo.app" && host !== "www.fleetmo.app") {
    return `https://${host}${pathname}`;
  }

  // Rimuovi prefisso /en/ per lingua di default
  let canonicalPath = pathname;
  if (pathname.startsWith("/en/")) {
    canonicalPath = pathname.replace("/en", "") || "/";
  }

  return `${siteConfig.site_domain}${canonicalPath}`;
}

/**
 * Genera hreflang alternates per SEO multilingua
 */
export function getHreflangAlternates(pathname: string) {
  const basePath = pathname.replace(/^\/(en|it)/, "") || "/";

  return {
    en: `${siteConfig.site_domain}${basePath}`,
    it: `${siteConfig.site_domain}/it${basePath}`,
    "x-default": `${siteConfig.site_domain}${basePath}`,
  };
}

/**
 * Determina se la pagina è nella lingua di default (senza prefisso locale)
 */
export function isDefaultLocale(pathname: string): boolean {
  return !pathname.startsWith("/it/");
}
