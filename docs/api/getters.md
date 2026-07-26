<!-- markdownlint-disable-file MD024 -->
# Getters Methods

Methods for retrieving localized names for month, day of week, and season.

## Method Overview

| Method                              | Description                                 |
| ----------------------------------- | ------------------------------------------- |
| [`getMonthName()`](#getmonthname)   | Returns month name in Bengali or English.   |
| [`getDayName()`](#getdayname)       | Returns weekday name in Bengali or English. |
| [`getSeasonName()`](#getseasonname) | Returns season name in Bengali or English.  |

---

## Details & Examples

### `getMonthName()`

Gets the Bengali month name for the current instance.

```typescript
getMonthName<Locale extends $BnEn = 'bn'>(locale?: Locale): BanglaMonthName<Locale>
```

#### Parameters

- `locale`: `'bn'` for Bengali script (default) or `'en'` for English transliteration.

#### Return Value

Month name string typed according to the locale.

#### Example

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('2023-04-14');

console.log(date.getMonthName());     // "বৈশাখ" (Type: "বৈশাখ")
console.log(date.getMonthName('en')); // "Boishakh" (Type: "Boishakh")
```

---

### `getDayName()`

Gets the weekday name for the current instance.

```typescript
getDayName<Locale extends $BnEn = 'bn'>(locale?: Locale): BanglaDayName<Locale>
```

#### Parameters

- `locale`: `'bn'` for Bengali script (default) or `'en'` for English transliteration with English weekday in parentheses.

#### Return Value

Weekday name string typed according to the locale.

#### Example

```typescript
const date = new BanglaCalendar('2023-04-14'); // Friday

console.log(date.getDayName());     // "শুক্রবার"
console.log(date.getDayName('en')); // "Shukrobar (Friday)"
```

---

### `getSeasonName()`

Gets the season name for the current instance.

```typescript
getSeasonName<Locale extends $BnEn = 'bn'>(locale?: Locale): BanglaSeasonName<Locale>
```

#### Parameters

- `locale`: `'bn'` for Bengali script (default) or `'en'` for English transliteration with English season name in parentheses.

#### Return Value

Season name string typed according to the locale.

#### Example

```typescript
const date = new BanglaCalendar('2023-04-14');

console.log(date.getSeasonName());     // "গ্রীষ্ম"
console.log(date.getSeasonName('en')); // "Grisma (Summer)"
```
