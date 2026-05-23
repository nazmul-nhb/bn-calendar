# Bangla Calendar

> Comprehensive Bengali calendar system library built for any JavaScript and TypeScript environment.

<p>
  <!-- Package Info -->
  <a href="https://www.npmjs.com/package/bn-calendar" aria-label="NPM Downloads">
    <img src="https://img.shields.io/npm/dm/bn-calendar.svg?label=DOWNLOADS&style=flat&color=red&logo=npm" alt="Downloads" />
  </a>
  <a href="https://www.npmjs.com/package/bn-calendar" aria-label="Latest Version">
    <img src="https://img.shields.io/npm/v/bn-calendar.svg?label=NPM&style=flat&color=teal&logo=npm" alt="Latest Version" />
  </a>
  <a href="https://bundlejs.com/?q=bn-calendar" aria-label="Bundle Size">
    <img src="https://img.shields.io/bundlejs/size/bn-calendar?label=Bundle%20Size&style=flat&color=blue&logo=npm" alt="Bundle Size" />
  </a>

  <!-- Project Metadata -->
  <a href="https://github.com/nazmul-nhb/bn-calendar" aria-label="TypeScript">
    <img src="https://img.shields.io/badge/BUILT%20with-TypeScript-3178C6?style=flat&logo=typescript&logoColor=blue" alt="Built with TypeScript" />
  </a>
  <a href="https://github.com/nazmul-nhb/bn-calendar/actions" aria-label="Build Status">
    <img src="https://img.shields.io/github/actions/workflow/status/nazmul-nhb/bn-calendar/publish.yml?label=BUILD%20%26%20PUBLISH&style=flat&logo=github" alt="Build Status" />
  </a>
  <a href="https://github.com/nazmul-nhb/bn-calendar" aria-label="Project Status">
    <img src="https://img.shields.io/badge/STATUS-maintained-brightgreen?style=flat&logo=git" alt="Maintained" />
  </a>
  <a href="https://github.com/nazmul-nhb/bn-calendar/commits/main" aria-label="Last Commit">
    <img src="https://img.shields.io/github/last-commit/nazmul-nhb/bn-calendar?style=flat&label=LAST%20COMMIT&logo=git" alt="Last Commit" />
  </a>

  <!-- GitHub Meta -->
  <a href="https://github.com/nazmul-nhb/bn-calendar/stargazers" aria-label="GitHub Stars">
    <img src="https://img.shields.io/github/stars/nazmul-nhb/bn-calendar?style=flat&label=STARS&logo=github" alt="GitHub stars" />
  </a>
  <a href="https://github.com/nazmul-nhb/bn-calendar/issues" aria-label="Open Issues">
    <img src="https://img.shields.io/github/issues/nazmul-nhb/bn-calendar?style=flat&label=ISSUES&logo=github" alt="Open Issues" />
  </a>
  <a href="https://github.com/nazmul-nhb/bn-calendar/pulls" aria-label="Open Pull Requests">
    <img src="https://img.shields.io/github/issues-pr/nazmul-nhb/bn-calendar?style=flat&label=PRs&logo=github" alt="Pull Requests" />
  </a>

  <!-- License Info -->
  <a href="https://www.npmjs.com/package/bn-calendar" aria-label="License">
    <img src="https://img.shields.io/npm/l/bn-calendar.svg?label=LICENSE&style=flat&color=orange&logo=open-source-initiative" alt="License" />
  </a>
</p>

<!-- markdownlint-disable-file MD024 -->

`bn-calendar` is a comprehensive Bengali calendar system library built for any JavaScript and TypeScript environment. It supports creation, manipulation, and conversion between Bengali and Gregorian calendars with full support for both `'revised-2019'` (default) and `'revised-1966'` variants.

## Features

- **Bidirectional Conversion**: Seamlessly convert dates between Gregorian and Bengali calendar systems.
- **Multiple Variants**: Full support for both `'revised-2019'` (official Bangladesh calendar) and `'revised-1966'` leap year rules.
- **Rich API**: Extensive methods for date manipulation, formatting, and calculations.
- **Universal Utilities**: Handy functions to handle conversion between Bangla (`০-৯`) and Latin (`0-9`) digits.
- **Lightweight & Fast**: Zero dependencies, fully tree-shakable, and optimized for performance.
- **Universal Compatibility**: Works seamlessly in Node.js, browsers, and any JS/TS environment.
- **Type-Safe**: Written in TypeScript with comprehensive type definitions.

---

## Install

### NPM

```bash
npm i bn-calendar
```

### PNPM

```bash
pnpm add bn-calendar
```

### YARN

```bash
yarn add bn-calendar
```

---

## Import

```typescript
import { BanglaCalendar } from 'bn-calendar';
```

---

## Table of Contents

- [Quick Examples](#quick-examples)
- [API Reference](#api-reference)
  - [Constructor](#constructor)
    - [Constructor Signatures](#constructor-signatures)
    - [Parameters](#parameters)
    - [Behavior](#behavior)
    - [Examples](#examples)
  - [Properties](#properties)
    - [variant](#variant)
    - [year](#year)
    - [month](#month)
    - [date](#date)
    - [gregorian](#gregorian)
    - [weekDay](#weekday)
    - [isoWeekDay](#isoweekday)
  - [Instance Methods](#instance-methods)
    - [format()](#format)
    - [valueOf()](#valueof)
    - [isLeapYear()](#isleapyear)
    - [toDate()](#todate)
    - [getSeasonName()](#getseasonname)
    - [getMonthName()](#getmonthname)
    - [getDayName()](#getdayname)
    - [startOfMonth()](#startofmonth)
    - [endOfMonth()](#endofmonth)
    - [startOfYear()](#startofyear)
    - [endOfYear()](#endofyear)
    - [daysInMonth()](#daysinmonth)
    - [toJSON()](#tojson)
    - [toString()](#tostring)
    - [toStringEn()](#tostringen)
    - [addDays()](#adddays)
    - [addWeeks()](#addweeks)
    - [addMonths()](#addmonths)
    - [addYears()](#addyears)
    - [$hasVariantConfig()](#hasvariantconfig)
  - [Static Methods](#static-methods)
    - [isBanglaYear()](#isbanglayear)
    - [isBanglaYearEn()](#isbanglayearen)
    - [isBanglaMonth()](#isbanglamonth)
    - [isBanglaMonthEn()](#isbanglamonthen)
    - [isBanglaDate()](#isbangladate)
    - [isBanglaDateEn()](#isbangladateen)
    - [isBanglaDateString()](#isbangladatestring)
  - [Symbol Methods](#symbol-methods)
    - [[Symbol.toPrimitive]](#symboltoprimitive)
    - [[Symbol.toStringTag]](#symboltostringtag)
- [Detailed Examples](#detailed-examples)
  - [Basic Usage](#basic-usage)
  - [Date Conversion](#date-conversion)
  - [Month Operations](#month-operations)
- [Aliases](#aliases)
- [Type Definitions](#type-definitions)
- [Bangla Digit Conversion Utilities](#bangla-digit-conversion-utilities)
  - [Import](#import)
  - [banglaToDigit()](#banglatodigit)
  - [digitToBangla()](#digittobangla)
  - [Type Definitions](#type-definitions-1)
- [Related Packages](#-related-packages)
- [License](#license)

---

## Quick Examples

**`BanglaCalendar`** - The class to create, manipulate, and convert dates between the Bangla and Gregorian calendar systems.

> It supports two calendar variants: `'revised-2019'` (default) and `'revised-1966'`.

```typescript
// Create from current date
const today = new BanglaCalendar();

// Create from Bangla date string (Bangla digit)
const date0 = new BanglaCalendar('১৪৩২-১১-০৮');

// Create from Gregorian date
const date1 = new BanglaCalendar('2023-04-14'); // Latin digit
const date2 = new BanglaCalendar(new Date('2023-04-14')); // Date object

// Create with specific Bangla date using Latin digits
const date3 = new BanglaCalendar(1430, 1, 1);

// Create with specific Bangla date using Bangla digits
const date4 = new BanglaCalendar('১৪৩০', '১', '১');

// Create with specific variant
const date5 = new BanglaCalendar('১৪৩০', '১', '১', { variant: 'revised-1966' });
```

---

## API Reference

### Constructor

Creates a new `BanglaCalendar` instance from various input formats.

#### Constructor Signatures

**Signature 1:** From current date with optional configuration

```typescript
constructor(config?: BnCalendarConfig)
```

**Signature 2:** From Bangla or Gregorian date string

```typescript
constructor(date: string, config?: BnCalendarConfig)
```

**Signature 3:** From Date object

```typescript
constructor(date: Date, config?: BnCalendarConfig)
```

**Signature 4:** From timestamp or Bangla year (Latin digits)

```typescript
constructor(tsOrBnYear: number, config?: BnCalendarConfig)
```

**Signature 5:** From Bangla year (Bangla digits)

```typescript
constructor(bnYear: BanglaYear, config?: BnCalendarConfig)
```

**Signature 6:** From Bangla year and month (Latin digits)

```typescript
constructor(bnYear: number, bnMonth: NumberRange<1, 12>, config?: BnCalendarConfig)
```

**Signature 7:** From Bangla year and month (Bangla digits)

```typescript
constructor(bnYear: BanglaYear, bnMonth: BanglaMonth, config?: BnCalendarConfig)
```

**Signature 8:** From Bangla year, month, and day (Latin digits)

```typescript
constructor(
  bnYear: number,
  bnMonth: NumberRange<1, 12>,
  bnDate: NumberRange<1, 31>,
  config?: BnCalendarConfig
)
```

**Signature 9:** From Bangla year, month, and day (Bangla digits)

```typescript
constructor(
  bnYear: BanglaYear,
  bnMonth: BanglaMonth,
  bnDate: BanglaDate,
  config?: BnCalendarConfig
)
```

#### Parameters

- `date`: Various date formats including Bangla date strings, Gregorian date strings, Date objects, timestamps, or individual date components
- `bnYear`: Bengali year in either Bangla (`০-৯৯৯৯`) or Latin (`0-9999`) digits
- `bnMonth`: Bengali month (1-12 or `১-১২`)
- `bnDate`: Bengali day of month (1-31 or `১-৩১`)
- `config`: Optional configuration object with `variant` property (`'revised-2019'` or `'revised-1966'`)

#### Behavior

- Automatically detects input format and parses accordingly
- Defaults to current date if no valid input is provided
- Uses `'revised-2019'` variant by default
- Validates all date components
- Handles leap years according to the selected variant

#### Examples

```typescript
// Current date
new BanglaCalendar();

// From Bangla date string
new BanglaCalendar('১৪৩২-১১-০৮');

// From Gregorian date string
new BanglaCalendar('2023-04-14');

// From Date object
new BanglaCalendar(new Date('2023-04-14'));

// From Bangla year, month, date (Latin)
new BanglaCalendar(1430, 1, 1);

// From Bangla year, month, date (Bangla)
new BanglaCalendar('১৪৩০', '১', '১');

// With specific variant
new BanglaCalendar('১৪৩০', '১', '১', { variant: 'revised-1966' });
```

---

### Properties

#### variant

```typescript
readonly variant: BnCalendarVariant
```

The calendar variant being used (`'revised-2019'` or `'revised-1966'`).

**Example:**

```typescript
const cal2019 = new BanglaCalendar(); // Default: 'revised-2019'
console.log(cal2019.variant); // 'revised-2019'

const cal1966 = new BanglaCalendar({ variant: 'revised-1966' });
console.log(cal1966.variant); // 'revised-1966'

// Different leap year behavior
console.log(cal2019.isLeapYear()); // Follows Gregorian rules
console.log(cal1966.isLeapYear()); // Follows Bangla year % 4 === 2 rule
```

#### year

```typescript
readonly year: Readonly<{
  bn: BanglaYear;    // Bangla year in Bangla digits
  en: number;        // Bangla year in Latin digits
}>
```

**Example:**

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০১-০১');
console.log(bnCal.year.bn);  // '১৪৩০' (Bangla digits)
console.log(bnCal.year.en);  // 1430 (Latin digits)

// Type-safe access
const banglaYear: string = bnCal.year.bn; // Type: BanglaYear
const latinYear: number = bnCal.year.en;  // Type: number
```

#### month

```typescript
readonly month: Readonly<{
  bn: BanglaMonth;   // Bangla month in Bangla digits (১-১২)
  en: NumberRange<1, 12>;  // Bangla month in Latin digits (1-12)
}>
```

**Example:**

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০৫-১৫'); // ভাদ্র ১৫
console.log(bnCal.month.bn);  // '৫' (Bangla digits)
console.log(bnCal.month.en);  // 5 (Latin digits, 1-based)

// Get month name to verify
console.log(bnCal.getMonthName()); // 'ভাদ্র'
console.log(bnCal.getMonthName('en')); // 'Bhadro'

// Type-safe access
const monthNumber: number = bnCal.month.en; // Type: NumberRange<1, 12>
```

#### date

```typescript
readonly date: Readonly<{
  bn: BanglaDate;    // Bangla day of month in Bangla digits (১-৩১)
  en: NumberRange<1, 31>;  // Bangla day of month in Latin digits (1-31)
}>
```

**Example:**

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০৫-১৫'); // ১৫ ভাদ্র
console.log(bnCal.date.bn);  // '১৫' (Bangla digits)
console.log(bnCal.date.en);  // 15 (Latin digits)

// Type-safe access
const dayNumber: number = bnCal.date.en; // Type: NumberRange<1, 31>
```

#### gregorian

```typescript
readonly gregorian: Readonly<{
  year: number;      // Gregorian year
  month: NumberRange<1, 12>;  // Gregorian month (1-12)
  date: NumberRange<1, 31>;   // Gregorian day of month (1-31)
}>
```

**Example:**

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০১-০১'); // ১ বৈশাখ ১৪৩০
console.log(bnCal.gregorian.year);   // 2023
console.log(bnCal.gregorian.month);  // 4 (April)
console.log(bnCal.gregorian.date);   // 14

// Verify conversion
const gregorianDate = bnCal.toDate();
console.log(gregorianDate); // Date: Fri Apr 14 2023 00:00:00 GMT+0000

// Conversion works both ways
const fromGregorian = new BanglaCalendar(new Date(2023, 3, 14)); // April 14, 2023
console.log(fromGregorian.toJSON()); // '১৪৩০-০১-০১'
```

#### weekDay

```typescript
readonly weekDay: Enumerate<7>
```

Day of the week (0-6, where 0 is Sunday/রবিবার).

**Example:**

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০১-০১'); // Friday, April 14, 2023
console.log(bnCal.weekDay); // 5 (Friday)

// Get day name to verify
console.log(bnCal.getDayName());     // 'শুক্রবার'
console.log(bnCal.getDayName('en')); // 'Shukrobar (Friday)'

// Check specific days
if (bnCal.weekDay === 0) {
  console.log('It is Sunday (রবিবার)');
} else if (bnCal.weekDay === 5) {
  console.log('It is Friday (শুক্রবার)');
}
```

#### isoWeekDay

```typescript
readonly isoWeekDay: NumberRange<1, 7>
```

ISO weekday (1 = Monday, 7 = Sunday).

**Example:**

```typescript
const bnCal = new BanglaCalendar('১৪৩০-০১-০১'); // Friday, April 14, 2023
console.log(bnCal.isoWeekDay); // 5 (Friday in ISO format)

// Compare with weekDay
console.log(bnCal.weekDay);    // 5 (0-based, Sunday=0)
console.log(bnCal.isoWeekDay); // 5 (1-based, Monday=1)

// Useful for ISO-compliant calculations
const isWeekend = bnCal.isoWeekDay >= 6; // Saturday or Sunday
console.log(isWeekend); // false (Friday is not weekend)

// ISO week starts on Monday
const mondayDate = bnCal.addDays(1 - bnCal.isoWeekDay); // Get Monday of the week
console.log(mondayDate.toJSON()); // Get Monday's date
```

---

### Instance Methods

#### format()

Formats the current date as a Bangla calendar date string using customizable tokens.

##### Signature

```typescript
format(format?: BanglaDateFormat): string
```

##### Parameters

- `format`: Format string using tokens (default: `'ddd, DD mmmm (SS), YYYY বঙ্গাব্দ'`)

##### Return Value

Formatted Bangla date string according to the specified format.

##### Examples

```typescript
const bnCal = new BanglaCalendar('2023-04-14');

bnCal.format();
// Returns: 'শুক্রবার, বৈশাখ ০১ (গ্রীষ্মকাল), ১৪৩০ বঙ্গাব্দ'

bnCal.format('YYYY-MM-DD');
// Returns: '১৪৩০-০১-০১'

bnCal.format('mmmm DD, YYYY');
// Returns: 'বৈশাখ ০১, ১৪৩০'
```

##### Format Tokens

- **Year**: `YYYY`/`yyyy` (full year), `YY`/`yy` (last 2 digits)
- **Month**: `M`/`MM` (padded), `mmm` (short name), `mmmm` (full name)
- **Day**: `D`/`DD` (padded), `Do` (cardinal)
- **Weekday**: `d` (short), `dd` (without 'বার'), `ddd` (full)
- **Season**: `S` (season), `SS` (season with 'কাল' suffix)

##### Escaping Text

To output raw text (not interpreted as a token), wrap it in square brackets:

- `[আজ] ddd` → `আজ রবিবার`
- `[year ]YYYY` → `year ২০২৫`

---

#### valueOf()

Gets the numeric timestamp (in milliseconds) for the current Bangla date.

##### Signature

```typescript
valueOf(): number
```

##### Return Value

Unix timestamp in milliseconds representing the Gregorian equivalent of the current Bangla date.

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১');
const timestamp = bnCal.valueOf(); // 1681430400000 (equivalent to April 14, 2023)
```

##### Remarks

- Internally calls [**`toDate().getTime()`**](#todate) to convert the Bangla date to Gregorian and get its timestamp
- The time component is normalized to midnight UTC during conversion
- This method is automatically called when the instance is used in numeric contexts

---

#### isLeapYear()

Checks if the current Bangla year is a leap year according to the selected calendar variant.

##### Signature

```typescript
isLeapYear(): boolean
```

##### Return Value

`true` if the year is a leap year, `false` otherwise.

##### Example

```typescript
const date = new BanglaCalendar(1430, 1, 1);
const isLeap = date.isLeapYear(); // false
```

##### Remarks

- **Revised-2019**: Follows Gregorian leap year rules (divisible by 4, not by 100 unless also divisible by 400)
- **Revised-1966**: Leap year when `bnYear % 4 === 2`

---

#### toDate()

Converts the Bangla calendar date to a JavaScript Date object.

##### Signature

```typescript
toDate(): Date
```

##### Return Value

Gregorian Date object equivalent to the Bangla date.

##### Example

```typescript
const bnDate = new BanglaCalendar('১৪৩০', '১', '১');
const gregorianDate = bnDate.toDate(); // Date for April 14, 2023
```

##### Remarks

- Time component is always set to `00:00:00` in UTC
- Accounts for calendar variant and leap year rules

---

#### getSeasonName()

Gets the Bangla season name for the current date.

##### Signature

```typescript
getSeasonName<Locale extends $BnEn = 'bn'>(locale?: Locale): BanglaSeasonName<Locale>
```

##### Parameters

- `locale`: Output locale (`'bn'` for Bengali, `'en'` for English). Defaults to `'bn'`.

##### Return Value

Name of the season in the specified locale.

##### Example

```typescript
const bnCal = new BanglaCalendar('2023-04-14');
bnCal.getSeasonName(); // "গ্রীষ্ম"
bnCal.getSeasonName('en'); // "Grisma (Summer)"
```

##### Seasons

- গ্রীষ্ম (Summer): Mid-April to Mid-June
- বর্ষা (Monsoon): Mid-June to Mid-August
- শরৎ (Autumn): Mid-August to Mid-October
- হেমন্ত (Late Autumn): Mid-October to Mid-December
- শীত (Winter): Mid-December to Mid-February
- বসন্ত (Spring): Mid-February to Mid-April

---

#### getMonthName()

Gets the Bangla name of the month for the current date.

##### Signature

```typescript
getMonthName<Locale extends $BnEn = 'bn'>(locale?: Locale): BanglaMonthName<Locale>
```

##### Parameters

- `locale`: Output locale (`'bn'` for Bengali, `'en'` for English). Defaults to `'bn'`.

##### Return Value

Name of the month in the specified locale.

##### Example

```typescript
const bnCal = new BanglaCalendar('2023-04-14');
bnCal.getMonthName(); // "বৈশাখ"
bnCal.getMonthName('en'); // "Boishakh"
```

---

#### getDayName()

Gets the Bangla name of the weekday for the current date.

##### Signature

```typescript
getDayName<Locale extends $BnEn = 'bn'>(locale?: Locale): BanglaDayName<Locale>
```

##### Parameters

- `locale`: Output locale (`'bn'` for Bengali, `'en'` for English). Defaults to `'bn'`.

##### Return Value

Name of the weekday in the specified locale.

##### Example

```typescript
const bnCal = new BanglaCalendar('2023-04-14'); // Friday
bnCal.getDayName(); // "শুক্রবার"
bnCal.getDayName('en'); // "Shukrobar (Friday)"
```

---

#### startOfMonth()

Gets a new BanglaCalendar instance representing the first day of the current month.

##### Signature

```typescript
startOfMonth(): BanglaCalendar
```

##### Return Value

A BanglaCalendar instance set to the 1st day of the current month.

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '৫', '১৫');
const startOfMonth = bnCal.startOfMonth(); // ১ জ্যৈষ্ঠ ১৪৩০
```

##### Remarks

- Preserves the calendar variant of the original
- Time component is set to midnight UTC

---

#### endOfMonth()

Gets a new `BanglaCalendar` instance representing the last day of the current month.

##### Signature

```typescript
endOfMonth(): BanglaCalendar
```

##### Return Value

A `BanglaCalendar` instance set to the last day of the current month.

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '৫', '১৫');
const endOfMonth = bnCal.endOfMonth(); // ৩১ জ্যৈষ্ঠ ১৪৩০
```

##### Remarks

- Accounts for month length variations (29/30/31 days)
- Includes leap year adjustments

---

#### startOfYear()

Gets a new `BanglaCalendar` instance representing the first day of the current year (১ বৈশাখ).

##### Signature

```typescript
startOfYear(): BanglaCalendar
```

##### Return Value

A `BanglaCalendar` instance set to ১ বৈশাখ of the current year.

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '৫', '১৫');
const startOfYear = bnCal.startOfYear(); // ১ বৈশাখ ১৪৩০
```

---

#### endOfYear()

Gets a new `BanglaCalendar` instance representing the last day of the current year (৩০ চৈত্র).

##### Signature

```typescript
endOfYear(): BanglaCalendar
```

##### Return Value

A `BanglaCalendar` instance set to ৩০ চৈত্র of the current year.

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '৫', '১৫');
const endOfYear = bnCal.endOfYear(); // ৩০ চৈত্র ১৪৩০
```

---

#### daysInMonth()

Gets the number of days in a Bangla month.

##### Signature

```typescript
daysInMonth(month?: NumberRange<1, 12>): NumberRange<29, 31>
```

##### Parameters

- `month`: Optional Bangla month (1-12 in Latin digits). If not provided, uses the current month.

##### Return Value

Number of days in the specified month (29, 30, or 31).

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১');
bnCal.daysInMonth(); // 31 (বৈশাখ has 31 days)
bnCal.daysInMonth(12); // 30 (চৈত্র has 30 days)
```

---

#### toJSON()

Returns a string representation of the Bangla date in ISO-like format (`YYYY-MM-DD` with Bangla digits).

##### Signature

```typescript
toJSON(): string
```

##### Return Value

Bangla date string in the format: `"YYYY-MM-DD"` (e.g., `"১৪৩০-০১-০১"`).

##### Example

```typescript
const bnCal = new BanglaCalendar('2023-04-14');
console.log(bnCal.toJSON()); // "১৪৩০-০১-০১"
```

##### Remarks

- Automatically called by `JSON.stringify()`
- Output follows: `"বছর-মাস-দিন"` with zero-padded Bangla digits

---

#### toString()

Returns a string representation of the Bangla date in Bengali format.

##### Signature

```typescript
toString(): string
```

##### Return Value

Bangla date string in the format: "শুক্রবার, ১৫ জ্যৈষ্ঠ, ১৪৩০ [গ্রীষ্ম]".

##### Example

```typescript
const bnCal = new BanglaCalendar('2023-04-14');
console.log(bnCal.toString()); // "শুক্রবার, ১ বৈশাখ, ১৪৩০ [গ্রীষ্ম]"
```

##### Remarks

- Equivalent to [toStringEn()](#tostringen) with `'bn'` locale

---

#### toStringEn()

Returns a string representation of the Bangla date in English/Latin format.

##### Signature

```typescript
toStringEn(): string
```

##### Return Value

Bangla date string in the format: "Shukrobar (Friday), 15 Joishtho, 1430 [Grisma (Summer)]".

##### Example

```typescript
const bnCal = new BanglaCalendar('2023-04-14');
console.log(bnCal.toStringEn()); // "Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"
```

---

#### addDays()

Adds (or subtracts) days to (or from) the current Bangla date.

##### Signature

```typescript
addDays(days: number): BanglaCalendar
```

##### Parameters

- `days`: Number of days to add (negative values subtract days)

##### Return Value

A new `BanglaCalendar` instance with the adjusted date.

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১'); // ১ বৈশাখ ১৪৩০

// Add days
bnCal.addDays(7);   // ৮ বৈশাখ ১৪৩০
bnCal.addDays(35);  // ৫ জ্যৈষ্ঠ ১৪৩০

// Subtract days
bnCal.addDays(-3);  // ২৮ চৈত্র ১৪২৯

// Cross year boundary
const lateDate = new BanglaCalendar('১৪৩০', '১২', '২৫');
lateDate.addDays(10); // ৫ বৈশাখ ১৪৩১
```

##### Remarks

- Preserves the calendar variant of the original instance
- Handles month and year transitions automatically
- Accounts for varying month lengths and leap years
- Negative values subtract days from the current date
- Time component remains at midnight UTC

---

#### addWeeks()

Adds (or subtracts) weeks to (or from) the current Bangla date.

##### Signature

```typescript
addWeeks(weeks: number): BanglaCalendar
```

##### Parameters

- `weeks`: Number of weeks to add (negative values subtract weeks)

##### Return Value

A new `BanglaCalendar` instance with the adjusted date.

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১'); // ১ বৈশাখ ১৪৩০

// Add weeks
bnCal.addWeeks(2);   // ১৫ বৈশাখ ১৪৩০
bnCal.addWeeks(5);   // ৫ জ্যৈষ্ঠ ১৪৩০

// Subtract weeks
bnCal.addWeeks(-1);  // ২৪ চৈত্র ১৪২৯
```

##### Remarks

- Each week is treated as exactly 7 days
- Preserves the calendar variant of the original instance
- Handles month and year transitions automatically
- Useful for scheduling recurring weekly events
- Negative values subtract weeks from the current date

---

#### addMonths()

Adds (or subtracts) months to (or from) the current Bangla date.

##### Signature

```typescript
addMonths(months: number, overflow?: boolean): BanglaCalendar
```

##### Parameters

- `months`: Number of months to add (negative values subtract months)
- `overflow`: Controls behavior when day doesn't exist in target month (default: `true`)
  - `true`: Invalid dates overflow to the next month
  - `false`: Clamps to the last valid day of the target month

##### Return Value

A new `BanglaCalendar` instance with the adjusted date.

##### Example

```typescript
const normal = new BanglaCalendar('১৪৩০', '২', '১৫');
normal.addMonths(1);         // ১৫ আষাঢ় ১৪৩০
normal.addMonths(1, false);  // ১৫ আষাঢ় ১৪৩০

// Edge case: 31st doesn't exist in কার্তিক (30 days)
const edgeCase = new BanglaCalendar('১৪৩০', '৬', '৩১'); // ৩১ আশ্বিন ১৪৩০
edgeCase.addMonths(1);         // ১ অগ্রহায়ণ ১৪৩০ (overflow)
edgeCase.addMonths(1, false);  // ৩০ কার্তিক ১৪৩০ (clamped)

// Subtract months
edgeCase.addMonths(-1);        // ১ আশ্বিন ১৪৩০
edgeCase.addMonths(-1, false); // ৩১ ভাদ্র ১৪৩০
```

##### Remarks

- When `overflow=true` (default): Follows JavaScript `Date` behavior where invalid dates overflow
- When `overflow=false`: Clamps to the last valid day of the target month
- Preserves the calendar variant of the original instance
- Handles year transitions automatically
- Negative values subtract months from the current date

---

#### addYears()

Adds (or subtracts) years to (or from) the current Bangla date.

##### Signature

```typescript
addYears(years: number, overflow?: boolean): BanglaCalendar
```

##### Parameters

- `years`: Number of years to add (negative values subtract years)
- `overflow`: Controls behavior for leap year adjustments (default: `true`)
  - `true`: Allows date overflow when day doesn't exist in target year
  - `false`: Clamps to last valid day of month in non-leap years

##### Return Value

A new `BanglaCalendar` instance with the adjusted date.

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১৫'); // ১৫ বৈশাখ ১৪৩০

// Add years
bnCal.addYears(1);   // ১৫ বৈশাখ ১৪৩১
bnCal.addYears(5);   // ১৫ বৈশাখ ১৪৩৫

// Subtract years
bnCal.addYears(-1);  // ১৫ বৈশাখ ১৪২৯

// Leap year adjustment
const leapDay = new BanglaCalendar('১৪৩১', '১১', '৩০'); // ৩০ ফাল্গুন ১৪৩১ (leap year)
leapDay.addYears(1, false); // ২৯ ফাল্গুন ১৪৩২ (non-leap year has 29 days)
```

##### Remarks

- Preserves the calendar variant of the original instance
- Negative values subtract years from the current date
- Year addition follows Bangla calendar years
- The month and day generally remain the same unless affected by leap year rules
- When `overflow=false`, dates in ফাল্গুন (month 11) are adjusted for leap year differences

---

#### $hasVariantConfig()

Checks if a value is a configuration object that contains a valid calendar `variant`.

##### Signature

```typescript
$hasVariantConfig(value: unknown): value is { variant: BnCalendarVariant }
```

##### Parameters

- `value`: The value to check

##### Return Value

`true` if the value contains a valid `variant` property, `false` otherwise.

##### Example

```typescript
const bnCal = new BanglaCalendar();

// Valid configuration objects
bnCal.$hasVariantConfig({ variant: 'revised-2019' }); // true
bnCal.$hasVariantConfig({ variant: 'revised-1966' }); // true

// Invalid configuration objects
bnCal.$hasVariantConfig({ variant: 'invalid' }); // false
bnCal.$hasVariantConfig({}); // false
bnCal.$hasVariantConfig(null); // false
```

##### Remarks

- This method is used internally by the constructor to extract variant configuration from various parameter positions
- Can be useful for type-checking configuration objects before passing them to the constructor
- Validates if the object has a `variant` property and it contains one of the 2 supported values: `'revised-2019'` or `'revised-1966'`

---

### Static Methods

#### isBanglaYear()

Checks whether a value is a valid Bangla year in Bangla digits (`০–৯৯৯৯`).

##### Signature

```typescript
static isBanglaYear(value: unknown): value is BanglaYear
```

##### Example

```typescript
BanglaCalendar.isBanglaYear('১৪৩০'); // true
BanglaCalendar.isBanglaYear('১০০০০'); // false (too many digits)
BanglaCalendar.isBanglaYear('1430');  // false (Latin digits)
```

---

#### isBanglaYearEn()

Checks whether a value is a valid Bangla year in Latin digits (`0–9999`).

##### Signature

```typescript
static isBanglaYearEn(value: number): boolean
```

##### Example

```typescript
BanglaCalendar.isBanglaYearEn(1430);  // true
BanglaCalendar.isBanglaYearEn(10000); // false
BanglaCalendar.isBanglaYearEn(-1);    // false
```

---

#### isBanglaMonth()

Checks whether a value is a valid Bangla month in Bangla digits (`১–১২`).

##### Signature

```typescript
static isBanglaMonth(value: unknown): value is BanglaMonth
```

##### Example

```typescript
BanglaCalendar.isBanglaMonth('১');  // true
BanglaCalendar.isBanglaMonth('১২'); // true
BanglaCalendar.isBanglaMonth('১৩'); // false
```

---

#### isBanglaMonthEn()

Checks whether a value is a valid Bangla month in Latin digits (`1–12`).

##### Signature

```typescript
static isBanglaMonthEn(value: unknown): value is NumberRange<1, 12>
```

##### Example

```typescript
BanglaCalendar.isBanglaMonthEn(1);  // true
BanglaCalendar.isBanglaMonthEn(12); // true
BanglaCalendar.isBanglaMonthEn(13); // false
```

---

#### isBanglaDate()

Checks whether a value is a valid Bangla date of month in Bangla digits (`১–৩১`).

##### Signature

```typescript
static isBanglaDate(value: unknown): value is BanglaDate
```

##### Example

```typescript
BanglaCalendar.isBanglaDate('১');   // true
BanglaCalendar.isBanglaDate('৩১');  // true
BanglaCalendar.isBanglaDate('৩২');  // false
```

---

#### isBanglaDateEn()

Checks whether a value is a valid Bangla date of month in Latin digits (`1–31`).

##### Signature

```typescript
static isBanglaDateEn(value: unknown): value is NumberRange<1, 31>
```

##### Example

```typescript
BanglaCalendar.isBanglaDateEn(1);   // true
BanglaCalendar.isBanglaDateEn(31);  // true
BanglaCalendar.isBanglaDateEn(32);  // false
```

---

#### isBanglaDateString()

Checks whether a string follows the Bangla date format pattern (`YYYY-MM-DD` with Bangla digits).

##### Signature

```typescript
static isBanglaDateString(value: unknown): value is string
```

##### Example

```typescript
BanglaCalendar.isBanglaDateString('১৪৩০-০১-০১'); // true
BanglaCalendar.isBanglaDateString('1430-01-01'); // false (Latin digits)
BanglaCalendar.isBanglaDateString('১৪৩০-১৩-০১'); // false (invalid month)
```

##### Remarks

- Accepts both zero-padded and non-padded Bangla digits
- Validates year, month, and date components separately

---

### Symbol Methods

#### [Symbol.toPrimitive]

Converts the `BanglaCalendar` instance to a primitive value based on the provided hint.

##### Signature

```typescript
[Symbol.toPrimitive](hint: string): string | number
```

##### Parameters

- `hint`: The conversion hint - either `'number'` or `'string'` (defaults to `'string'`)

##### Return Value

- If `hint` is `'number'`: Returns the timestamp (same as [valueOf()](#valueof))
- Otherwise: Returns the ISO-like Bangla date string (same as [toJSON()](#tojson))

##### Behavior

- **`hint === 'number'`**: Returns numeric timestamp via [valueOf()](#valueof)
- **`hint === 'string'` or any other hint**: Returns formatted string via [toJSON()](#tojson)

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১');

// String context (default)
String(bnCal); // "১৪৩০-০১-০১"
`${bnCal}`;    // "১৪৩০-০১-০১"

// Numeric context
+bunCal;        // 1681430400000
bnCal * 1;      // 1681430400000

// Using explicit hint
bnCal[Symbol.toPrimitive]('number');  // 1681430400000
bnCal[Symbol.toPrimitive]('string');  // "১৪৩০-০১-০১"
bnCal[Symbol.toPrimitive]('default'); // "১৪৩০-০১-০১"
```

##### Remarks

- This method enables implicit type conversion in JavaScript/TypeScript
- Follows standard JavaScript object-to-primitive conversion protocol
- Ensures predictable behavior in arithmetic operations and string concatenation

---

#### [Symbol.toStringTag]

Provides a string tag used by `Object.prototype.toString()`.

##### Signature

```typescript
get [Symbol.toStringTag](): string
```

##### Return Value

ISO-like Bangla date string in the format `"YYYY-MM-DD"` with Bangla digits.

##### Example

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১');

console.log(bnCal);
// BanglaCalendar [১৪৩০-০১-০১] {
//   variant: 'revised-2019',
//   year: { bn: '১৪৩০', en: 1430 },
//   month: { bn: '১', en: 1 },
//   date: { bn: '১', en: 1 },
//   gregorian: { year: 2023, month: 4, date: 14 },
//   weekDay: 5,
//   isoWeekDay: 5
// }

Object.prototype.toString.call(bnCal); // "[object ১৪৩০-০১-০১]"

bnCal[Symbol.toStringTag];            // "১৪৩০-০১-০১"
```

##### Remarks

- Returns the same value as [toJSON()](#tojson) method
- Used by `Object.prototype.toString()` to identify the object type
- Provides a human-readable representation in debugging contexts

---

## Detailed Examples

### Basic Usage

```typescript
const today = new BanglaCalendar();
console.log(today.toString()); // "শুক্রবার, ১ বৈশাখ, ১৪৩০ [গ্রীষ্ম]"
console.log(today.toJSON());   // "১৪৩০-০১-০১"

const specificDate = new BanglaCalendar('১৪৩২-১১-০৮');
console.log(specificDate.getMonthName()); // "ফাল্গুন"
```

### Date Conversion

```typescript
const bnDate = new BanglaCalendar('১৪৩০', '১', '১');
const gregorianDate = bnDate.toDate();
console.log(gregorianDate.toISOString()); // "2023-04-14T00:00:00.000Z"
```

### Month Operations

```typescript
const date = new BanglaCalendar('১৪৩০', '৫', '১৫');
console.log(date.startOfMonth().toString()); // "১ জ্যৈষ্ঠ ১৪৩০"
console.log(date.endOfMonth().toString());   // "৩১ জ্যৈষ্ঠ ১৪৩০"
```

---

## Aliases

`BanglaCalendar` can also be imported using **BnCalendar** and **Bongabdo** aliases.

```typescript
import { BnCalendar, Bongabdo } from 'bn-calendar';

const bnCal = new BnCalendar('১৪৩০', '১', '১');
const bongabdoCal = new Bongabdo('১৪৩০', '১', '১');

// Same as new BanglaCalendar('১৪৩০', '১', '১')
```

---

## Type Definitions

### LocaleCode

```typescript
type $BnEn = 'bn' | 'en'
```

Supported locale codes for Bangla calendar output.

### BanglaYear

```typescript
type BanglaYear = BanglaDigit | `${$BnOnes}${BanglaDigit}` | `${$BnOnes}${BanglaDigit}${BanglaDigit}` | Repeat<BanglaDigit, 4>
```

Bangla year from `০-৯৯৯৯`.

### BanglaMonth

```typescript
type BanglaMonth = $BnOnes | $BnOnesPadded | '১০' | '১১' | '১২'
```

Bangla month from `১-১২`.

### BanglaDate

```typescript
type BanglaDate = $BnOnes | $BnOnesPadded | `১${BanglaDigit}` | `২${BanglaDigit}` | '৩০' | '৩১'
```

Bangla date of month from `১-৩১`.

### BnCalendarVariant

```typescript
type BnCalendarVariant = 'revised-2019' | 'revised-1966'
```

Calendar variant types.

### BnCalendarConfig

```typescript
interface BnCalendarConfig {
  variant?: BnCalendarVariant;
}
```

Configuration object for Bangla Calendar system.

### BanglaDateFormat

```typescript
type BanglaDateFormat = LooseLiteral<DateFormatToken | DateWithSeasonToken>
```

Format tokens for Bangla date formatting.

---

## Bangla Digit Conversion Utilities

> Allows you to convert between Bangla (Bengali) digits (`০-৯`) and Latin (Arabic) digits (`0-9`). Internally `BanglaCalendar` class uses these functions to convert between Bangla and Latin digits.

### Import

```typescript
import { banglaToDigit, digitToBangla } from 'bn-calendar/utils'
```

---

> [!NOTE]
>
> `banglaToDigit()` and `digitToBangla()` functions are imported from the [**toolbox-x**](https://toolbox-x.nazmul-nhb.dev/) package.

The digit conversion utilities provide seamless conversion between Bangla (Bengali) digits (`০-৯`) and Latin (Arabic) digits (`0-9`). These functions are essential for applications that need to handle multilingual numeric representations, particularly in Bengali-language interfaces.

### banglaToDigit()

Converts Bangla digits to Latin digits with flexible output options.

#### Signature

```typescript
banglaToDigit<Force extends boolean = true>(bnDigit: string, forceNumber?: Force): BnDigitResult<Force>
```

#### Parameters

- `bnDigit`: A string containing Bangla digits (`০-৯`)
- `forceNumber`:
  - `true` (default): Returns a `number` (strips non-digit characters)
  - `false`: Returns a `string` (preserves non-digit characters)

#### Return Value

- When `forceNumber = true`: `number` (or `0` or `NaN` if no digits found)
- When `forceNumber = false`: `string`

#### Behavior

| Input                       | `forceNumber = true`         | `forceNumber = false`                |
| --------------------------- | ---------------------------- | ------------------------------------ |
| Contains only Bangla digits | Returns converted number     | Returns converted string             |
| Contains mixed characters   | Returns number (digits only) | Returns string with converted digits |
| Empty string                | Returns `NaN`                | Returns empty string                 |
| No digits in string         | Returns `0` or `NaN`         | Returns the input string             |

#### Examples

```typescript
// Default behavior (forceNumber = true)
banglaToDigit('১২৩');        // 123
banglaToDigit('৪৫৬৭');      // 4567
banglaToDigit('১২৩abc');     // 123 (non-digits stripped)
banglaToDigit('abc');        // 0 (no digits)
banglaToDigit('');           // NaN

// Force string output (forceNumber = false)
banglaToDigit('১২৩', false);        // "123"
banglaToDigit('১২৩abc', false);     // "123abc" (preserves non-digits)
banglaToDigit('৪৫৬৭', false);       // "4567"
banglaToDigit('abc', false);        // "abc" (empty string)
banglaToDigit('', false);           // "" (empty string)

// Complex examples
banglaToDigit('আমার বয়স ২৫ বছর');      // 25
banglaToDigit('ফোন: ০১৭১২৩৪৫৬৭৮', false); // "ফোন: 01712345678"
```

#### Use Cases

- Parsing numeric input from Bengali users
- Converting database values stored in Bangla digits to numbers for calculations
- Processing multilingual forms that accept Bangla numbers
- Localization utilities for Bengali applications

---

### digitToBangla()

Converts Latin digits to Bangla digits with optional non-digit preservation.

#### Signature

```typescript
digitToBangla(digit: number | string, preserveNonDigit = true): string
```

#### Parameters

- `digit`: A number or string containing Latin digits (0-9)
- `preserveNonDigit`:
  - `true` (default): Preserves non-digit characters in output
  - `false`: Strips non-numeric characters from output

#### Return Value

`string` - Converted Bangla digit string (or empty string for invalid input)

#### Behavior

| Input                        | `preserveNonDigit = true`         | `preserveNonDigit = false`     |
| ---------------------------- | --------------------------------- | ------------------------------ |
| Number                       | Returns Bangla digits             | Returns Bangla digits          |
| String with only digits      | Returns Bangla digits             | Returns Bangla digits          |
| String with mixed characters | Converts digits, preserves others | Converts digits, strips others |
| Empty string                 | Returns empty string              | Returns empty string           |
| Non-numeric string           | Returns original string           | Returns empty string           |

#### Examples

```typescript
// Default behavior (preserveNonDigit = true)
digitToBangla(123);                 // "১২৩"
digitToBangla(4567);                // "৪৫৬৭"
digitToBangla('123');               // "১২৩"
digitToBangla('12ab34');            // "১২ab৩৪"
digitToBangla('abc');               // "abc"
digitToBangla('');                  // ""

// Strip non-digits (preserveNonDigit = false)
digitToBangla('12ab34', false);     // "১২৩৪" (non-digits removed)
digitToBangla('abc', false);        // "" (no digits)
digitToBangla('১২৩', false);        // "১২৩" (already Bangla digits)
digitToBangla('', false);           // ""

// Complex examples
digitToBangla('Phone: 01712345678');
// "Phone: ০১৭১২৩৪৫৬৭৮"

digitToBangla('আমার বয়স 25 বছর');
// "আমার বয়স ২৫ বছর"

digitToBangla('Price: $99.99', false);
// "৯৯৯৯" (strips all non-digits)
```

#### Use Cases

- Displaying numbers in Bengali interfaces
- Formatting prices, quantities, and measurements in Bengali
- Generating multilingual receipts and invoices
- Localizing numeric data for Bengali users

---

### Type Definitions

#### BanglaDigit

```typescript
type BanglaDigit = '০' | '১' | '২' | '৩' | '৪' | '৫' | '৬' | '৭' | '৮' | '৯';
```

#### BnDigitResult

```typescript
type BnDigitResult<Force extends boolean> = Force extends true ? number : string;
```

---

## 🔗 Related Packages

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-toolbox">
    <img src="https://img.shields.io/badge/Utility_Library-nhb--toolbox-blue" alt="nhb-toolbox" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-hooks">
    <img src="https://img.shields.io/badge/React_Hooks-nhb--hooks-blue" alt="nhb-hooks" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/locality-idb">
    <img src="https://img.shields.io/badge/IndexedDB_ORM-locality--idb-darkviolet" alt="locality-idb" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-scripts">
    <img src="https://img.shields.io/badge/Development_Scripts-nhb--scripts-red" alt="nhb-scripts" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-express">
    <img src="https://img.shields.io/badge/Express_Server_Scaffolder-nhb--express-orange" alt="nhb-express" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-anagram-generator">
    <img src="https://img.shields.io/badge/Anagram_Generator-nhb--anagram--generator-teal" alt="nhb-anagram-generator" />
  </a>
</div>

---

## License

This project is licensed under the [Apache License 2.0](LICENSE) with the following additional requirement:

**Additional Requirement:**

> Any fork, derivative work, or redistribution of this project must include clear attribution to [**Nazmul Hassan**](https://github.com/nazmul-nhb) in both the source code and any publicly available documentation.

You are free to use, modify, and distribute this project under the terms of the Apache 2.0 License, provided that appropriate credit is given.

---

Built with ❤️ by [**Nazmul Hassan**](https://nazmul-nhb.dev)
