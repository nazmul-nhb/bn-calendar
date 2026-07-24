# banglaToDigit()

Converts strings containing Bangla digits (`০-৯`) into Latin numbers or strings.

## Signature

```typescript
banglaToDigit<Force extends boolean = true>(
  bnDigit: string,
  forceNumber?: Force
): BnDigitResult<Force>
```

## Parameters

- `bnDigit` (`string`): A string containing Bangla digits (`০-৯`).
- `forceNumber` (`boolean`):
  - `true` (default): Returns a `number`. Non-digit characters are stripped.
  - `false`: Returns a `string`. Non-digit characters are preserved.

## Return Value

- When `forceNumber = true`: `number` (or `0` / `NaN` if no valid digits exist).
- When `forceNumber = false`: `string` with converted digits.

## Behavior Matrix

| Input Condition             | `forceNumber = true` (Default)          | `forceNumber = false`                          |
| --------------------------- | --------------------------------------- | ---------------------------------------------- |
| Contains only Bangla digits | Returns converted `number` (e.g. `123`) | Returns converted `string` (e.g. `"123"`)      |
| Contains mixed characters   | Returns `number` (digits extracted)     | Returns `string` (digits converted, text kept) |
| Empty string (`""`)         | Returns `NaN`                           | Returns empty string (`""`)                    |
| No digits in string         | Returns `0` or `NaN`                    | Returns original string                        |

## Code Examples

```typescript
import { banglaToDigit } from 'bn-calendar/utils';

// 1. Default Behavior (forceNumber = true)
console.log(banglaToDigit('১২৩'));        // 123 (number)
console.log(banglaToDigit('৪৫৬৭'));      // 4567 (number)
console.log(banglaToDigit('১২৩abc'));     // 123 (non-digits stripped)
console.log(banglaToDigit('abc'));        // 0 (no digits)
console.log(banglaToDigit(''));           // NaN

// 2. Preserving Text (forceNumber = false)
console.log(banglaToDigit('১২৩', false));        // "123"
console.log(banglaToDigit('১২৩abc', false));     // "123abc"
console.log(banglaToDigit('৪৫৬৭', false));       // "4567"
console.log(banglaToDigit('abc', false));        // "abc"
console.log(banglaToDigit('', false));           // ""

// 3. Real-world strings
console.log(banglaToDigit('আমার বয়স ২৫ বছর'));        // 25
console.log(banglaToDigit('ফোন: ০১৭১২৩৪৫৬৭৮', false)); // "ফোন: 01712345678"
```

## Type Definitions

```typescript
type BanglaDigit = '০' | '১' | '২' | '৩' | '৪' | '৫' | '৬' | '৭' | '৮' | '৯';

type BnDigitResult<Force extends boolean> = Force extends true ? number : string;
```
