# Basic Usage Examples

Simple examples demonstrating initialization and property inspection.

## 1. Creating Current Date

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

const today = new BanglaCalendar();

console.log(today.toString());
// Example: "শুক্রবার, ৯ ফাল্গুন, ১৪৩২ [বসন্ত]"
```

## 2. Instantiating from Specific Date String

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

// From Bangla date string
const date1 = new BanglaCalendar('১৪৩২-১১-০৮');
console.log(date1.getMonthName()); // "ফাল্গুন"

// From Gregorian date string
const date2 = new BanglaCalendar('2023-04-14');
console.log(date2.toJSON()); // "১৪৩০-০১-০১"
```

## 3. Instantiating from Date Components

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

// Latin numeric arguments (Year, Month, Date)
const cal1 = new BanglaCalendar(1430, 1, 1);
console.log(cal1.toStringEn());
// "Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"

// Bangla string arguments
const cal2 = new BanglaCalendar('১৪৩০', '১', '১');
console.log(cal2.toJSON());
// "১৪৩০-০১-০১"
```

## 4. Using Class Aliases

```typescript twoslash
import { BnCalendar, Bongabdo } from 'bn-calendar';

const dateA = new BnCalendar('১৪৩০-০১-০১');
const dateB = new Bongabdo('১৪৩০-০১-০১');

console.log(dateA.toJSON() === dateB.toJSON()); // true
```
