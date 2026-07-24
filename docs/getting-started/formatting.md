# Date Formatting

`BanglaCalendar` offers flexible formatting capabilities to display dates in Bengali or Latin scripts with full token customization.

## Standard Formats

Out of the box, `BanglaCalendar` provides three convenient ways to format dates:

```typescript
import { BanglaCalendar } from 'bn-calendar';

const date = new BanglaCalendar('2023-04-14');

// 1. toString(): Bengali format
console.log(date.toString());
// Output: "শুক্রবার, ১ বৈশাখ, ১৪৩০ [গ্রীষ্ম]"

// 2. toStringEn(): English/Latin format
console.log(date.toStringEn());
// Output: "Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"

// 3. toJSON(): Standard ISO-like string with Bangla digits
console.log(date.toJSON());
// Output: "১৪৩০-০১-০১"
```

## Custom Formatting with `format()`

The `format()` method lets you assemble custom date representations using template tokens.

```typescript
const date = new BanglaCalendar('2023-04-14');

// Default format: 'ddd, DD mmmm (SS), YYYY বঙ্গাব্দ'
console.log(date.format()); 
// Output: "শুক্রবার, ০১ বৈশাখ (গ্রীষ্মকাল), ১৪৩০ বঙ্গাব্দ"

// Custom format patterns
console.log(date.format('YYYY-MM-DD'));       // "১৪৩০-০১-০১"
console.log(date.format('mmmm DD, YYYY'));    // "বৈশাখ ০১, ১৪৩০"
console.log(date.format('ddd, DD mmm YYYY'));  // "শুক্রবার, ০১ বৈ  ১৪৩০"
```

## Escaping Literal Text

Wrap literal text inside square brackets (`[...]`) to prevent characters from being interpreted as format tokens:

```typescript
console.log(date.format('[আজ] ddd'));        // "আজ শুক্রবার"
console.log(date.format('[সাল:] YYYY বঙ্গাব্দ')); // "সাল: ১৪৩০ বঙ্গাব্দ"
```

::: tip Reference
For a complete listing of all format tokens (year, month, day, weekday, season), see the [API Reference for format()](../api/formatting.md).
:::
