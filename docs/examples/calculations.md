# Calculations Examples

Examples covering date arithmetic, difference in days, leap year queries, and calendar boundaries.

## 1. Calculating Date Differences in Days

```typescript
import { BanglaCalendar } from 'bn-calendar';

const start = new BanglaCalendar('১৪৩০', '১', '১');
const end = new BanglaCalendar('১৪৩০', '১', '১৫');

// Subtracting instances invokes valueOf() implicitly
const diffInMs = end - start;
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

console.log(`Difference: ${diffInDays} days`); // 14 days
```

## 2. Checking Leap Years across Variants

```typescript
import { BanglaCalendar } from 'bn-calendar';

// Year 1431 in revised-2019 variant (2024 is Gregorian leap year)
const cal2019 = new BanglaCalendar(1431, 1, 1, { variant: 'revised-2019' });
console.log(cal2019.isLeapYear()); // true
console.log(cal2019.daysInMonth(11)); // 30 (Falgun has 30 days)

// Year 1430 in revised-1966 variant (1430 % 4 === 2)
const cal1966 = new BanglaCalendar(1430, 1, 1, { variant: 'revised-1966' });
console.log(cal1966.isLeapYear()); // true (1430 % 4 === 2)
console.log(cal1966.daysInMonth(11)); // 31 (Falgun has 31 days)
```

## 3. Month & Year Range Boundaries

```typescript
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('১৪৩০', '৫', '১৫');

const firstDayOfMonth = date.startOfMonth();
const lastDayOfMonth = date.endOfMonth();

console.log(`Month range: ${firstDayOfMonth.toJSON()} to ${lastDayOfMonth.toJSON()}`);
// Output: "Month range: ১৪৩০-০৫-০১ to ১৪৩০-০৫-৩১"

const firstDayOfYear = date.startOfYear();
const lastDayOfYear = date.endOfYear();

console.log(`Year range: ${firstDayOfYear.toJSON()} to ${lastDayOfYear.toJSON()}`);
// Output: "Year range: ১৪৩০-০১-০১ to ১৪৩০-১২-৩০"
```
