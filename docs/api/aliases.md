# Class Aliases

To accommodate different naming conventions and developer preferences, `bn-calendar` exports two official class aliases alongside `BanglaCalendar`: **`BnCalendar`** and **`Bongabdo`**.

## Exported Aliases

```typescript
import { BanglaCalendar, BnCalendar, Bongabdo } from 'bn-calendar';
```

| Export Name      | Description                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| `BanglaCalendar` | Primary export class name.                                                             |
| `BnCalendar`     | Shorthand alias. Identical reference to `BanglaCalendar`.                              |
| `Bongabdo`       | Traditional Bengali calendar name (বঙ্গাব্দ). Identical reference to `BanglaCalendar`. |

## Code Examples

```typescript
import { BnCalendar, Bongabdo } from 'bn-calendar';

// Using BnCalendar shorthand alias
const cal1 = new BnCalendar('১৪৩০', '১', '১');
console.log(cal1.toString()); 
// "শুক্রবার, ১ বৈশাখ, ১৪৩০ [গ্রীষ্ম]"

// Using Bongabdo alias
const cal2 = new Bongabdo('2023-04-14');
console.log(cal2.toJSON()); 
// "১৪৩০-০১-০১"

// Equality verification
console.log(BnCalendar === Bongabdo); // true
```
