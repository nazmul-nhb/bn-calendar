# Calendar Variants

The Bengali calendar system has evolved over time. `bn-calendar` provides native support for two calendar calculation rules: `'revised-2019'` and `'revised-1966'`.

## Variant Overview

| Variant          | Description                                                                 | Leap Year Rule            | Default |
| ---------------- | --------------------------------------------------------------------------- | ------------------------- | ------- |
| `'revised-2019'` | Official Bangladesh national standard adopted in 2019 by Bangla Academy.    | Gregorian leap year rules | **Yes** |
| `'revised-1966'` | Revised calendar established in 1966 by Dr. Muhammad Shahidullah committee. | `bnYear % 4 === 2`        | No      |

## Month Lengths Comparison

The two variants differ in how month lengths are distributed and how leap years adjust Falgun (month 11).

### Revised 2019 Standard (`'revised-2019'`)

- **Months 1 to 6** (Boishakh to Ashwin): 31 days
- **Months 7 to 10** (Kartik to Magh): 30 days
- **Month 11** (Falgun): 29 days (30 days in leap year)
- **Month 12** (Choitro): 30 days

| Month # | Month Name (Bangla)   | Normal Year Days | Leap Year Days |
| ------- | --------------------- | ---------------- | -------------- |
| 1       | বৈশাখ (Boishakh)      | 31               | 31             |
| 2       | জ্যৈষ্ঠ (Joishtho)    | 31               | 31             |
| 3       | আষাঢ় (Asharh)        | 31               | 31             |
| 4       | শ্রাবণ (Srabon)       | 31               | 31             |
| 5       | ভাদ্র (Bhadro)        | 31               | 31             |
| 6       | আশ্বিন (Ashwin)       | 31               | 31             |
| 7       | কার্তিক (Kartik)      | 30               | 30             |
| 8       | অগ্রহায়ণ (Ogrohayon) | 30               | 30             |
| 9       | পৌষ (Poush)           | 30               | 30             |
| 10      | মাঘ (Magh)            | 30               | 30             |
| 11      | ফাল্গুন (Falgun)      | **29**           | **30**         |
| 12      | চৈত্র (Choitro)       | 30               | 30             |

### Revised 1966 Standard (`'revised-1966'`)

- **Months 1 to 5** (Boishakh to Bhadro): 31 days
- **Months 6 to 10** (Ashwin to Magh): 30 days
- **Month 11** (Falgun): 30 days (31 days in leap year)
- **Month 12** (Choitro): 30 days

| Month # | Month Name (Bangla)   | Normal Year Days | Leap Year Days |
| ------- | --------------------- | ---------------- | -------------- |
| 1       | বৈশাখ (Boishakh)      | 31               | 31             |
| 2       | জ্যৈষ্ঠ (Joishtho)    | 31               | 31             |
| 3       | আষাঢ় (Asharh)        | 31               | 31             |
| 4       | শ্রাবণ (Srabon)       | 31               | 31             |
| 5       | ভাদ্র (Bhadro)        | 31               | 31             |
| 6       | আশ্বিন (Ashwin)       | 30               | 30             |
| 7       | কার্তিক (Kartik)      | 30               | 30             |
| 8       | অগ্রহায়ণ (Ogrohayon) | 30               | 30             |
| 9       | পৌষ (Poush)           | 30               | 30             |
| 10      | মাঘ (Magh)            | 30               | 30             |
| 11      | ফাল্গুন (Falgun)      | **30**           | **31**         |
| 12      | চৈত্র (Choitro)       | 30               | 30             |

## Setting the Calendar Variant

You can specify the variant when instantiating `BanglaCalendar` using a configuration object:

```typescript
import { BanglaCalendar } from 'bn-calendar';

// Using default 2019 variant
const defaultCal = new BanglaCalendar();
console.log(defaultCal.variant); // 'revised-2019'

// Using 1966 variant
const legacyCal = new BanglaCalendar({ variant: 'revised-1966' });
console.log(legacyCal.variant); // 'revised-1966'

// Passing variant alongside date parameters
const specificCal = new BanglaCalendar('১৪৩০', '১', '১', { variant: 'revised-1966' });
```

::: warning Differences in Date Conversion
Due to month length and leap year differences, converting the same Gregorian date using different variants may yield slightly different Bangla date results (typically off by 1 day during specific months). Always select the variant that matches your domain requirements.
:::
