# Quick Start

Get up and running with `bn-calendar` in just a few minutes.

## Basic Usage

The primary export of this library is the `BanglaCalendar` class. It allows creating, formatting, manipulating, and converting Bengali calendar dates.

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

// 1. Current date in Bangla calendar
const today = new BanglaCalendar();
console.log(today.toString()); 
// Output: "শুক্রবার, ৯ ফাল্গুন, ১৪৩২ [বসন্ত]"

// 2. From Gregorian date string
const date1 = new BanglaCalendar('2023-04-14');
console.log(date1.toJSON()); 
// Output: "১৪৩০-০১-০১"

// 3. From JavaScript Date object
const date2 = new BanglaCalendar(new Date(2023, 3, 14));
console.log(date2.getMonthName()); 
// Output: "বৈশাখ"

// 4. From specific Bangla components (Year, Month, Date)
const date3 = new BanglaCalendar(1430, 1, 1);
console.log(date3.toDate()); 
// Output: Fri Apr 14 2023 00:00:00 GMT+0000

// 5. Using Bangla digits directly
const date4 = new BanglaCalendar('১৪৩০', '১', '১');
console.log(date4.toStringEn()); 
// Output: "Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"
```

## Calendar Variants

`BanglaCalendar` supports two official variants for calendar calculation:

- `'revised-2019'` (default): Official Bangladesh calendar standard since 2019. Follows Gregorian leap year rules.
- `'revised-1966'`: Historical/traditional standard based on the 1966 Bangla Academy committee recommendations. Leap year rule: `bnYear % 4 === 2`.

```typescript
// Explicitly specify variant
const cal1966 = new BanglaCalendar('১৪৩০', '১', '১', { variant: 'revised-1966' });
console.log(cal1966.variant); // 'revised-1966'
```

::: tip Next Steps

- Learn how to create dates in depth: [Creating Dates](../guide/)
- Explore calendar variants: [Calendar Variants](./calendar-variants)
- Check complete API docs: [Constructor API](../api/)
:::
