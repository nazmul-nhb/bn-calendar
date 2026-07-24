# Structure

```text
docs/
├── index.md
├── getting-started/
│   ├── installation.md
│   ├── quick-start.md
│   ├── calendar-variants.md
│   ├── pros-and-cons.md // extensive api and lacks time handling, in future separate class or plugin could be implemented
│   └── formatting.md
│
├── guide/
│   ├── creating-dates.md
│   ├── conversion.md
│   ├── manipulation.md
│   ├── localization.md
│   ├── utilities.md
│   └── examples.md
│
├── api/
│   ├── constructor.md
│   ├── properties.md
│   ├── formatting.md
│   ├── getters.md
│   ├── manipulation.md
│   ├── serialization.md
│   ├── validation.md
│   ├── symbols.md
│   ├── aliases.md
│   └── types.md
│
├── utils/
│   ├── overview.md
│   ├── bangla-to-digit.md
│   └── digit-to-bangla.md
│
├── examples/
│   ├── basic.md
│   ├── conversion.md
│   ├── formatting.md
│   └── calculations.md
│
├── changelog.md // I will handle it later just create placeholder page
└── license.md
```

---

## constructor.md

Only constructor overloads.

```text
Constructor

Signatures

Parameters

Behavior

Examples
```

---

## properties.md

```text
variant
year
month
date
gregorian
weekDay
isoWeekDay
```

---

## formatting.md

These naturally belong together.

```text
format()

toString()

toStringEn()

getMonthName()

getDayName()

getSeasonName()
```

They're all presentation APIs.

---

## manipulation.md

```text
addDays()

addWeeks()

addMonths()

addYears()

startOfMonth()

endOfMonth()

startOfYear()

endOfYear()

daysInMonth()

isLeapYear()
```

These all modify or inspect dates.

---

## serialization.md

```text
toDate()

toJSON()

valueOf()
```

Everything related to conversion.

---

## validation.md

```text
isBanglaYear()

isBanglaYearEn()

isBanglaMonth()

isBanglaMonthEn()

isBanglaDate()

isBanglaDateEn()

isBanglaDateString()

$hasVariantConfig()
```

---

## symbols.md

```text
Symbol.toPrimitive

Symbol.toStringTag
```

---

## Utilities

Don't put these under API.

```text
utils/

overview.md

bangla-to-digit.md

digit-to-bangla.md
```

Each utility deserves its own page because they're standalone exports.

---

## Guide

This is where users actually spend time.

Instead of reading API docs they should read things like

```text
Creating dates

Formatting dates

Converting calendars

Date arithmetic

Working with Bengali digits

Calendar variants
```

Each guide page should link to the relevant API pages.

---

## Examples

Separate from Guide.

Guide teaches concepts.

Examples solve problems.

For example

```text
Convert today's date

Birthday calculator

Generate calendar

Formatting examples

Difference between variants

Working with Bengali input
```

---

## Sidebar becomes much cleaner

```text
Getting Started
  Installation
  Quick Start
  Calendar Variants

Guide
  Creating Dates
  Conversion
  Formatting
  Manipulation
  Localization

API
  Constructor
  Properties
  Formatting
  Manipulation
  Serialization
  Validation
  Symbols
  Types

Utilities
  Overview
  banglaToDigit()
  digitToBangla()

Examples
  Basic
  Conversion
  Formatting
  Calculations
```
