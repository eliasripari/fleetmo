import { getCanonicalUrl, getHreflangAlternates } from "@/lib/canonical";
import { headers } from "next/headers";

interface CanonicalHeadProps {
  pathname: string;
}

export async function CanonicalHead({ pathname }: CanonicalHeadProps) {
  const canonicalUrl = await getCanonicalUrl(pathname);
  const hreflangAlternates = getHreflangAlternates(pathname);

  return (
    <>
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang alternates */}
      <link rel="alternate" hrefLang="en" href={hreflangAlternates.en} />
      <link rel="alternate" hrefLang="it" href={hreflangAlternates.it} />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={hreflangAlternates["x-default"]}
      />

      {/* Open Graph canonical */}
      <meta property="og:url" content={canonicalUrl} />
    </>
  );
}
