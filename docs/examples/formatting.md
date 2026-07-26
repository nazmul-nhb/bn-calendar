# Formatting Examples

Examples illustrating custom date formats for headers, UI badges, and documents.

## 1. Full Bangla Date Header

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('2023-04-14');

console.log(date.format('ddd, DD mmmm (SS), YYYY বঙ্গাব্দ'));
// Output: "শুক্রবার, ০১ বৈশাখ (গ্রীষ্মকাল), ১৪৩০ বঙ্গাব্দ"
```

## 2. Compact Numeric Date

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('2023-04-14');

console.log(date.format('YYYY/MM/DD'));
// Output: "১৪৩০/০১/০১"
```

## 3. Escaping Literal Text in Labels

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('2023-04-14');

console.log(date.format('[তারিখ:] DD mmmm, [অব্দ:] YYYY'));
// Output: "তারিখ: ০১ বৈশাখ, অব্দ: ১৪৩০"
```

## 4. English Localized Formatting

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('2023-04-14');

console.log(date.toStringEn());
// Output: "Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"
```
