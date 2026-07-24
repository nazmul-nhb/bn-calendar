<!-- markdownlint-disable-file MD024 -->
# Formatting API

Methods for converting `BanglaCalendar` instances into formatted string representations.

## Method Overview

| Method                        | Description                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------------------------- |
| [`format()`](#format)         | Formats date using token patterns. Default: `'ddd, DD mmmm (SS), YYYY বঙ্গাব্দ'`                         |
| [`toString()`](#tostring)     | Formats date as full Bengali string. Output: `"Friday, 1 Boishakh, 1430 [Grisma]"` in Bangla script.     |
| [`toStringEn()`](#tostringen) | Formats date as full English string. Output: `"Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"`. |

---

## Details & Examples

### `format()`

Formats the instance using customizable token patterns.

```typescript
format(format?: BanglaDateFormat): string
```

#### Parameters

- `format`: Format pattern string using predefined tokens. If omitted, defaults to `'ddd, DD mmmm (SS), YYYY বঙ্গাব্দ'`.

#### Return Value

A formatted string with tokens replaced by localized Bangla digit date parts.

#### Examples

```typescript
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('2023-04-14');

// Default format
console.log(date.format());
// "শুক্রবার, ০১ বৈশাখ (গ্রীষ্মকাল), ১৪৩০ বঙ্গাব্দ"

// ISO-like format
console.log(date.format('YYYY-MM-DD'));
// "১৪৩০-০১-০১"

// Short date format
console.log(date.format('DD mmm, YYYY'));
// "০১ বৈ, ১৪৩০"
```

#### Available Format Tokens

| Category     | Token           | Description                                        | Example Output                      |
| ------------ | --------------- | -------------------------------------------------- | ----------------------------------- |
| **Year**     | `YYYY` / `yyyy` | 4-digit Bangla year                                | `১৪৩০`                              |
|              | `YY` / `yy`     | 2-digit Bangla year                                | `৩০`                                |
| **Month**    | `M`             | Month number (1-12) in Bangla digits               | `১`                                 |
|              | `MM`            | Zero-padded month number (01-12) in Bangla digits  | `০১`                                |
|              | `mmm`           | Short month name in Bangla                         | `বৈ`                                |
|              | `mmmm`          | Full month name in Bangla                          | `বৈশাখ`                             |
| **Day/Date** | `D`             | Date of month (1-31) in Bangla digits              | `১`                                 |
|              | `DD`            | Zero-padded date of month (01-31) in Bangla digits | `০১`                                |
|              | `Do`            | Date with cardinal suffix                          | `১লা` / `১৫ই`                       |
| **Weekday**  | `d`             | Short weekday name                                 | `শু`                                |
|              | `dd`            | Weekday name without 'বার' suffix                  | `শুক্রবার` without 'বার' -> `শুক্র` |
|              | `ddd`           | Full weekday name                                  | `শুক্রবার`                          |
| **Season**   | `S`             | Season name                                        | `গ্রীষ্ম`                           |
|              | `SS`            | Season name with 'কাল' suffix                      | `গ্রীষ্মকাল`                        |

#### Escaping Text

To prevent characters from being replaced by format tokens, enclose literal text in square brackets (`[...]`):

```typescript
console.log(date.format('[আজ] ddd'));           // "আজ শুক্রবার"
console.log(date.format('[সাল:] YYYY [বঙ্গাব্দ]')); // "সাল: ১৪৩০ বঙ্গাব্দ"
```

---

### `toString()`

Returns a standard full Bengali date string.

```typescript
toString(): string
```

#### Return Value

String in format `"ddd, D mmmm, YYYY [S]"` using Bangla script.

#### Example

```typescript
const date = new BanglaCalendar('2023-04-14');
console.log(date.toString());
// "শুক্রবার, ১ বৈশাখ, ১৪৩০ [গ্রীষ্ম]"
```

---

### `toStringEn()`

Returns a standard full English date string with transliterated names.

```typescript
toStringEn(): string
```

#### Return Value

String in format `"Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"`.

#### Example

```typescript
const date = new BanglaCalendar('2023-04-14');
console.log(date.toStringEn());
// "Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"
```
