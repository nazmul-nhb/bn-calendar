---
layout: home

hero:
  name: "Bangla Calendar"
  text: "Comprehensive Bengali Calendar System Library"
  tagline: "Built for any JavaScript and TypeScript environment"
  image:
    src: /bn-calendar.png
    alt: Bangla Calendar Logo
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/installation
    - theme: alt
      text: API Reference
      link: /api/constructor

features:
  - icon: cycle
    title: Bidirectional Conversion
    details: Effortlessly convert dates between Bengali and Gregorian calendar systems with accurate leap year logic.
  - icon: 📜
    title: Multiple Calendar Variants
    details: Full support for both 'revised-2019' (official Bangladesh standard) and 'revised-1966' leap year rules.
  - icon: 🔢
    title: Digit Conversion Utilities
    details: Exported utilities to convert between Bangla (০-৯) and Latin (0-9) digits with flexible mode toggles.
  - icon: ⚡
    title: Zero Dependencies & Type Safe
    details: Fully written in TypeScript, tree-shakable, lightweight, and works in Node.js, browsers, and edge environments.
---

## Installation

::: code-group [Installation]

```sh [npm]
npm install bn-calendar
```

```sh [pnpm]
pnpm add bn-calendar
```

```sh [yarn]
yarn add bn-calendar
```

:::

## Quick Example

```typescript
import { BanglaCalendar } from 'bn-calendar';

// Current date in Bangla calendar
const today = new BanglaCalendar();
console.log(today.toString()); 
// Output: "শুক্রবার, ৯ ফাল্গুন, ১৪৩২ [বসন্ত]"

// Convert from Gregorian date string
const date = new BanglaCalendar('2026-02-20');
console.log(date.toJSON()); 
// Output: "১৪৩২-১১-০৮"

// Format with custom tokens
console.log(date.format('dd, DD mmmm (SS), YYYY বঙ্গাব্দ'));
// Output: "শু, ০৮ ফাল্গুন (বসন্ত), ১৪৩২ বঙ্গাব্দ"
```

## Features Overview

- **Bidirectional Conversion**: Seamlessly convert dates between Gregorian and Bengali calendar systems.
- **Multiple Variants**: Full support for both `'revised-2019'` (official Bangladesh calendar) and `'revised-1966'` leap year rules.
- **Rich API**: Extensive methods for date manipulation, formatting, and calculations.
- **Universal Utilities**: Handy standalone functions (`banglaToDigit`, `digitToBangla`) to handle conversion between Bangla (`০-৯`) and Latin (`0-9`) digits.
- **Lightweight & Fast**: Zero dependencies, fully tree-shakable, and optimized for high performance.
- **Universal Compatibility**: Works seamlessly in Node.js, browsers, Deno, Bun, and all JS/TS runtimes.
- **Type-Safe**: Written in TypeScript with comprehensive type definitions.
