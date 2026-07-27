# Standalone Type Guards

`bn-calendar/utils` provides the following type guards:

## isBanglaYear()

```typescript
function isBanglaYear(value: unknown): value is BanglaYear
```

Checks whether a value is a valid Bangla year in Bangla digits (`০-৯৯৯৯`).

```typescript twoslash
import { isBanglaYear } from 'bn-calendar/utils';

isBanglaYear('১৪৩০'); // true
isBanglaYear('১০০০০'); // false (too long)
isBanglaYear('1430');  // false (Latin digits)
```

## isBanglaMonth()

```typescript
function isBanglaMonth(value: unknown): value is BanglaMonth
```

Checks whether a value is a valid Bangla month string in Bangla digits (`১-১২`).

```typescript twoslash
import { isBanglaMonth } from 'bn-calendar/utils';

isBanglaMonth('১');  // true
isBanglaMonth('১২'); // true
isBanglaMonth('১৩'); // false
```

## isBanglaDate()

```typescript
function isBanglaDate(value: unknown): value is BanglaDate
```

Checks whether a value is a valid day of month in Bangla digits (`১-৩১`).

```typescript twoslash
import { isBanglaDate } from 'bn-calendar/utils';

isBanglaDate('১');   // true
isBanglaDate('৩১');  // true
isBanglaDate('৩২');  // false
```

## isBanglaDateString()

```typescript
function isBanglaDateString(value: unknown): value is string
```

Checks whether a string is a valid Bangla date formatted as `YYYY-MM-DD` using Bangla digits and supported separators.

:::tip Note
Supported separators are `-`, `/`, `_`, `.`, and space (` `).
:::

```typescript twoslash
import { isBanglaDateString } from 'bn-calendar/utils';

isBanglaDateString('১৪৩০-০১-০১'); // true
isBanglaDateString('১৪৩০/১/১'); // true (single-digit month/date)
isBanglaDateString('1430-01-01'); // false (Latin digits)
isBanglaDateString('১৪৩০-১৩-০১'); // false (invalid month)
```
