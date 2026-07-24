# Validation API

Static type guards and validation methods exposed on the `BanglaCalendar` class, as well as instance validation helpers.

## Static Type Guards

### 1. `isBanglaYear()`

```typescript
static isBanglaYear(value: unknown): value is BanglaYear
```

Checks whether a value is a valid Bangla year in Bangla digits (`০-৯৯৯৯`).

```typescript
BanglaCalendar.isBanglaYear('১৪৩০'); // true
BanglaCalendar.isBanglaYear('১০০০০'); // false (too long)
BanglaCalendar.isBanglaYear('1430');  // false (Latin digits)
```

---

### 2. `isBanglaYearEn()`

```typescript
static isBanglaYearEn(value: number): boolean
```

Checks whether a number is a valid Bangla year in Latin digits (`0-9999`).

```typescript
BanglaCalendar.isBanglaYearEn(1430);  // true
BanglaCalendar.isBanglaYearEn(10000); // false
BanglaCalendar.isBanglaYearEn(-1);    // false
```

---

### 3. `isBanglaMonth()`

```typescript
static isBanglaMonth(value: unknown): value is BanglaMonth
```

Checks whether a value is a valid Bangla month string in Bangla digits (`১-১২`).

```typescript
BanglaCalendar.isBanglaMonth('১');  // true
BanglaCalendar.isBanglaMonth('১২'); // true
BanglaCalendar.isBanglaMonth('১৩'); // false
```

---

### 4. `isBanglaMonthEn()`

```typescript
static isBanglaMonthEn(value: unknown): value is NumberRange<1, 12>
```

Checks whether a value is a valid Bangla month number in Latin digits (`1-12`).

```typescript
BanglaCalendar.isBanglaMonthEn(1);  // true
BanglaCalendar.isBanglaMonthEn(12); // true
BanglaCalendar.isBanglaMonthEn(13); // false
```

---

### 5. `isBanglaDate()`

```typescript
static isBanglaDate(value: unknown): value is BanglaDate
```

Checks whether a value is a valid day of month in Bangla digits (`১-৩১`).

```typescript
BanglaCalendar.isBanglaDate('১');   // true
BanglaCalendar.isBanglaDate('৩১');  // true
BanglaCalendar.isBanglaDate('৩২');  // false
```

---

### 6. `isBanglaDateEn()`

```typescript
static isBanglaDateEn(value: unknown): value is NumberRange<1, 31>
```

Checks whether a value is a valid day of month in Latin digits (`1-31`).

```typescript
BanglaCalendar.isBanglaDateEn(1);   // true
BanglaCalendar.isBanglaDateEn(31);  // true
BanglaCalendar.isBanglaDateEn(32);  // false
```

---

### 7. `isBanglaDateString()`

```typescript
static isBanglaDateString(value: unknown): value is string
```

Checks whether a string follows the Bangla date pattern (`YYYY-MM-DD` in Bangla digits).

```typescript
BanglaCalendar.isBanglaDateString('১৪৩০-০১-০১'); // true
BanglaCalendar.isBanglaDateString('1430-01-01'); // false (Latin digits)
BanglaCalendar.isBanglaDateString('১৪৩০-১৩-০১'); // false (invalid month)
```

---

## Instance Methods

### `$hasVariantConfig()`

```typescript
$hasVariantConfig(value: unknown): value is { variant: BnCalendarVariant }
```

Checks if a given value is a configuration object containing a valid calendar `variant`.

```typescript
const bnCal = new BanglaCalendar();

bnCal.$hasVariantConfig({ variant: 'revised-2019' }); // true
bnCal.$hasVariantConfig({ variant: 'revised-1966' }); // true
bnCal.$hasVariantConfig({ variant: 'invalid' });      // false
bnCal.$hasVariantConfig({});                          // false
```
