# Serialization API

Methods for converting `BanglaCalendar` instances to JavaScript native `Date` objects, ISO-like JSON strings, and numeric timestamps.

## Method Overview

| Method | Signature | Return Type | Description |
| ------ | --------- | ----------- | ----------- |
| [`toDate()`](#todate) | `toDate(): Date` | `Date` | Converts Bangla date to equivalent native JavaScript Gregorian `Date` object. |
| [`toJSON()`](#tojson) | `toJSON(): string` | `string` | Serializes instance as `"YYYY-MM-DD"` string in Bangla digits. |
| [`valueOf()`](#valueof) | `valueOf(): number` | `number` | Returns numeric Unix timestamp in milliseconds. |

---

## Details & Examples

### `toDate()`

Converts the Bangla calendar date to a JavaScript native `Date` object in UTC midnight (`00:00:00.000Z`).

```typescript
toDate(): Date
```

#### Example

```typescript
import { BanglaCalendar } from 'bn-calendar';

const bnDate = new BanglaCalendar('১৪৩০', '১', '১');
const jsDate = bnDate.toDate();

console.log(jsDate instanceof Date); // true
console.log(jsDate.toISOString());   // "2023-04-14T00:00:00.000Z"
```

---

### `toJSON()`

Returns a standard string representation of the Bangla date in ISO-like format (`YYYY-MM-DD` with zero-padded Bangla digits).

```typescript
toJSON(): string
```

#### Remarks

- Automatically invoked by `JSON.stringify()`.
- Format: `"বছর-মাস-দিন"` in Bangla digits (e.g., `"১৪৩০-০১-০১"`).

#### Example

```typescript
const bnDate = new BanglaCalendar('2023-04-14');

console.log(bnDate.toJSON()); // "১৪৩০-০১-০১"

const payload = { event: 'Pohela Boishakh', date: bnDate };
console.log(JSON.stringify(payload));
// '{"event":"Pohela Boishakh","date":"১৪৩০-০১-০১"}'
```

---

### `valueOf()`

Gets the numeric Unix timestamp in milliseconds for the Gregorian date equivalent of the current Bangla date.

```typescript
valueOf(): number
```

#### Remarks

- Automatically called by JavaScript engine in numeric contexts (e.g. arithmetic operators `+`, `-`, `*`).
- Equivalent to `toDate().getTime()`.

#### Example

```typescript
const date1 = new BanglaCalendar('১৪৩০', '১', '১');
const date2 = new BanglaCalendar('১৪৩০', '১', '৮');

const ts1 = date1.valueOf(); // 1681430400000
const diffMs = date2 - date1; // 604800000 (7 days in ms)

console.log(diffMs / (1000 * 60 * 60 * 24)); // 7 days
```
