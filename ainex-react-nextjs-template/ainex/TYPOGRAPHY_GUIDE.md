# Databrandix Typography System

This document defines the font system used across the Ainex template, following the Databrandix Typography Guideline.

## Fonts Configured

### 1. **Space Grotesk** (Headings & Display)
- **Purpose**: All headings (H1, H2, H3), website hero text, section titles, key statements
- **Weights**: 400, 500, 600, 700
- **CSS Variable**: `--tj-ff-heading`
- **Use Cases**:
  - H1 headings (weight: 700)
  - H2 headings (weight: 600)
  - H3 headings (weight: 500–600)
  - Hero text and key statements
  - Display text and taglines

### 2. **Inter** (Body, UI & Data)
- **Purpose**: Body paragraphs, UI elements, buttons, navigation, tables, documentation
- **Weights**: 400, 500, 600, 700
- **CSS Variable**: `--tj-ff-body`
- **Use Cases**:
  - Body text and paragraphs (weight: 400)
  - UI labels and emphasis (weight: 500)
  - Strong emphasis and semi-bold text (weight: 600)
  - Buttons, forms, and navigation
  - Blog content and data labels

## Implementation

Both fonts are imported via Google Fonts in `src/app/layout.tsx`:

```tsx
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--tj-ff-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--tj-ff-body",
});
```

## Styling Rules

In your SCSS files, fonts are applied via CSS variables:

- **Headings**: Use `var(--tj-ff-heading)` with Space Grotesk
- **Body text**: Use `var(--tj-ff-body)` with Inter

Example SCSS:
```scss
h1, h2, h3 {
  font-family: var(--tj-ff-heading);
}

p, body, .ui-element {
  font-family: var(--tj-ff-body);
}
```

## Font Sizing & Weights

| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 | Space Grotesk | 700 (Bold) | 76px |
| H2 | Space Grotesk | 600 (Semi-Bold) | 48px |
| H3 | Space Grotesk | 500–600 | 32px |
| Body Text | Inter | 400 (Regular) | 16px |
| Emphasis | Inter | 500 (Medium) | 16px |
| Strong | Inter | 600 (Semi-Bold) | 16px |
| Buttons | Inter | 500–600 | varies |

## Non-Negotiable Rules

❌ **Do NOT**:
- Replace fonts arbitrarily
- Mix additional fonts with Space Grotesk & Inter
- Stretch or distort text
- Apply decorative effects (shadow, glow, outline)

✅ **DO**:
- Maintain clear hierarchy between headings and body
- Use generous line spacing for readability
- Avoid tight letter spacing
- Keep typography calm and uncluttered
- Use weights consistently per element type

## Language Considerations

- **English text**: Uses Space Grotesk (headings) + Inter (body)
- **Bangla text**: Should use approved Bangla font (e.g., Noto Sans Bengali)
- **Mixed layouts**: Preserve font integrity—don't mix fonts within a single text block

## Typography Hierarchy Example

```scss
// Headings
h1 { 
  font-family: var(--tj-ff-heading);
  font-size: 76px;
  font-weight: 700;
}

h2 { 
  font-family: var(--tj-ff-heading);
  font-size: 48px;
  font-weight: 600;
}

// Body
p { 
  font-family: var(--tj-ff-body);
  font-size: 16px;
  font-weight: 400;
}

// UI Elements
button, input, select {
  font-family: var(--tj-ff-body);
  font-weight: 500;
}
```

---

**Last Updated**: February 8, 2026  
**Brand Intent**: Clarity, confidence, and strategic thinking. Typography supports decisions, data, and outcomes—never shouts or distracts.
