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
bun add npm:bn-calendar
```

:::

## Importing in Your Project

### ES Modules (ESM) / TypeScript

```typescript
import { BanglaCalendar } from 'bn-calendar';
```

You can also use exported aliases if you prefer shorter or alternative names:

```typescript
import { BnCalendar, Bongabdo } from 'bn-calendar';

const cal1 = new BnCalendar();
const cal2 = new Bongabdo();
```

### Importing Digit Utilities

If you need standalone Bangla-Latin digit conversion functions:

```typescript
import { banglaToDigit, digitToBangla } from 'bn-calendar/utils';
```

::: info Standalone Utilities
The `banglaToDigit()` and `digitToBangla()` functions are re-exported from the [`toolbox-x`](https://toolbox-x.nazmul-nhb.dev/) library. You can import them directly from `bn-calendar/utils` without installing extra packages.
:::
