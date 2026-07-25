# Practical Examples

This guide provides common recipes for real-world scenarios.

## 1. Getting Today's Date in Bangla

```typescript
import { BanglaCalendar } from 'bn-calendar';

const today = new BanglaCalendar();

console.log(`আজ ${today.format('ddd, DD mmmm, YYYY বঙ্গাব্দ')}`);
// Output e.g.: "আজ শুক্রবার, ০৯ ফাল্গুন, ১৪৩২ বঙ্গাব্দ"
```

## 2. Converting User Input Date

```typescript
import { BanglaCalendar } from 'bn-calendar';
import { banglaToDigit } from 'bn-calendar/utils';

// Handling form input from a Bengali user
function processUserInput(rawInput: string) {
 // e.g. rawInput = "১৪৩০-০১-১৫" or "2023-04-28"
 const calendar = new BanglaCalendar(rawInput);
 
 return {
  banglaDate: calendar.toJSON(),
  gregorianDate: calendar.toDate().toISOString().split('T')[0],
  formatted: calendar.format('DD mmmm YYYY'),
 };
}

console.log(processUserInput('১৪৩০-০১-১৫'));
// { banglaDate: '১৪৩০-০১-১৫', gregorianDate: '2023-04-28', formatted: '১৫ বৈশাখ ১৪৩০' }
```

## 3. Calculating Pohela Boishakh (Bangla New Year)

Pohela Boishakh is always 1st Boishakh (`১ বৈশাখ`). You can find the Gregorian date for Pohela Boishakh in any Bangla year:

```typescript
function getPohelaBoishakhGregorianDate(banglaYear: number) {
 const boishakh1 = new BanglaCalendar(banglaYear, 1, 1);
 return boishakh1.toDate();
}

console.log(getPohelaBoishakhGregorianDate(1431).toDateString());
// Output: Sun Apr 14 2024
```

## 4. Month Grid Generator for Calendar UI

Generate an array of days for rendering a full month view component in a web frontend:

```typescript
function generateMonthDays(year: number, month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) {
 const start = new BanglaCalendar(year, month, 1);
 const totalDays = start.daysInMonth();
 
 const days = [];
 for (let d = 1; d <= totalDays; d++) {
  const currentDay = new BanglaCalendar(year, month, d);
  days.push({
   banglaDay: currentDay.date.bn,
   latinDay: currentDay.date.en,
   weekDayName: currentDay.getDayName(),
   gregorianDate: currentDay.gregorian,
  });
 }
 
 return days;
}

const boishakhDays = generateMonthDays(1430, 1);
console.log(`Boishakh 1430 has ${boishakhDays.length} days`);
```

::: tip More Examples
Check out dedicated standalone examples:

- [Basic Usage Examples](../examples/)
- [Conversion Examples](../examples/conversion)
- [Formatting Examples](../examples/formatting)
- [Calculations Examples](../examples/calculations)
:::
