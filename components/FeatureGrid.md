# FeatureGrid Component Documentation

## Overview

Il componente `FeatureGrid` fornisce un sistema flessibile e riutilizzabile per creare layout di feature cards con configurazioni schema-based. Supporta due design types (standard e accent) e layout completamente personalizzabili.

## Caratteristiche

- ✅ **Schema-based**: Definizione tramite array di configurazioni
- ✅ **Layout flessibile**: Supporto per colonne variabili (1, 2, 3, 4)
- ✅ **Design variants**: Standard e accent (con effetti speciali)
- ✅ **Animazioni**: Delay personalizzabili per ogni card
- ✅ **Responsive**: Layout ottimizzato mobile/desktop
- ✅ **TypeScript**: Completamente tipizzato
- ✅ **Traduzioni**: Integrazione con next-intl
- ✅ **Riutilizzabile**: Utilizzabile in qualsiasi sezione

## Utilizzo Base

```tsx
import { FeatureGrid, createFeatureConfig } from "@/components/FeatureGrid";
import { MyIcon } from "lucide-react";

const MyComponent = () => {
  const t = useTranslations("MySection");

  const features = [
    createFeatureConfig(1, MyIcon, "Badge Text", 2, "standard", 200, 1),
    createFeatureConfig(2, MyIcon, "Badge Text", 1, "accent", 300, 1),
  ];

  return <FeatureGrid features={features} t={t} translationKey="features" />;
};
```

## Parametri di createFeatureConfig

```tsx
createFeatureConfig(
  id: number,           // ID univoco per le traduzioni
  icon: Component,      // Componente icona di Lucide React
  badge: string,        // Testo del badge
  columns: number,      // Colonne occupate (1-4)
  design: "standard" | "accent",  // Tipo di design
  delay: number,        // Delay animazione (ms)
  row: number          // Numero di riga
)
```

## Design Types

### Standard

- Border grigio semplice
- Background bianco
- Badge nero
- Hover shadow normale

### Accent

- Border verde (#41CF8F)
- Background gradient verde
- Badge gradient con sparkle ✨
- Effetto glow sull'icona
- Titolo con gradient text
- Elemento decorativo stellina
- Shadow colorata al hover

## Layout Presets

Il componente include preset comuni per layout frequenti:

```tsx
import { LAYOUT_PRESETS } from "@/components/FeatureGrid";

// Layout 2-1-1 (una card doppia + due singole)
const heroRow = LAYOUT_PRESETS.HERO_ROW(200);

// Layout 1-1-1-1 (quattro card uguali)
const equalRow = LAYOUT_PRESETS.EQUAL_ROW(400);

// Layout 1-1-2 (due singole + una doppia accent)
const mixedRow = LAYOUT_PRESETS.MIXED_ROW(600);
```

## Struttura Traduzioni

Le traduzioni devono seguire questa struttura:

```json
{
  "MySection": {
    "features": {
      "feature1": {
        "title": "Titolo Feature 1",
        "description": "Descrizione feature 1"
      },
      "feature2": {
        "title": "Titolo Feature 2",
        "description": "Descrizione feature 2"
      }
    }
  }
}
```

## Esempi Avanzati

### Layout Complesso (Home Page)

```tsx
const featuresSchema = [
  // Row 1: Hero layout (2-1-1)
  createFeatureConfig(1, Upload, "Upload", 2, "standard", 200, 1),
  createFeatureConfig(2, Flight, "Flight", 1, "standard", 300, 1),
  createFeatureConfig(3, Exchange, "Exchange", 1, "standard", 400, 1),

  // Row 2: Equal layout (1-1-1-1)
  createFeatureConfig(4, Voucher, "Voucher", 1, "standard", 500, 2),
  createFeatureConfig(5, Driver, "Driver", 1, "standard", 600, 2),
  createFeatureConfig(6, Track, "Track", 1, "standard", 700, 2),
  createFeatureConfig(7, NoShow, "NoShow", 1, "standard", 800, 2),

  // Row 3: Mixed layout (1-1-2) con accent
  createFeatureConfig(8, Money, "Money", 1, "standard", 900, 3),
  createFeatureConfig(9, Users, "Users", 1, "standard", 1000, 3),
  createFeatureConfig(10, AI, "AI", 2, "accent", 1100, 3),
];
```

### Layout Personalizzato

```tsx
const customFeatures = [
  // Row 1: Tre colonne uguali
  createFeatureConfig(1, Icon1, "Feature 1", 1, "standard", 200, 1),
  createFeatureConfig(2, Icon2, "Feature 2", 1, "accent", 300, 1),
  createFeatureConfig(3, Icon3, "Feature 3", 1, "standard", 400, 1),

  // Row 2: Una card full-width
  createFeatureConfig(4, BigIcon, "Big Feature", 4, "accent", 500, 2),
];
```

## Vantaggi del Sistema Schema

1. **Manutenibilità**: Modifica layout cambiando solo la configurazione
2. **Consistenza**: Design uniformi garantiti dal componente
3. **Flessibilità**: Layout completamente personalizzabili
4. **Performance**: Riutilizzo componenti senza duplicazione
5. **DX**: Autocomplete TypeScript e error checking
6. **Scalabilità**: Facile aggiunta di nuove feature/sezioni

## Migrazione da Layout Manuali

**Prima (manuale):**

```tsx
// 200+ righe di codice duplicato per ogni card
<div className="md:col-span-2">
  <AnimatedContent delay={200}>
    <div className="border rounded-2xl...">// 50+ righe per ogni card</div>
  </AnimatedContent>
</div>
```

**Dopo (schema):**

```tsx
// 5 righe per definire tutto il layout
const features = [createFeatureConfig(1, Icon, "Badge", 2, "standard", 200, 1)];

<FeatureGrid features={features} t={t} />;
```

## Best Practices

1. **IDs consecutivi**: Usa ID 1, 2, 3... per le traduzioni
2. **Delays progressivi**: Incrementa delay di 100ms tra card
3. **Accent sparing**: Usa accent solo per 1-2 feature importanti
4. **Row grouping**: Mantieni max 4 colonne per riga
5. **Translation keys**: Usa keys consistenti (es. "features")

Il sistema FeatureGrid trasforma layout complessi in configurazioni semplici e manutenibili! 🎨✨
