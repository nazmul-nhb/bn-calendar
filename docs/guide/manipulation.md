# Date Manipulation

`BanglaCalendar` instances are strictly **immutable**. Every manipulation operation (`addDays()`, `addMonths()`, `startOfMonth()`, etc.) returns a **new** `BanglaCalendar` instance, leaving the original object completely untouched.

::: tip Immutability Guarantee
Whether a method returns a new `BanglaCalendar` instance or a native JavaScript `Date` object (via `.toDate()`), it always returns a fresh object. Mutating returned `Date` objects will never alter the state of your `BanglaCalendar` instance.
:::

## Date Arithmetic

### Adding / Subtracting Days (`addDays`)

```typescript
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('১৪৩০', '১', '১'); // 1 Boishakh 1430

// Add days (returns a new instance)
const future = date.addDays(7);
console.log(future.toJSON()); // "১৪৩০-০১-০৮"
console.log(date.toJSON());   // "১৪৩০-০১-০১" (original date remains unchanged)

// Subtract days
const past = date.addDays(-3);
console.log(past.toJSON());   // "১৪২৯-১২-২৮" (crosses month and year boundary)
```

### Adding / Subtracting Weeks (`addWeeks`)

Each week is calculated as exactly 7 days:

```typescript
const date = new BanglaCalendar('১৪৩০', '১', '১');

const inTwoWeeks = date.addWeeks(2);
console.log(inTwoWeeks.toJSON()); // "১৪৩০-০১-১৫"
```

### Adding / Subtracting Months (`addMonths`)

When adding months, you can control overflow behavior when the source day does not exist in the target month (e.g. adding 1 month to 31st Ashwin when Kartik only has 30 days).

- `overflow = true` (default): Overflows into the following month (standard JS Date behavior).
- `overflow = false`: Clamps the day to the last valid date of the target month.

```typescript
const endOfAshwin = new BanglaCalendar('১৪৩০', '৬', '৩১'); // 31 Ashwin

// With overflow = true (default)
const overflowed = endOfAshwin.addMonths(1);
console.log(overflowed.toJSON()); // "১৪৩০-০৮-০১" (1 Ogrohayon)

// With overflow = false (clamping)
const clamped = endOfAshwin.addMonths(1, false);
console.log(clamped.toJSON()); // "১৪৩০-০৭-৩০" (30 Kartik)
```

### Adding / Subtracting Years (`addYears`)

Adds or subtracts years, preserving calendar variants and properly handling leap years in Falgun when `overflow = false`:

```typescript
const date = new BanglaCalendar('১৪৩০', '১', '১৫');

const nextYear = date.addYears(1);
console.log(nextYear.toJSON()); // "১৪৩১-০১-১৫"

const lastYear = date.addYears(-1);
console.log(lastYear.toJSON()); // "১৪২৯-০১-১৫"
```

## Month & Year Boundaries

### Start and End of Month

```typescript
const date = new BanglaCalendar('১৪৩০', '৫', '১৫'); // 15 Bhadro 1430

const startMonth = date.startOfMonth();
console.log(startMonth.toJSON()); // "১৪৩০-০৫-০১"

const endMonth = date.endOfMonth();
console.log(endMonth.toJSON()); // "১৪৩০-০৫-৩১"
```

### Start and End of Year

```typescript
const date = new BanglaCalendar('১৪৩০', '৫', '১৫');

const startYear = date.startOfYear();
console.log(startYear.toJSON()); // "১৪৩০-০১-০১" (1 Boishakh)

const endYear = date.endOfYear();
console.log(endYear.toJSON()); // "১৪৩০-১২-৩০" (30 Choitro)
```

## Inspecting Month Length & Leap Years

```typescript
const date = new BanglaCalendar('১৪৩০', '১', '১');

console.log(date.daysInMonth());   // 31 (Boishakh has 31 days)
console.log(date.daysInMonth(11)); // 29 (Falgun in normal 2019 variant)
console.log(date.isLeapYear());    // false
```

::: tip Related API Pages

- [Manipulation API Reference](../api/manipulation)

:::
