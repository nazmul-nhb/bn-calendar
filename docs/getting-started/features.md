# Features

`bn-calendar` is a comprehensive, production-ready Bengali calendar system library built for any JavaScript and TypeScript environment. Below is a detailed breakdown of its key capabilities.

---

## 🔒 Immutable by Design

`BanglaCalendar` is strictly **immutable**. Operations never mutate the existing instance:

- **New Instances on Manipulation**: Methods like `addDays()`, `addMonths()`, `startOfMonth()`, etc., always return a brand-new `BanglaCalendar` instance.
- **Fresh Native Objects**: Methods returning JavaScript `Date` objects (such as `toDate()`) instantiate and return a fresh `Date` object every time, preventing accidental mutations to your calendar state.
- **Read-Only Properties**: All instance properties (`year`, `month`, `date`, `gregorian`, etc.) are read-only and frozen.

::: tip Thread-Safe & Side-Effect Free
Immutability makes `BanglaCalendar` instances safe to share across your application, state management stores (e.g. Redux, Vue Pinia, React state), and asynchronous flows without side effects.
:::

---

## 🔄 Bidirectional Calendar Conversion

Seamlessly convert dates between the Gregorian (Western) calendar and the Bengali calendar system in both directions.

- **Gregorian to Bangla**: Convert ISO date strings (`"2023-04-14"`), JavaScript `Date` objects, or Unix timestamps directly into `BanglaCalendar` instances.
- **Bangla to Gregorian**: Extract native JavaScript `Date` objects (`toDate()`), Unix timestamps (`valueOf()`), or individual Gregorian date components (`gregorian.year`, `gregorian.month`, `gregorian.date`).

::: tip Round-Trip Accuracy
Conversion is fully deterministic. Converting a Gregorian date to a Bengali date and back to Gregorian preserves the exact original date.
:::

---

## 📜 Multiple Calendar Variants

Supports two official calendar calculation rules for maximum accuracy across different regional and historical requirements:

- **`'revised-2019'` (Default)**: Official Bangladesh national standard adopted in 2019 by Bangla Academy. Synchronizes Falgun leap days with Gregorian leap year rules.
- **`'revised-1966'`**: Classical revised calendar standard based on the 1966 Dr. Muhammad Shahidullah committee. Follows the `bnYear % 4 === 2` leap year rule.

::: code-group

```typescript [Revised 2019 (Default)]
const cal2019 = new BanglaCalendar({ variant: 'revised-2019' });
console.log(cal2019.variant); // 'revised-2019'
```

```typescript [Revised 1966]
const cal1966 = new BanglaCalendar({ variant: 'revised-1966' });
console.log(cal1966.variant); // 'revised-1966'
```

:::

---

## 📅 Date Manipulation & Boundaries

Perform immutable date arithmetic and boundary calculations. All manipulation methods return **new** `BanglaCalendar` instances without mutating the original object.

- **Date Arithmetic**: `addDays()`, `addWeeks()`, `addMonths()`, `addYears()`.
- **Overflow Control**: Option to toggle day-clamping vs month-overflow when adding months/years (e.g. `addMonths(1, false)` to clamp to month-end).
- **Boundary Queries**: `startOfMonth()`, `endOfMonth()`, `startOfYear()`, `endOfYear()`.
- **Month Info & Leap Years**: `daysInMonth()`, `isLeapYear()`.

---

## 🎨 Rich Token Formatting & Text Escaping

Format dates using flexible token patterns or built-in localized formatters.

- **Custom Tokens**: Combine year (`YYYY`/`YY`), month (`mmmm`/`mmm`/`MM`/`M`), day (`DD`/`D`/`Do`), weekday (`ddd`/`dd`/`d`), and season (`SS`/`S`) tokens.
- **Text Escaping**: Protect literal text using square brackets (`[আজ] ddd` -> `"আজ শুক্রবার"`).
- **Built-in Formatters**:
  - `toString()`: Full Bengali representation (`"শুক্রবার, ১ বৈশাখ, ১৪৩০ [গ্রীষ্ম]"`).
  - `toStringEn()`: Full English representation (`"Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"`).
  - `toJSON()`: ISO-like Bangla digit string (`"১৪৩০-০১-০১"`).

---

## 🌐 Dual Localization (`'bn'` & `'en'`)

Built-in translation and transliteration for:

- **Month Names**: Boishakh (বৈশাখ) through Choitro (চৈত্র).
- **Weekday Names**: Robibar (রবিবার) through Shonibar (শনিবার).
- **Season Names**: Grisma/Summer (গ্রীষ্ম), Barsa/Monsoon (বর্ষা), Sarat/Autumn (শরৎ), Hemanta/Late-Autumn (হেমন্ত), Shhit/Winter (শীত), Basanta/Spring (বসন্ত).

```typescript
const date = new BanglaCalendar('2023-04-14');

console.log(date.getMonthName());     // "বৈশাখ"
console.log(date.getMonthName('en')); // "Boishakh"
```

---

## 🔢 Universal Digit Conversion Utilities

Includes standalone helper functions for converting between Bengali digits (`০-৯`) and Latin digits (`0-9`), exported via `bn-calendar/utils`.

- **`banglaToDigit()`**: Convert Bangla digits to Latin numbers or strings with flexible `forceNumber` toggles.
- **`digitToBangla()`**: Convert Latin numbers or strings to Bangla digits with optional non-digit preservation.

```typescript
import { banglaToDigit, digitToBangla } from 'bn-calendar/utils';

console.log(banglaToDigit('১২৩'));           // 123
console.log(digitToBangla('Phone: 01712345678')); // "Phone: ০১৭১২৩৪৫৬৭৮"
```

---

## ⚡ Zero Dependencies & Type Safe

- **Zero Dependencies**: Self-contained core library ensuring tiny bundle size and fast evaluation.
- **Full TypeScript Support**: Written 100% in TypeScript with strict range types (`NumberRange<1, 12>`, `BanglaYear`, `BanglaMonth`, `BanglaDate`).
- **Native JS Protocol**: Implements `valueOf()`, `toJSON()`, `[Symbol.toPrimitive]`, and `[Symbol.toStringTag]` for seamless operation with `JSON.stringify()`, arithmetic operators, and template literals.
