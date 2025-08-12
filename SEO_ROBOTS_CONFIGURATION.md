# Configurazione SEO e Robots - Fleetmo

## 🌐 Struttura Domini

Il progetto Fleetmo utilizza tre domini distinti con diverse politiche SEO:

### 1. **fleetmo.app** - Landing Page Pubblica

- **Scopo**: Sito marketing pubblico, blog, articoli
- **SEO**: Completamente indicizzabile
- **Robots**: Permessi per tutti i crawler

### 2. **my.fleetmo.app** - Applicazione Protetta

- **Scopo**: Dashboard utenti, area riservata
- **SEO**: Completamente bloccata l'indicizzazione
- **Robots**: Disallow per tutti i crawler

### 3. **wp.fleetmo.app** - Backend WordPress

- **Scopo**: CMS per gestione contenuti
- **SEO**: Completamente bloccata l'indicizzazione
- **Robots**: Disallow per tutti i crawler

## 📁 File di Configurazione

### 1. `app/robots.ts` - Robots Dinamico

Genera robots.txt specifici per ogni dominio:

```typescript
// fleetmo.app - Permette indicizzazione pagine pubbliche
// my.fleetmo.app - Blocca tutto
// wp.fleetmo.app - Blocca tutto
```

### 2. `app/robots.txt` - Robots Statico (Legacy)

Configurazione base per fleetmo.app come fallback.

### 3. `middleware.ts` - Header X-Robots-Tag

Aggiunge header HTTP per bloccare crawler sui domini protetti:

- `my.fleetmo.app`: `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`
- `wp.fleetmo.app`: `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`

### 4. `app/sitemap.ts` - Sitemap Dinamica

Genera sitemap solo per fleetmo.app, esclude domini protetti.

### 5. `components/SEO/NoIndexHead.tsx` - Meta Tags Blocco

Componente per applicazioni protette con meta tag anti-indicizzazione.

## 🔧 Implementazione

### Per Domini Pubblici (fleetmo.app)

```typescript
// Layout con meta robots positivi
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};
```

### Per Domini Protetti (my.fleetmo.app)

```typescript
// Usa NoIndexHead component
import { NoIndexHead } from "@/components/SEO/NoIndexHead";

export default function ProtectedLayout() {
  return (
    <head>
      <NoIndexHead />
    </head>
  );
}
```

## 🚫 Cosa Viene Bloccato

### my.fleetmo.app e wp.fleetmo.app:

- ❌ Indicizzazione Google/Bing
- ❌ Cache dei motori di ricerca
- ❌ Snippet nelle SERP
- ❌ Archiviazione (Wayback Machine)
- ❌ Indicizzazione immagini
- ❌ Condivisione sociale

### fleetmo.app - Solo Aree Riservate:

- ❌ `/api/*` - API endpoints
- ❌ `/_next/*` - File Next.js
- ❌ `/admin/*` - Area admin
- ❌ `*.json` - File configurazione

## 🎯 Vantaggi

1. **Sicurezza**: Impedisce l'indicizzazione di aree sensibili
2. **Performance**: Riduce il carico sui server da crawler
3. **Privacy**: Protegge dati utenti dall'indicizzazione
4. **SEO Focused**: Concentra l'indicizzazione solo sul contenuto marketing

## 📊 Monitoraggio

### Google Search Console

- Monitora errori crawling su fleetmo.app
- Verifica che my.fleetmo.app e wp.fleetmo.app non appaiano

### Strumenti di Test

```bash
# Test robots.txt
curl https://fleetmo.app/robots.txt
curl https://my.fleetmo.app/robots.txt
curl https://wp.fleetmo.app/robots.txt

# Test header X-Robots-Tag
curl -I https://my.fleetmo.app
curl -I https://wp.fleetmo.app
```

## 🔄 Aggiornamenti Futuri

1. **Nuovi Domini**: Aggiungere configurazione in `app/robots.ts` e `middleware.ts`
2. **Nuove Pagine Pubbliche**: Aggiornare array `staticPages` in `sitemap.ts`
3. **API Routes**: Aggiungere `/api/[route]` ai disallow se sensibili

## ⚠️ Note Importanti

- I crawler possono ignorare robots.txt, ma non gli header HTTP
- X-Robots-Tag ha precedenza sui meta tag
- La configurazione è attiva su tutti e tre i domini
- Testare sempre dopo modifiche con strumenti di validazione
