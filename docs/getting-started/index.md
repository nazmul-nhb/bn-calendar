# Installation

Installing `bn-calendar` is straightforward. It works out of the box in Node.js, browsers, Deno, Bun, and any modern JavaScript or TypeScript runtime.

## Package Manager

Install the package via your preferred package manager:

::: code-group

```bash [npm]
npm i bn-calendar
```

```bash [pnpm]
pnpm add bn-calendar
```

```bash [yarn]
yarn add bn-calendar
```

```bash [bun]
bun add bn-calendar
```

```bash [deno]
deno add npm:bn-calendar
```

:::

## Importing in Your Project

### ES Modules (ESM) / TypeScript

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';
```

You can also use exported aliases if you prefer shorter or alternative names:

```typescript twoslash
import { BnCalendar, Bongabdo } from 'bn-calendar';

const cal1 = new BnCalendar();
const cal2 = new Bongabdo();
```

### Importing Digit Utilities

If you need standalone Bangla-Latin digit conversion functions:

```typescript twoslash
import { banglaToDigit, digitToBangla } from 'bn-calendar/utils';
```

::: info Standalone Utilities
The `banglaToDigit()` and `digitToBangla()` functions are re-exported from the [`toolbox-x`](https://toolbox-x.vercel.app/) library. You can import them directly from `bn-calendar/utils` without installing extra packages.
:::

## Related Packages

  <a target="_blank" href="https://www.npmjs.com/package/chronos-date">
    <img src="https://img.shields.io/badge/Date--Time_Library-chronos--date-green" alt="chronos-date" />
  </a>

  <a target="_blank" href="https://www.npmjs.com/package/toolbox-x">
    <img src="https://img.shields.io/badge/Utility_Library-toolbox--x-steelblue" alt="toolbox-x" />
  </a>

  <a target="_blank" href="https://www.npmjs.com/package/nhb-hooks">
    <img src="https://img.shields.io/badge/React_Hooks-nhb--hooks-blue" alt="nhb-hooks" />
  </a>

  <a target="_blank" href="https://www.npmjs.com/package/locality-idb">
    <img src="https://img.shields.io/badge/IndexedDB_ORM-locality--idb-darkviolet" alt="locality-idb" />
  </a>

  <a target="_blank" href="https://www.npmjs.com/package/nhb-scripts">
    <img src="https://img.shields.io/badge/Development_Scripts-nhb--scripts-red" alt="nhb-scripts" />
  </a>

  <a target="_blank" href="https://www.npmjs.com/package/nhb-express">
    <img src="https://img.shields.io/badge/Express_Server_Scaffolder-nhb--express-orange" alt="nhb-express" />
  </a>

  <a target="_blank" href="https://www.npmjs.com/package/nhb-anagram-generator">
    <img src="https://img.shields.io/badge/Anagram_Generator-nhb--anagram--generator-steelblue" alt="nhb-anagram-generator" />
  </a>
