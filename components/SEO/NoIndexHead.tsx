/**
 * Componente per bloccare completamente l'indicizzazione SEO
 * Da utilizzare per applicazioni protette come my.fleetmo.app
 */

export function NoIndexHead() {
  return (
    <>
      <meta
        name="robots"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <meta
        name="googlebot"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />
      <meta
        name="bingbot"
        content="noindex, nofollow, noarchive, nosnippet, noimageindex"
      />

      {/* Previene caching e archivazione */}
      <meta
        httpEquiv="Cache-Control"
        content="no-cache, no-store, must-revalidate"
      />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />

      {/* Rimuove dalle ricerche sociali */}
      <meta property="og:robots" content="noindex, nofollow" />
      <meta name="twitter:robots" content="noindex, nofollow" />
    </>
  );
}
