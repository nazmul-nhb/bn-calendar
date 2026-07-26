# Conversion Examples

Examples showing how to convert back and forth between Gregorian and Bengali calendar dates.

## 1. Gregorian to Bangla Date Conversion

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

// Converting ISO date string
const date1 = new BanglaCalendar('2024-04-14');
console.log(date1.toJSON()); // "১৪৩১-০১-০১" (Pohela Boishakh 1431)

// Converting native JavaScript Date
const now = new Date();
const date2 = new BanglaCalendar(now);
console.log(`Bangla date today: ${date2.format('DD mmmm YYYY')}`);
```

## 2. Bangla Date to Gregorian `Date` Conversion

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

const bnDate = new BanglaCalendar('১৪৩০', '১', '১');

// Convert to native Date object
const jsDate = bnDate.toDate();
console.log(jsDate.toISOString()); // "2023-04-14T00:00:00.000Z"

// Access individual Gregorian parts
console.log(`Year: ${bnDate.gregorian.year}, Month: ${bnDate.gregorian.month}, Date: ${bnDate.gregorian.date}`);
// Output: "Year: 2023, Month: 4, Date: 14"
```

## 3. Timestamp Integration

```typescript twoslash
import { BanglaCalendar } from 'bn-calendar';

const bnCal = new BanglaCalendar('১৪৩০', '১', '১');

// Get millisecond timestamp
const ts = bnCal.valueOf();
console.log(ts); // 1681430400000

// Re-instantiate from timestamp
const recreated = new BanglaCalendar(ts);
console.log(recreated.toJSON()); // "১৪৩০-০১-০১"
```
