# Type Definitions

Comprehensive reference of TypeScript types and interfaces exported by `bn-calendar`.

## Core Type Reference

### `$BnEn`

```typescript
type $BnEn = 'bn' | 'en'
```

Supported locale codes for Bangla calendar string outputs.

---

### `BanglaDigit`

```typescript
type BanglaDigit = '০' | '১' | '২' | '৩' | '৪' | '৫' | '৬' | '৭' | '৮' | '৯';
```

Represents Bangla digits from `'০'` to `'৯'`.

---

### `BanglaYear`

```typescript
type BanglaYear =
  | BanglaDigit
  | `${$BnOnes}${BanglaDigit}`
  | `${$BnOnes}${BanglaDigit}${BanglaDigit}`
  | Repeat<BanglaDigit, 4>
```

Bangla year represented in Bangla digits (`০-৯৯৯৯`).

---

### `BanglaMonth`

```typescript
type BanglaMonth = $BnOnes | $BnOnesPadded | '১০' | '১১' | '১২'
```

Bangla month represented in Bangla digits (`১-১২` or `০১-১২`).

---

### `BanglaDate`

```typescript
type BanglaDate =
  | $BnOnes
  | $BnOnesPadded
  | `১${BanglaDigit}`
  | `২${BanglaDigit}`
  | '৩০'
  | '৩১'
```

Bangla day of month represented in Bangla digits (`১-৩১` or `০১-৩১`).

---

### `BnCalendarVariant`

```typescript
type BnCalendarVariant = 'revised-2019' | 'revised-1966'
```

Supported calendar system variants.

---

### `BnCalendarConfig`

```typescript
interface BnCalendarConfig {
  /** Calendar calculation variant to use. Defaults to `'revised-2019'`. */
  variant?: BnCalendarVariant;
}
```

Configuration object passed to the `BanglaCalendar` constructor.

---

### `BanglaDateFormat`

```typescript
type BanglaDateFormat = LooseLiteral<DateFormatToken | DateWithSeasonToken>
```

Type-safe format token pattern strings accepted by `format()`.

---

### `BanglaDayName`

```typescript
type BanglaDayName<Locale extends $BnEn = 'bn'> = (typeof BN_DAYS)[number][Locale]
```

Union of valid weekday names for given locale.

---

### `BanglaMonthName`

```typescript
type BanglaMonthName<Locale extends $BnEn = 'bn'> = (typeof BN_MONTHS)[number][Locale]
```

Union of valid month names for given locale.

---

### `BanglaSeasonName`

```typescript
type BanglaSeasonName<Locale extends $BnEn = 'bn'> = (typeof BN_SEASONS)[number][Locale]
```

Union of valid season names for given locale.
