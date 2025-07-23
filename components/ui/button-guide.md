# Button Variants Guide

## 🎨 Palette di Bottoni Standardizzata

### 🟢 GREEN BUTTONS (Primary/CTA)

#### 1. `green` - Verde pieno
**Uso**: Azioni principali, Call-to-Action primarie
**Esempi**: "Join Waitlist", "Get Started", "Submit"
```tsx
<Button variant="green">Join Waitlist</Button>
```

#### 2. `green-outline` - Verde outline
**Uso**: Azioni secondarie in evidenza, alternative alle CTA principali
**Esempi**: "Learn More", "View Demo", azioni secondarie importanti
```tsx
<Button variant="green-outline">Learn More</Button>
```

### ⚫ DARK BUTTONS (Header/Secondary)

#### 3. `dark` - Nero pieno
**Uso**: Azioni scure, bottoni su sfondi chiari
**Esempi**: Bottoni generici, azioni neutre
```tsx
<Button variant="dark">Continue</Button>
```

#### 4. `dark-outline` - Dark outline
**Uso**: Login, azioni nell'header su sfondo scuro
**Esempi**: "Login", bottoni header su sfondo nero
```tsx
<Button variant="dark-outline">Login</Button>
```

### 🔵 ACCENT BUTTONS (Special)

#### 5. `green-accent` - Green accent
**Uso**: Registrazione speciale, bottoni highlight nell'header
**Esempi**: "Register Now", bottoni speciali nell'header
```tsx
<Button variant="green-accent">Register Now</Button>
```

### 📐 Sizes Disponibili

- `sm` - Piccolo (h-9)
- `default` - Standard (h-10) 
- `lg` - Grande (h-11)
- `icon` - Icona (h-10 w-10)

### 🎯 Guidelines di Utilizzo

1. **Hierarchy**: `green` > `green-outline` > `dark` > `dark-outline` > `green-accent`
2. **Contrasto**: Sempre verificare il contrasto con lo sfondo
3. **Consistency**: Usa gli stessi variants per azioni simili
4. **Context**: 
   - Header: `dark-outline`, `green-accent`
   - CTA Sections: `green`, `green-outline`
   - Forms: `green` (submit), `outline` (cancel)
   - General: `dark`, `outline`

### 🔄 Migration dai Vecchi Variants

- `brand` → `green`
- `brand-outline` → `green-outline`
- `brand-outline-foreground` → `dark-outline`
- `brand-accent` → `green-accent`
- `brand-ghost` → `ghost` (standard)

### ✅ Esempi di Utilizzo

```tsx
// Hero Section
<Button variant="green" size="lg">Get Started</Button>
<Button variant="green-outline" size="lg">View Demo</Button>

// Header
<Button variant="dark-outline">Login</Button>
<Button variant="green-accent">Register Now</Button>

// Form
<Button variant="outline">Cancel</Button>
<Button variant="green">Submit</Button>

// Cards/Features
<Button variant="green-outline">Learn More</Button>

// Dark backgrounds
<Button variant="green">Join Waitlist</Button>
``` 