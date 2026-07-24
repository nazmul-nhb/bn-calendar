# Digit Conversion Utilities

`bn-calendar` re-exports standalone digit conversion utilities via `bn-calendar/utils`. These functions allow converting between Bengali digits (`০-৯`) and Latin/Arabic digits (`0-9`).

## Import Path

Import directly from `bn-calendar/utils`:

```typescript
import { banglaToDigit, digitToBangla } from 'bn-calendar/utils';
```

::: info Standalone Utilities
These functions are sourced from [`toolbox-x`](https://www.npmjs.com/package/toolbox-x) and do not depend on the `BanglaCalendar` class.
:::

## 1. `banglaToDigit()`

Converts strings containing Bangla digits (`০-৯`) into Latin numbers or strings.

### Signature

```typescript
banglaToDigit<Force extends boolean = true>(
  bnDigit: string,
  forceNumber?: Force
): BnDigitResult<Force>
```

### Usage Examples

```typescript
// 1. Default (forceNumber = true): Returns number, strips non-digit text
console.log(banglaToDigit('১২৩'));        // 123
console.log(banglaToDigit('৪৫৬৭'));      // 4567
console.log(banglaToDigit('১২৩abc'));     // 123 (non-digits stripped)
console.log(banglaToDigit('আমার বয়স ২৫ বছর')); // 25

// 2. Preserving text (forceNumber = false): Returns string with digits converted
console.log(banglaToDigit('১২৩', false));        // "123"
console.log(banglaToDigit('১২৩abc', false));     // "123abc"
console.log(banglaToDigit('ফোন: ০১৭১২৩৪৫৬৭৮', false)); // "ফোন: 01712345678"
```

## 2. `digitToBangla()`

Converts numbers or strings containing Latin digits (`0-9`) into Bangla digit strings.

### Signature

```typescript
digitToBangla(
  digit: number | string,
  preserveNonDigit = true
): string
```

### Usage Examples

```typescript
// 1. Default (preserveNonDigit = true): Preserves surrounding text
console.log(digitToBangla(123));                  // "১২৩"
console.log(digitToBangla('4567'));               // "৪৫৬৭"
console.log(digitToBangla('Phone: 01712345678')); // "Phone: ০১৭১২৩৪৫৬৭৮"
console.log(digitToBangla('আমার বয়স 25 বছর'));       // "আমার বয়স ২৫ বছর"

// 2. Stripping non-digits (preserveNonDigit = false): Removes non-numeric text
console.log(digitToBangla('Price: $99.99', false)); // "৯৯৯৯"
console.log(digitToBangla('12ab34', false));        // "১২৩৪"
```

::: tip Reference
For detailed parameter matrices, return types, and edge cases, see the [Utilities API Reference](../utils/overview.md).
:::
