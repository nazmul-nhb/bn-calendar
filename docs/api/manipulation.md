# Manipulation Methods

Methods for date arithmetic, boundary queries, month length inspection, and leap year checks. All manipulation methods return **new** `BanglaCalendar` instances without mutating the original.

## Method Overview

| Method                            |  Description                                                       |
| --------------------------------- |  ----------------------------------------------------------------- |
| [`addDays()`](#adddays)           |  Adds or subtracts days.                                           |
| [`addWeeks()`](#addweeks)         |  Adds or subtracts weeks (7-day intervals).                        |
| [`addMonths()`](#addmonths)       |  Adds or subtracts months with optional day overflow clamping.     |
| [`addYears()`](#addyears)         |  Adds or subtracts years with leap year handling.                  |
| [`startOfMonth()`](#startofmonth) |  Returns instance set to 1st day of current month.                 |
| [`endOfMonth()`](#endofmonth)     |  Returns instance set to last day of current month.                |
| [`startOfYear()`](#startofyear)   |  Returns instance set to 1 Boishakh (`১ বৈশাখ`).                   |
| [`endOfYear()`](#endofyear)       |  Returns instance set to 30 Choitro (`৩০ চৈত্র`).                  |
| [`daysInMonth()`](#daysinmonth)   |  Returns number of days in specified month (or current month).     |
| [`isLeapYear()`](#isleapyear)     |  Checks if current year is a leap year according to variant rules. |

---

## Details & Examples

### `addDays()`

```typescript
addDays(days: number): BanglaCalendar
```

Adds or subtracts specified number of days from current date.

```typescript
const date = new BanglaCalendar('১৪৩০', '১', '১');

const in7Days = date.addDays(7);   // 8 Boishakh 1430
const ago3Days = date.addDays(-3); // 28 Choitro 1429
```

---

### `addWeeks()`

```typescript
addWeeks(weeks: number): BanglaCalendar
```

Adds or subtracts specified number of weeks (each week = 7 days).

```typescript
const date = new BanglaCalendar('১৪৩০', '১', '১');

const in2Weeks = date.addWeeks(2); // 15 Boishakh 1430
```

---

### `addMonths()`

```typescript
addMonths(months: number, overflow?: boolean): BanglaCalendar
```

Adds or subtracts months. Parameter `overflow` (default `true`):

- `true`: Invalid dates overflow into the next month.
- `false`: Clamps to the last valid day of the target month.

```typescript
const date = new BanglaCalendar('১৪৩০', '৬', '৩১'); // 31 Ashwin

const overflowed = date.addMonths(1);        // 1 Ogrohayon 1430 (overflow)
const clamped = date.addMonths(1, false);     // 30 Kartik 1430 (clamped)
```

---

### `addYears()`

```typescript
addYears(years: number, overflow?: boolean): BanglaCalendar
```

Adds or subtracts years. Handles leap year differences in Falgun when `overflow = false`.

```typescript
const date = new BanglaCalendar('১৪৩০', '১', '১৫');

const nextYear = date.addYears(1); // 15 Boishakh 1431
```

---

### `startOfMonth()`

```typescript
startOfMonth(): BanglaCalendar
```

Returns a new instance set to day 1 of the current month.

```typescript
const date = new BanglaCalendar('১৪৩০', '৫', '১৫');
console.log(date.startOfMonth().toJSON()); // "১৪৩০-০৫-০১"
```

---

### `endOfMonth()`

```typescript
endOfMonth(): BanglaCalendar
```

Returns a new instance set to the last day of the current month (29, 30, or 31 depending on month & leap year).

```typescript
const date = new BanglaCalendar('১৪৩০', '৫', '১৫');
console.log(date.endOfMonth().toJSON()); // "১৪৩০-০৫-৩১"
```

---

### `startOfYear()`

```typescript
startOfYear(): BanglaCalendar
```

Returns a new instance set to 1 Boishakh (`১ বৈশাখ`) of the current year.

```typescript
const date = new BanglaCalendar('১৪৩০', '৫', '১৫');
console.log(date.startOfYear().toJSON()); // "১৪৩০-০১-০১"
```

---

### `endOfYear()`

```typescript
endOfYear(): BanglaCalendar
```

Returns a new instance set to 30 Choitro (`৩০ চৈত্র`) of the current year.

```typescript
const date = new BanglaCalendar('১৪৩০', '৫', '১৫');
console.log(date.endOfYear().toJSON()); // "১৪৩০-১২-৩০"
```

---

### `daysInMonth()`

```typescript
daysInMonth(month?: NumberRange<1, 12>): NumberRange<29, 31>
```

Gets the number of days in the specified month (1-12) or the current month if omitted.

```typescript
const date = new BanglaCalendar('১৪৩০', '১', '১');

console.log(date.daysInMonth());   // 31 (Boishakh)
console.log(date.daysInMonth(11)); // 29 (Falgun in normal year)
```

---

### `isLeapYear()`

```typescript
isLeapYear(): boolean
```

Returns `true` if the year is a leap year under the active variant rules.

- `'revised-2019'`: Follows Gregorian leap year rules.
- `'revised-1966'`: Follows `bnYear % 4 === 2` rule.

```typescript
const date = new BanglaCalendar(1430, 1, 1);
console.log(date.isLeapYear()); // false
```
