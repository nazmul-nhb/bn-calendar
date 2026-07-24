# Localization

`BanglaCalendar` comes with built-in localization support for Bengali (`bn`) and English (`en`) script representations.

## Locale Option (`'bn'` vs `'en'`)

By default, getter methods like `getMonthName()`, `getDayName()`, and `getSeasonName()` return Bengali strings (`'bn'`). Passing `'en'` switches the output to English transliterations/translations.

### 1. Month Names (`getMonthName`)

| Month # | `'bn'` (Default) | `'en'` |
| ------- | ---------------- | ------ |
| 1 | বৈশাখ | Boishakh |
| 2 | জ্যৈষ্ঠ | Joishtho |
| 3 | আষাঢ় | Asharh |
| 4 | শ্রাবণ | Srabon |
| 5 | ভাদ্র | Bhadro |
| 6 | আশ্বিন | Ashwin |
| 7 | কার্তিক | Kartik |
| 8 | অগ্রহায়ণ | Ogrohayon |
| 9 | পৌষ | Poush |
| 10 | মাঘ | Magh |
| 11 | ফাল্গুন | Falgun |
| 12 | চৈত্র | Choitro |

```typescript
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('2023-04-14');

console.log(date.getMonthName());     // "বৈশাখ"
console.log(date.getMonthName('en')); // "Boishakh"
```

### 2. Day Names (`getDayName`)

| Day # | `'bn'` (Default) | `'en'` | Short (`'bn'`) |
| ----- | ---------------- | ------ | -------------- |
| 0 | রবিবার | Robibar (Sunday) | র |
| 1 | সোমবার | Shombar (Monday) | সো |
| 2 | মঙ্গলবার | Mongolbar (Tuesday) | ম |
| 3 | বুধবার | Budhbar (Wednesday) | বু |
| 4 | বৃহস্পতিবার | Brihoshpotibar (Thursday) | বৃ |
| 5 | শুক্রবার | Shukrobar (Friday) | শু |
| 6 | শনিবার | Shonibar (Saturday) | শ |

```typescript
const date = new BanglaCalendar('2023-04-14'); // Friday

console.log(date.getDayName());     // "শুক্রবার"
console.log(date.getDayName('en')); // "Shukrobar (Friday)"
```

### 3. Season Names (`getSeasonName`)

| Season Name (`'bn'`) | Season Name (`'en'`) | Months Covered |
| -------------------- | -------------------- | -------------- |
| গ্রীষ্ম | Grisma (Summer) | Boishakh - Joishtho |
| বর্ষা | Barsa (Monsoon) | Asharh - Srabon |
| শরৎ | Sarat (Autumn) | Bhadro - Ashwin |
| হেমন্ত | Hemanta (Late-Autumn) | Kartik - Ogrohayon |
| শীত | Shhit (Winter) | Poush - Magh |
| বসন্ত | Basanta (Spring) | Falgun - Choitro |

```typescript
const date = new BanglaCalendar('2023-04-14');

console.log(date.getSeasonName());     // "গ্রীষ্ম"
console.log(date.getSeasonName('en')); // "Grisma (Summer)"
```

## String Representations

You can quickly grab localized full string summaries using `toString()` and `toStringEn()`:

```typescript
const date = new BanglaCalendar('2023-04-14');

// Bengali locale string representation
console.log(date.toString());
// "শুক্রবার, ১ বৈশাখ, ১৪৩০ [গ্রীষ্ম]"

// English locale string representation
console.log(date.toStringEn());
// "Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"
```

::: tip Related API
- [Getters API Reference](../api/getters.md)
- [Formatting API Reference](../api/formatting.md)
:::
