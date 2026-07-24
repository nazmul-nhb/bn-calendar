# Constructor API

Creates a new `BanglaCalendar` instance from various input types and date component patterns.

## Signatures

::: code-group

```typescript [Signature 1: Current Date]
constructor(config?: BnCalendarConfig)
```

```typescript [Signature 2: Date String]
constructor(date: string, config?: BnCalendarConfig)
```

```typescript [Signature 3: JS Date Object]
constructor(date: Date, config?: BnCalendarConfig)
```

```typescript [Signature 4: Timestamp / Latin Year]
constructor(tsOrBnYear: number, config?: BnCalendarConfig)
```

```typescript [Signature 5: Bangla Year String]
constructor(bnYear: BanglaYear, config?: BnCalendarConfig)
```

```typescript [Signature 6: Year & Month (Latin)]
constructor(
  bnYear: number,
  bnMonth: NumberRange<1, 12>,
  config?: BnCalendarConfig
)
```

```typescript [Signature 7: Year & Month (Bangla)]
constructor(
  bnYear: BanglaYear,
  bnMonth: BanglaMonth,
  config?: BnCalendarConfig
)
```

```typescript [Signature 8: Year, Month & Date (Latin)]
constructor(
  bnYear: number,
  bnMonth: NumberRange<1, 12>,
  bnDate: NumberRange<1, 31>,
  config?: BnCalendarConfig
)
```

```typescript [Signature 9: Year, Month & Date (Bangla)]
constructor(
  bnYear: BanglaYear,
  bnMonth: BanglaMonth,
  bnDate: BanglaDate,
  config?: BnCalendarConfig
)
```

:::

## Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `date` | `string \| Date` | Bangla date string (`"১৪৩০-০১-০১"`), Gregorian date string (`"2023-04-14"`), or JavaScript `Date` instance. |
| `tsOrBnYear` | `number` | Unix timestamp (in milliseconds) or Bangla year in Latin digits (0-9999). |
| `bnYear` | `number \| BanglaYear` | Bengali year in either Latin digits (`0-9999`) or Bangla digits (`০-৯৯৯৯`). |
| `bnMonth` | `NumberRange<1, 12> \| BanglaMonth` | Bengali month number (`1-12`) or Bangla month string (`১-১২`). Defaults to month `1` if omitted. |
| `bnDate` | `NumberRange<1, 31> \| BanglaDate` | Bengali day of month (`1-31`) or Bangla date string (`১-৩১`). Defaults to day `1` if omitted. |
| `config` | `BnCalendarConfig` | Optional configuration object containing `variant: 'revised-2019' | 'revised-1966'`. |

## Overload Resolution & Behavior

1. **Default Initialization**: If no valid inputs are provided, the constructor defaults to current system date.
2. **String Inputs**: Accepts both Gregorian (`YYYY-MM-DD`) and Bangla (`YYYY-MM-DD` in Bangla digits) formats.
3. **Number vs Timestamp**: Single numeric inputs greater than `9999` are treated as Unix timestamps in milliseconds; single numeric inputs `0-9999` are treated as Bangla years.
4. **Variant Fallback**: Defaults to `'revised-2019'` variant unless explicitly specified in `config.variant`.
5. **Time Normalization**: All instances normalize time components to midnight UTC (`00:00:00.000Z`).

## Code Examples

```typescript
import { BanglaCalendar } from 'bn-calendar';

// Current date
const now = new BanglaCalendar();

// From Bangla date string
const dateFromBnString = new BanglaCalendar('১৪৩২-১১-০৮');

// From Gregorian date string
const dateFromGregString = new BanglaCalendar('2023-04-14');

// From JS Date object
const dateFromJsDate = new BanglaCalendar(new Date('2023-04-14'));

// From Latin numeric components
const dateFromLatin = new BanglaCalendar(1430, 1, 1);

// From Bangla string components
const dateFromBangla = new BanglaCalendar('১৪৩০', '১', '১');

// With specific calendar variant
const legacyDate = new BanglaCalendar('১৪৩০', '১', '১', { variant: 'revised-1966' });
```
