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
      link: /getting-started/
    - theme: alt
      text: API Reference
      link: /api/

features:
  - icon: 🔒
    title: Immutable by Design
    details: All date manipulation methods return fresh instances/objects without side effects.
  - icon: 🔄
    title: Bidirectional Conversion
    details: Effortlessly convert dates between Bengali and Gregorian calendar systems with accurate leap year logic.
  - icon: 📜
    title: Multiple Calendar Variants
    details: Full support for both 'revised-2019' (official Bangladesh standard) and 'revised-1966' leap year rules.
  - icon: ⚡
    title: Self-Contained & Type Safe
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

```bash [bun]
bun add bn-calendar
```

```bash [deno]
bun add npm:bn-calendar
```

:::

## Quick Example

```typescript twoslash
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
