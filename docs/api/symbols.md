<!-- markdownlint-disable-file MD024 -->
# Symbol Methods

`BanglaCalendar` implements standard JavaScript well-known symbols for object coercions and string tags.

## 1. `[Symbol.toPrimitive]`

Enables native JavaScript primitive conversion when an instance is used in arithmetic or string operations.

### Signature

```typescript
[Symbol.toPrimitive](hint: string): string | number
```

### Parameters

- `hint`: Primitive conversion hint passed by JS engine — `'number'`, `'string'`, or `'default'`.

### Behavior

- When `hint === 'number'`: Returns the Unix timestamp (equivalent to `valueOf()`).
- When `hint === 'string'` or `'default'`: Returns the ISO-like Bangla date string (equivalent to `toJSON()`).

### Code Examples

```typescript
import { BanglaCalendar } from 'bn-calendar';

const bnCal = new BanglaCalendar('১৪৩০', '১', '১');

// 1. Implicit String Context
String(bnCal); // "১৪৩০-০১-০১"
`${bnCal}`;    // "১৪৩০-০১-০১"

// 2. Implicit Numeric Context
+bnCal;        // 1681430400000
bnCal * 1;     // 1681430400000

// 3. Explicit Symbol Call
bnCal[Symbol.toPrimitive]('number');  // 1681430400000
bnCal[Symbol.toPrimitive]('string');  // "১৪৩০-০১-০১"
bnCal[Symbol.toPrimitive]('default'); // "১৪৩০-০১-০১"
```

---

## 2. `[Symbol.toStringTag]`

Provides a custom string tag for `Object.prototype.toString()` and DevTools console inspection.

### Signature

```typescript
get [Symbol.toStringTag](): string
```

### Return Value

Returns the ISO-like Bangla date string (`"YYYY-MM-DD"` in Bangla digits, same as `toJSON()`).

### Code Examples

```typescript
const bnCal = new BanglaCalendar('১৪৩০', '১', '১');

// Node.js / Browser console representation:
console.log(bnCal);
// BanglaCalendar [১৪৩০-০১-০১] { ... }

// Custom toStringTag inspection:
Object.prototype.toString.call(bnCal); // "[object ১৪৩০-০১-০১]"
console.log(bnCal[Symbol.toStringTag]); // "১৪৩০-০১-০১"
```
