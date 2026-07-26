# Formatting Dates

Formatting is a central feature of `bn-calendar`. This guide explains how to convert `BanglaCalendar` date instances into custom formatted strings using tokens, escaping, and built-in formatters.

## Overview of Formatting Methods

`BanglaCalendar` offers three main ways to format dates:

1. **`format(pattern)`**: Highly customizable format string engine using tokens.
2. **`toString()`**: Out-of-the-box standard Bengali string (`"শুক্রবার, ১ বৈশাখ, ১৪৩০ [গ্রীষ্ম]"`).
3. **`toStringEn()`**: Out-of-the-box standard English string (`"Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"`).
4. **`toJSON()`**: Standard ISO-like format with zero-padded Bangla digits (`"১৪৩০-০১-০১"`).

## Custom Formats with `format()`

Pass a format pattern string to the `.format()` method:

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('2023-04-14');

// Default format: 'ddd, DD mmmm (SS), YYYY বঙ্গাব্দ'
console.log(date.format()); 
// Output: "শুক্রবার, ০১ বৈশাখ (গ্রীষ্মকাল), ১৪৩০ বঙ্গাব্দ"

// Custom pattern
console.log(date.format('YYYY-MM-DD')); 
// Output: "১৪৩০-০১-০১"

console.log(date.format('mmmm DD, YYYY')); 
// Output: "বৈশাখ ০১, ১৪৩০"

console.log(date.format('ddd, D mmm YYYY')); 
// Output: "শুক্রবার, ১ বৈ ১৪৩০"
```

## Common Format Tokens

| Category     | Token           | Description                       | Example       |
| ------------ | --------------- | --------------------------------- | ------------- |
| **Year**     | `YYYY` / `yyyy` | 4-digit Bangla year               | `১৪৩০`        |
|              | `YY` / `yy`     | 2-digit Bangla year               | `৩০`          |
| **Month**    | `M`             | Month number (1-12)               | `১`           |
|              | `MM`            | Zero-padded month number (01-12)  | `০১`          |
|              | `mmm`           | Short month name                  | `বৈ`          |
|              | `mmmm`          | Full month name                   | `বৈশাখ`       |
| **Day/Date** | `D`             | Day of month (1-31)               | `১`           |
|              | `DD`            | Zero-padded day of month (01-31)  | `০১`          |
|              | `Do`            | Day of month with cardinal suffix | `১লা` / `১৫ই` |
| **Weekday**  | `d`             | Short weekday name                | `শু`          |
|              | `dd`            | Weekday name without 'বার'        | `শুক্র`       |
|              | `ddd`           | Full weekday name                 | `শুক্রবার`    |
| **Season**   | `S`             | Season name                       | `গ্রীষ্ম`     |
|              | `SS`            | Season name with 'কাল' suffix     | `গ্রীষ্মকাল`  |

## Escaping Text

To preserve raw text that shouldn't be interpreted as tokens, wrap the literal characters inside square brackets `[...]`:

```typescript
const date = new BanglaCalendar('2023-04-14');

// [আজ] protects 'd' from being tokenized as short weekday
console.log(date.format('[আজ] ddd')); 
// Output: "আজশুক্রবার" -> with space: date.format('[আজ ]ddd') -> "আজ শুক্রবার"

// Custom document labels
console.log(date.format('[তারিখ:] DD mmmm, YYYY [বঙ্গাব্দ]'));
// Output: "তারিখ: ০১ বৈশাখ, ১৪৩০ বঙ্গাব্দ"
```

::: tip Related API Documentation

- [Formatting API Reference](../api/formatting) - Complete parameter specifications and token list.
- [Getters API Reference](../api/getters) - Direct getters for month, day, and season names.
:::
