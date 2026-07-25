# Instance Properties

All instance properties on `BanglaCalendar` are read-only.

## Property Index

| Property                    | Description                                                          |
| --------------------------- | -------------------------------------------------------------------- |
| [`variant`](#variant)       | Calendar variant in use (`'revised-2019'` or `'revised-1966'`).      |
| [`year`](#year)             | Bengali year representation in both Bangla and Latin digits.         |
| [`month`](#month)           | Bengali month representation in both Bangla and Latin digits.        |
| [`date`](#date)             | Bengali day of month representation in both Bangla and Latin digits. |
| [`gregorian`](#gregorian)   | Equivalent Gregorian calendar year, month, and date.                 |
| [`weekDay`](#weekday)       | Day of week index (`0-6`, 0 = Sunday / রবিবার).                      |
| [`isoWeekDay`](#isoweekday) | ISO 8601 day of week index (`1-7`, 1 = Monday, 7 = Sunday).          |

---

## Details & Examples

### `variant`

```typescript
readonly variant: BnCalendarVariant
```

The active calendar calculation variant (`'revised-2019'` or `'revised-1966'`).

```typescript
const cal2019 = new BanglaCalendar();
console.log(cal2019.variant); // 'revised-2019'

const cal1966 = new BanglaCalendar({ variant: 'revised-1966' });
console.log(cal1966.variant); // 'revised-1966'
```

---

### `year`

```typescript
readonly year: Readonly<{
  bn: BanglaYear; // Bangla year in Bangla digits (e.g. '১৪৩০')
  en: number;     // Bangla year in Latin digits (e.g. 1430)
}>
```

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০১-০১');

console.log(bnCal.year.bn); // '১৪৩০' (Type: BanglaYear)
console.log(bnCal.year.en); // 1430 (Type: number)
```

---

### `month`

```typescript
readonly month: Readonly<{
  bn: BanglaMonth;         // Bangla month in Bangla digits ('১'-'১২')
  en: NumberRange<1, 12>;  // Bangla month in Latin digits (1-12)
}>
```

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০৫-১৫'); // Bhadro 15

console.log(bnCal.month.bn); // '৫'
console.log(bnCal.month.en); // 5
```

---

### `date`

```typescript
readonly date: Readonly<{
  bn: BanglaDate;          // Bangla day of month in Bangla digits ('১'-'৩১')
  en: NumberRange<1, 31>;  // Bangla day of month in Latin digits (1-31)
}>
```

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০৫-১৫');

console.log(bnCal.date.bn); // '১৫'
console.log(bnCal.date.en); // 15
```

---

### `gregorian`

```typescript
readonly gregorian: Readonly<{
  year: number;            // Gregorian year (e.g. 2023)
  month: NumberRange<1, 12>; // Gregorian month 1-12 (April = 4)
  date: NumberRange<1, 31>;  // Gregorian day of month (e.g. 14)
}>
```

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০১-০১'); // 1 Boishakh 1430

console.log(bnCal.gregorian.year);  // 2023
console.log(bnCal.gregorian.month); // 4 (April)
console.log(bnCal.gregorian.date);  // 14
```

---

### `weekDay`

```typescript
readonly weekDay: Enumerate<7>
```

Numeric weekday index from `0` to `6`, where `0` represents Sunday (রবিবার) and `6` represents Saturday (শনিবার).

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০১-০১'); // Friday, April 14, 2023

console.log(bnCal.weekDay); // 5 (Friday)
```

---

### `isoWeekDay`

```typescript
readonly isoWeekDay: NumberRange<1, 7>
```

ISO 8601 standard weekday index from `1` (Monday) to `7` (Sunday).

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০১-০১'); // Friday, April 14, 2023

console.log(bnCal.isoWeekDay); // 5 (Friday)

const isWeekend = bnCal.isoWeekDay >= 6; // Saturday (6) or Sunday (7)
```
