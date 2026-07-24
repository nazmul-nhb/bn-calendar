# Utilities Overview

`bn-calendar` provides standalone digit conversion utilities via the `bn-calendar/utils` subpath. These functions allow converting between Bengali digits (`০-৯`) and Latin/Arabic digits (`0-9`).

## Import Path

```typescript
import { banglaToDigit, digitToBangla } from 'bn-calendar/utils';
```

## Functions at a Glance

| Function | Input | Default Output | Key Option |
| -------- | ----- | -------------- | ---------- |
| [`banglaToDigit()`](./bangla-to-digit.md) | String with Bangla digits | `number` (or `string` if `forceNumber: false`) | `forceNumber` |
| [`digitToBangla()`](./digit-to-bangla.md) | Number or String with Latin digits | `string` with Bangla digits | `preserveNonDigit` |

::: note Independence
These utilities operate independently of `BanglaCalendar` instance objects and can be used across UI components, form validators, or database mappers.
:::
