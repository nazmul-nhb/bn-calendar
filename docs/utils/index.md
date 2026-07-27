# Utilities Overview

`bn-calendar` provides standalone digit conversion utilities via the `bn-calendar/utils` subpath. These functions allow converting between Bengali digits (`০-৯`) and Latin/Arabic digits (`0-9`). It also provides standalone [**type guards**](./guards) to validate values independent of the core class.

## Import Path

```typescript twoslash
import { banglaToDigit, digitToBangla } from 'bn-calendar/utils';
```

## Functions at a Glance

| Function                               | Input                           | Default Output              | Key Option         |
| -------------------------------------- | ------------------------------- | --------------------------- | ------------------ |
| [`banglaToDigit()`](./bangla-to-digit) | String with Bangla digits       | `number` or `string`        | `forceNumber`      |
| [`digitToBangla()`](./digit-to-bangla) | Number/String with Latin digits | `string` with Bangla digits | `preserveNonDigit` |

::: tip Independence
These utilities operate independently of `BanglaCalendar` instance objects and can be used across UI components, form validators, or database mappers.
:::
