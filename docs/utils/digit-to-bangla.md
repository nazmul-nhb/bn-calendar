# digitToBangla()

Converts numbers or strings containing Latin digits (`0-9`) into Bangla digit strings.

## Signature

```typescript
digitToBangla(
  digit: number | string,
  preserveNonDigit = true
): string
```

## Parameters

- `digit` (`number | string`): A number or string containing Latin digits (`0-9`).
- `preserveNonDigit` (`boolean`):
  - `true` (default): Preserves non-digit characters in output.
  - `false`: Strips all non-numeric characters from output.

## Return Value

`string` — Converted Bangla digit string (or empty string for invalid/empty input).

## Behavior Matrix

| Input Condition              | `preserveNonDigit = true` (Default)  | `preserveNonDigit = false`           |
| ---------------------------- | ------------------------------------ | ------------------------------------ |
| Number                       | Returns Bangla digits (e.g. `"১২৩"`) | Returns Bangla digits (e.g. `"১২৩"`) |
| String with only digits      | Returns Bangla digits                | Returns Bangla digits                |
| String with mixed characters | Converts digits, preserves text      | Converts digits, strips text         |
| Empty string (`""`)          | Returns empty string (`""`)          | Returns empty string (`""`)          |
| Non-numeric string           | Returns original string              | Returns empty string (`""`)          |

## Code Examples

```typescript
import { digitToBangla } from 'bn-calendar/utils';

// 1. Default Behavior (preserveNonDigit = true)
console.log(digitToBangla(123));                  // "১২৩"
console.log(digitToBangla(4567));                 // "৪৫৬৭"
console.log(digitToBangla('123'));                // "১২৩"
console.log(digitToBangla('12ab34'));             // "১২ab৩৪"
console.log(digitToBangla('abc'));                // "abc"
console.log(digitToBangla(''));                   // ""

// 2. Stripping non-digits (preserveNonDigit = false)
console.log(digitToBangla('12ab34', false));      // "১২৩৪"
console.log(digitToBangla('abc', false));         // ""
console.log(digitToBangla('১২৩', false));         // "১২৩"
console.log(digitToBangla('', false));            // ""

// 3. Real-world strings
console.log(digitToBangla('Phone: 01712345678')); // "Phone: ০১৭১২৩৪৫৬৭৮"
console.log(digitToBangla('আমার বয়স 25 বছর'));        // "আমার বয়স ২৫ বছর"
console.log(digitToBangla('Price: $99.99', false)); // "৯৯৯৯"
```
