# WaitlistModal Component

Una modale riutilizzabile per l'iscrizione alla lista d'attesa di FleetMo che può essere utilizzata in qualsiasi parte dell'applicazione.

## Setup

1. **WaitlistProvider** è già configurato nel layout principale (`app/[locale]/layout.tsx`)
2. Le **traduzioni** sono configurate in `messages/en.json` e `messages/it.json`
3. La **modale** è disponibile globalmente tramite il hook `useWaitlist()`

## Utilizzo

### Componenti Client ("use client")

```tsx
"use client";

import { useWaitlist } from "@/components/WaitlistProvider";
import { Button } from "@/components/ui/button";

export const MyComponent = () => {
  const { openWaitlistModal } = useWaitlist();

  return <Button onClick={openWaitlistModal}>Join Waitlist</Button>;
};
```

### Componenti Server

Per componenti server, devi convertire il componente in client component aggiungendo `"use client";` in cima al file.

## API della Modale

### Hook useWaitlist()

```tsx
const { openWaitlistModal } = useWaitlist();
```

Restituisce:

- `openWaitlistModal: () => void` - Funzione per aprire la modale

### Funzionalità della Modale

- **Form di iscrizione** con validazione email
- **Gestione stati**: idle, loading, success, error
- **Chiusura automatica** dopo successo (3 secondi)
- **Reset automatico** del form alla chiusura
- **Messaggi di feedback** tradotti
- **Integrazione con API Brevo** esistente

## Esempi di Utilizzo

### In una Hero Section

```tsx
"use client";

import { useWaitlist } from "@/components/WaitlistProvider";

export const HeroSection = ({ t }) => {
  const { openWaitlistModal } = useWaitlist();

  return (
    <div>
      <h1>{t("title")}</h1>
      <Button onClick={openWaitlistModal}>{t("cta")}</Button>
    </div>
  );
};
```

### In una Pricing Section

```tsx
"use client";

import { useWaitlist } from "@/components/WaitlistProvider";

export const PricingCard = ({ plan }) => {
  const { openWaitlistModal } = useWaitlist();

  return (
    <div className="pricing-card">
      <h3>{plan.name}</h3>
      <Button onClick={openWaitlistModal}>{plan.cta}</Button>
    </div>
  );
};
```

### In un Footer o CTA Section

```tsx
"use client";

import { useWaitlist } from "@/components/WaitlistProvider";

export const CTASection = ({ t }) => {
  const { openWaitlistModal } = useWaitlist();

  return (
    <section>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <Button onClick={openWaitlistModal}>{t("joinWaitlist")}</Button>
    </section>
  );
};
```

## Traduzioni

Le traduzioni sono configurate nel namespace `WaitlistModal`:

### Inglese (messages/en.json)

```json
{
  "WaitlistModal": {
    "title": "Join the Waitlist",
    "description": "Be the first to know when FleetMo launches...",
    "form": {
      "emailLabel": "Email Address",
      "emailPlaceholder": "Enter your email address",
      "cancel": "Cancel",
      "joinWaitlist": "Join Waitlist",
      "subscribing": "Subscribing..."
    },
    "success": {
      "title": "Welcome to the Waitlist!",
      "autoClose": "This window will close automatically..."
    }
  }
}
```

### Italiano (messages/it.json)

```json
{
  "WaitlistModal": {
    "title": "Iscriviti alla Lista d'Attesa",
    "description": "Sii il primo a sapere quando FleetMo sarà lanciato...",
    "form": {
      "emailLabel": "Indirizzo Email",
      "emailPlaceholder": "Inserisci il tuo indirizzo email",
      "cancel": "Annulla",
      "joinWaitlist": "Lista d'Attesa",
      "subscribing": "Iscrizione..."
    },
    "success": {
      "title": "Benvenuto nella Lista d'Attesa!",
      "autoClose": "Questa finestra si chiuderà automaticamente..."
    }
  }
}
```

## Stili e Design

La modale segue il design system del progetto:

- **Colore primario**: `#41CF8F` (brand)
- **Componenti shadcn/ui**: Dialog, Button, Input, Label
- **Animazioni**: Basate su ShinyText esistente
- **Responsive**: Ottimizzata per mobile e desktop
- **Accessibilità**: Keyboard navigation e screen reader friendly

## Integrazione API

La modale utilizza la stessa API endpoint esistente:

- **Endpoint**: `/api/brevo/subscribe`
- **Metodo**: POST
- **Payload**: `{ email: string }`
- **Servizio**: Brevo (ex Sendinblue)

Non sono richieste modifiche all'API esistente.
