# Creating Dates

`BanglaCalendar` offers flexible instantiation options. You can create a date instance from current system time, date strings, JavaScript `Date` objects, timestamps, or individual year/month/date numbers or strings.

## Instantiation Methods

### 1. Current Date

Calling the constructor without arguments creates an instance representing today's date in the Bangla calendar:

```typescript
import { BanglaCalendar } from 'bn-calendar';

const today = new BanglaCalendar();
```

### 2. From Gregorian Date String

Pass a valid Gregorian date string (`YYYY-MM-DD`):

```typescript
const date = new BanglaCalendar('2023-04-14');
console.log(date.toJSON()); // "১৪৩০-০১-০১"
```

### 3. From Bangla Date String

Pass a valid Bangla date string with zero-padded or non-padded Bangla digits (`YYYY-MM-DD`):

```typescript
const date = new BanglaCalendar('১৪৩২-১১-০৮');
console.log(date.getMonthName()); // "ফাল্গুন"
```

### 4. From JavaScript `Date` Object

Pass a native JavaScript `Date` object:

```typescript
const jsDate = new Date(2023, 3, 14); // April 14, 2023
const date = new BanglaCalendar(jsDate);
```

### 5. From Unix Timestamp

Pass a numeric timestamp in milliseconds since Unix epoch:

```typescript
const timestamp = 1681430400000;
const date = new BanglaCalendar(timestamp);
```

### 6. From Separate Components (Latin Digits)

Provide year, month (1-12), and day (1-31) as numbers:

```typescript
const date = new BanglaCalendar(1430, 1, 1); // 1 Boishakh 1430
```

You can also pass just Year and Month:

```typescript
const date = new BanglaCalendar(1430, 1); // 1 Boishakh 1430
```

### 7. From Separate Components (Bangla Digits)

Provide year, month (`১-১২`), and day (`১-৩১`) as Bangla digit strings:

```typescript
const date = new BanglaCalendar('১৪৩০', '১', '১');
```

## Adding Configuration Options

In any of the overloads, you can append a configuration object `{ variant?: 'revised-2019' | 'revised-1966' }`:

```typescript
// Variant with current date
const cal1 = new BanglaCalendar({ variant: 'revised-1966' });

// Variant with date string
const cal2 = new BanglaCalendar('2023-04-14', { variant: 'revised-1966' });

// Variant with components
const cal3 = new BanglaCalendar('১৪৩০', '১', '১', { variant: 'revised-1966' });
```

::: tip Related API
For full overload signatures and parameter specifications, see [Constructor API Reference](../api/).
:::
