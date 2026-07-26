# Calendar Conversion

Converting between the Gregorian (Western) calendar and the Bengali calendar is one of the core features of `bn-calendar`.

## Gregorian to Bengali

When you pass a Gregorian date string, timestamp, or native JavaScript `Date` object to `BanglaCalendar`, the internal engine automatically performs bidirectional conversion to calculate the corresponding Bengali year, month, date, weekday, and season.

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

// Converting a Gregorian string date
const bnCal1 = new BanglaCalendar('2023-04-14');
console.log(bnCal1.year.en);  // 1430
console.log(bnCal1.month.en); // 1 (Boishakh)
console.log(bnCal1.date.en);  // 1

// Converting a native JS Date object
const jsDate = new Date(2023, 3, 14); // April 14, 2023
const bnCal2 = new BanglaCalendar(jsDate);
console.log(bnCal2.toString()); 
// "শুক্রবার, ১ বৈশাখ, ১৪৩০ [গ্রীষ্ম]"
```

## Bengali to Gregorian

To convert a Bengali date back to a Gregorian date, call `.toDate()` or `.gregorian`:

### 1. Using `.toDate()`

Returns a native JavaScript `Date` object:

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১');
const gregorianDate = bnCal.toDate();

console.log(gregorianDate.toISOString());
// "2023-04-14T00:00:00.000Z"
```

::: tip Immutability & Fresh Instances
`.toDate()` always constructs and returns a **new** native `Date` instance. Mutating the returned JavaScript `Date` object (e.g. `gregorianDate.setFullYear(2025)`) will **never** alter the internal state of your `BanglaCalendar` instance.
:::

### 2. Using `.gregorian` Property

Inspect individual year, month, and date numbers:

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১');

console.log(bnCal.gregorian.year);  // 2023
console.log(bnCal.gregorian.month); // 4 (April)
console.log(bnCal.gregorian.date);  // 14
```

### 3. Using `.valueOf()` / Timestamps

Get the Unix epoch timestamp in milliseconds:

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১');
const timestamp = bnCal.valueOf(); // 1681430400000

// Can be passed directly into standard JS Date or other libraries
const reconstitutedDate = new Date(timestamp);
```

## Round-Trip Conversion Guarantee

The conversion engine is fully deterministic and bidirectional. Converting a date from Gregorian to Bangla and back to Gregorian preserves the exact date:

```typescript
const originalGregorian = new Date('2024-02-14T00:00:00.000Z');
const bangla = new BanglaCalendar(originalGregorian);
const convertedGregorian = bangla.toDate();

console.log(originalGregorian.getTime() === convertedGregorian.getTime()); // true
```

::: tip Related API Pages

- [toDate() API Reference](../api/serialization#todate)
- [gregorian Property API Reference](../api/properties#gregorian)
- [valueOf() API Reference](../api/serialization#valueof)

:::
