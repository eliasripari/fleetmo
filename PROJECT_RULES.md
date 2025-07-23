# Fleetmo Project Rules & Guidelines

> **⚠️ IMPORTANTE: Questo file deve essere letto all'inizio di ogni sessione di sviluppo per mantenere la coerenza del progetto.**

## 🌐 Internationalization (i18n)

### Translation System

- **Base Language**: English (`en.json`)
- **Secondary Language**: Italian (`it.json`)
- **Location**: `/messages/` directory
- **Structure**: Nested JSON objects with descriptive keys

### Translation Rules

1. **NEVER hardcode text strings** in components
2. **ALWAYS use `useTranslations()` hook** from `next-intl`
3. **Organize translations** by page/section (e.g., `HomePage.pricing.title`)
4. **Use descriptive keys** that indicate content purpose
5. **Maintain consistent structure** between language files

### Adding New Translations

```typescript
// ✅ Correct
const t = useTranslations("HomePage");
<h1>{t("pricing.title")}</h1>

// ❌ Wrong
<h1>Pricing</h1>
```

## 🎨 Design System & Styling

### 🎨 Color Palette

- **Primary Brand Green**: `#41CF8F` (CTAs, highlights, success states, icons)
- **Background Colors**:
  - Primary: `bg-white` (cards, main content)
  - Secondary: `bg-gray-100` / `bg-gray-200` (section backgrounds)
  - Dark: `bg-foreground` / `bg-black` (footer, dark sections)
- **Text Colors**:
  - Primary: Default foreground colors
  - Secondary: `text-gray-600` (descriptions, muted text)
  - White: `text-white` (on dark backgrounds)
- **CSS Variables** (defined in globals.css):
  - `--primary`, `--secondary`, `--muted`, `--accent`
  - `--background`, `--foreground`, `--card`
  - `--border`, `--input`, `--ring`

### 🔤 Typography System

- **Font Stack**:
  - Primary: `Geist Sans` (`--font-geist-sans`)
  - Monospace: `Geist Mono` (`--font-geist-mono`)
  - Fallback: `Inter` with `font-sans`
- **Heading Hierarchy**:
  - H1: `text-4xl md:text-5xl font-semibold tracking-tighter`
  - H2: `text-3xl font-medium tracking-tight`
  - H3: `text-2xl font-medium tracking-tight`
  - H4: `text-xl font-medium tracking-tight`
- **Body Text**: `text-base leading-7`
- **Small Text**: `text-sm` (features, descriptions)
- **Micro Text**: `text-xs` (badges, labels)

### 📐 Spacing & Layout System

- **Section Spacing**: `py-8 md:py-12` (from craft.tsx)
- **Container**: `max-w-7xl mx-auto p-6 sm:p-8`
- **Content Spacing**: `gap-4`, `gap-6`, `gap-8` (consistent scale)
- **Card Padding**: `p-6` or `p-8` (depending on size)
- **Margins**: Use `mt-4`, `mb-4`, `my-6` etc. (Tailwind scale)

### 🎯 Component Design Patterns

1. **Cards**:

   - Background: `bg-white`
   - Border: `border border-foreground` or subtle borders
   - Radius: `rounded-lg` or `rounded-2xl`
   - Shadow: `shadow-xl` for elevation
   - Hover: `hover:shadow-lg transition-all duration-300`

2. **Buttons**:

   - Primary: Custom green `#41CF8F` background
   - Secondary: `variant="outline"`
   - Sizes: `default`, `sm`, `lg`
   - Hover: `hover:opacity-90` or darker shades

3. **Badges**:
   - Variants: `default`, `secondary`, `outline`
   - Custom colors via inline styles when needed
   - Small text: `text-xs font-semibold`

### 🎨 Visual Hierarchy Rules

1. **Use Tailwind classes** as primary styling method
2. **Custom colors via inline styles** only when Tailwind lacks exact match
3. **Consistent spacing**: Follow Tailwind spacing scale (4, 6, 8, 10, 12, 16, etc.)
4. **Mobile-first responsive**: Always include responsive prefixes (`md:`, `lg:`)
5. **Dark mode support**: Use CSS variables for theme-aware colors

## 📁 File Organization

### Component Structure

```
components/
├── Sections/
│   └── Home/
│       ├── HeroSection.tsx
│       ├── IntroductionSection.tsx
│       ├── PricingSection.tsx
│       └── index.ts (centralized exports)
├── ui/ (shadcn components)
└── craft/ (layout components)
```

### Section Components Rules

1. **One section per file**
2. **Export from index.ts** for clean imports
3. **Use descriptive component names** ending with "Section"
4. **Include all necessary imports** in each file

## 🔧 Technical Standards

### Import Organization

```typescript
// 1. External libraries
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

// 2. Internal components
import { Section, Container } from "@/components/craft";
import { Badge } from "@/components/ui/badge";

// 3. Icons
import { Check, Sparkles } from "lucide-react";
```

### Component Structure

```typescript
export const ComponentName = () => {
  const t = useTranslations("HomePage");

  // Component logic here

  return (
    <Section>
      <Container>{/* Component JSX */}</Container>
    </Section>
  );
};
```

## 🎯 Pricing Section Specific Rules

### Plan Structure

- **Standard Plan**: Basic features, outline button
- **Pro Plan**: All standard + AI features, highlighted with green theme
- **Pricing Display**: Large price with currency symbol, period below

### Feature Lists

- **Standard Features**: 15 core features (feature1-feature15)
- **AI Features**: 5 additional AI features (aiFeatures.feature1-5)
- **Icons**: Check (✓) for standard, Sparkles (✨) for AI features
- **Color**: All icons use `#41CF8F`

## 📱 Responsive Design & Layout Patterns

### 📐 Breakpoints System

- **Mobile**: Default (base) - single column layouts
- **Tablet**: `md:` prefix (768px+) - two columns, adjusted spacing
- **Desktop**: `lg:` prefix (1024px+) - full layouts
- **Large**: `xl:` and `2xl:` for very large screens

### 🏗️ Grid Systems & Layout Patterns

1. **Section Layouts**:

   - Hero: Full-width with centered content
   - Introduction: Bento grid (`md:grid-cols-4` with varying spans)
   - Pricing: `grid-cols-1 md:grid-cols-2`
   - Features: `grid-cols-1 md:grid-cols-3`
   - How It Works: Alternating `md:grid-cols-2`

2. **Card Grids**:

   - Introduction: Mixed spans (2+1+1, then 4x1)
   - Coming Soon: `grid-cols-1 md:grid-cols-3`
   - Features: Single column on mobile, multi-column on desktop

3. **Content Widths**:
   - Full width: `w-full`
   - Constrained: `max-w-4xl mx-auto` (pricing)
   - Text content: `max-w-2xl mx-auto` (descriptions)
   - Prose: `max-w-prose` (articles)

### 🎯 Layout Spacing Rules

- **Section gaps**: `gap-4`, `gap-6`, `gap-8` (never odd numbers)
- **Card spacing**: `p-6` (small cards), `p-8` (large cards)
- **Text spacing**: `gap-2` (tight), `gap-4` (normal), `gap-6` (loose)
- **Vertical rhythm**: `space-y-6` for content sections

## 🎬 Animations & Interactions

### 🎭 Animation Patterns

1. **Text Animations**:

   - Use `SplitText` component for title reveals
   - Standard config: `delay={50}`, `threshold={0.1}`
   - Animation: `translate3d(0,50px,0)` to `translate3d(0,0,0)`

2. **Content Animations**:

   - Use `AnimatedContent` for cards and sections
   - Standard: `distance={50}`, `direction="vertical"`
   - Staggered delays: `delay={200 + index * 100}`

3. **Hover Effects**:
   - Cards: `hover:shadow-lg transition-all duration-300`
   - Buttons: `hover:opacity-90` or color transitions
   - Links: `hover:underline underline-offset-4`

### 🎨 Visual Effects

- **Gradients**: `bg-gradient-to-br from-green-50 to-emerald-50`
- **Shadows**: `shadow-xl` for cards, `shadow-lg` on hover
- **Borders**: `border border-foreground` or custom colors
- **Backdrop**: Aurora effects for footer sections

### 🎠 Carousel/Swiper Components

1. **AppCarousel** (Driver App Section):
   - Uses Swiper with coverflow effect
   - 7 slides with center-focused design
   - **Infinite loop**: Continuous scrolling without end
   - Active slide: full size (scale 1.0) and sharp
   - Inactive slides: uniform smaller size (scale 0.92), blurred (2px)
   - Auto-play with 3s delay
   - Custom pagination with brand green (`#41CF8F`)
   - Slide dimensions: 350px width, 600px height
   - Border radius: 20px for rounded corners

## 🚀 Performance & Optimization

### ⚡ Lazy Loading Strategy

- Use `dynamic()` for heavy components (SplitText, SpotlightCard, etc.)
- Set `ssr: false` for client-only animations
- Lazy load images below the fold

### 🖼️ Image Optimization

- **Always use Next.js Image component**
- Provide descriptive `alt` text for accessibility
- Use `priority` for above-the-fold images
- Set appropriate `width` and `height`
- Use `quality={100}` for hero images

## ✅ Code Quality

### TypeScript

- Use proper typing for props
- Avoid `any` type
- Use interfaces for complex objects

### Naming Conventions

- **Components**: PascalCase (e.g., `PricingSection`)
- **Files**: PascalCase for components (e.g., `PricingSection.tsx`)
- **Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE

### Comments

- Add comments for complex logic
- Document component purpose at the top
- Explain non-obvious styling decisions

## 🔄 State Management

### Client Components

- Add `"use client"` directive only when necessary
- Prefer server components when possible
- Use `useState` for simple local state

## 🏗️ Section-Specific Design Rules

### 🎯 Hero Section

- Full-width background with centered content
- Large typography: `text-4xl md:text-5xl`
- CTA buttons with animations
- Hero image with `priority` loading

### 🎨 Introduction Section (Bento Grid)

- Mixed grid layout: `md:grid-cols-4`
- First row: 2+1+1 column spans
- Second row: 4 equal columns
- Uniform card height: `h-[250px]`
- Hover effects on all cards

### 💰 Pricing Section

- Two-column layout: `grid-cols-1 md:grid-cols-2`
- Standard plan: outline button, simple design
- Pro plan: highlighted with green theme, gradient background
- Feature lists with appropriate icons (Check/Sparkles)

### 🚗 How It Works Section

- Dark background: `bg-foreground text-white`
- Alternating grid layout with images
- Numbered steps with circular badges
- Animated connecting lines (desktop only)

### 📱 Driver App Section

- Mobile-first design with app mockup
- Feature descriptions alongside phone image
- Responsive text alignment

### 🔮 Coming Soon Section

- Dark theme with spotlight cards
- Three-column grid: `grid-cols-1 md:grid-cols-3`
- Custom spotlight effects
- Icon-based feature presentation

## 📋 Development Checklist

### ✅ Before Starting Development

- [ ] Read this PROJECT_RULES.md file completely
- [ ] Understand the design system and color palette
- [ ] Check existing components for similar patterns

### ✅ During Development

- [ ] All text is translatable (no hardcoded strings)
- [ ] Translations added to both `en.json` and `it.json`
- [ ] Responsive design implemented (`mobile-first`)
- [ ] Consistent color scheme used (`#41CF8F` for primary)
- [ ] Proper spacing scale followed (4, 6, 8, 10, 12, 16)
- [ ] Component properly exported from index.ts
- [ ] TypeScript types defined properly
- [ ] Accessibility considerations (alt text, semantic HTML)
- [ ] Performance optimized (lazy loading if needed)

### ✅ Before Committing

- [ ] Component follows established patterns
- [ ] No hardcoded colors (use CSS variables or `#41CF8F`)
- [ ] Responsive breakpoints tested
- [ ] Animations work smoothly
- [ ] No console errors or warnings

## 🎨 Brand Guidelines & Visual Identity

### 🎯 Brand Personality

- **Modern & Clean**: Minimalist design with plenty of white space
- **Professional**: Business-focused with premium feel
- **Approachable**: Friendly UI with smooth animations
- **Reliable**: Consistent patterns and predictable interactions

### 🎨 Visual Language

- **Primary Color**: `#41CF8F` (vibrant green for trust and growth)
- **Typography**: Clean, modern fonts (Geist Sans family)
- **Iconography**: Lucide React icons for consistency
- **Photography**: High-quality app screenshots and mockups

### 📐 Design Principles

1. **Consistency First**: Follow established patterns
2. **Mobile-First**: Design for mobile, enhance for desktop
3. **Performance Matters**: Optimize for speed and accessibility
4. **Content-Driven**: Design serves the content, not vice versa
5. **User-Centered**: Every decision should benefit the user experience

## 🔧 Technical Architecture

### 🏗️ Component Hierarchy

```
app/[locale]/
├── layout.tsx (fonts, theme, navigation)
├── page.tsx (section imports)
└── globals.css (CSS variables, base styles)

components/
├── Sections/Home/ (page sections)
├── ui/ (shadcn/ui components)
├── craft/ (layout system)
├── AnimatedContent/ (animations)
└── [feature]/ (specialized components)
```

### 🎨 Styling Architecture

- **Base Layer**: Tailwind CSS + CSS variables
- **Component Layer**: shadcn/ui components
- **Layout Layer**: Craft design system
- **Custom Layer**: Project-specific styles

---

## 🚨 Critical Reminders

> **⚠️ ALWAYS READ THIS FILE FIRST** before starting any development work.

1. **Never hardcode text** - use translation system
2. **Never hardcode colors** - use CSS variables or `#41CF8F`
3. **Always test responsive** - mobile-first approach
4. **Follow spacing scale** - 4, 6, 8, 10, 12, 16 (no odd numbers)
5. **Use established patterns** - check existing components first

**Remember**: Consistency is key. When in doubt, follow existing patterns in the codebase.
