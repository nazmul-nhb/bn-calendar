# Pros & Cons

Understanding the design tradeoffs of `bn-calendar` will help you determine how best to integrate it into your application.

## Pros

- **Comprehensive Feature Set**: Provides end-to-end functionality including creation, parsing, date arithmetic, month boundary calculations, and token formatting.
- **Multiple Official Variants**: Seamless support for both `'revised-2019'` (Bangladesh official) and `'revised-1966'` standards.
- **Dual Locale & Language Support**: Built-in translation for weekday, month, and season names in both Bengali (`bn`) and English (`en`).
- **Standalone Digit Conversion Utilities**: Independent digit parsing/formatting functions (`banglaToDigit`, `digitToBangla`) for application-wide use.
- **Zero External Dependencies**: Self-contained library ensuring small bundle footprint and zero supply-chain vulnerabilities.
- **Full TypeScript Type Safety**: Generics, literal types, and strict range types (`NumberRange<1, 12>`, `BanglaYear`, `BanglaMonth`, `BanglaDate`).
- **Native JavaScript Integration**: Implements `valueOf()`, `toJSON()`, `[Symbol.toPrimitive]`, and `[Symbol.toStringTag]` for seamless operation in string/number expressions and `JSON.stringify()`.

## Limitations & Considerations

- **Date-Only Focus (No Time-of-Day Handling)**:
  `BanglaCalendar` normalizes all time components to midnight UTC (`00:00:00.000Z`). It does not store or process hours, minutes, seconds, or timezone offsets for time-of-day calculations.
- **Extensive Surface Area**:
  The `BanglaCalendar` class combines date representation, manipulation, formatting, and validation into a single class. While convenient for general use, lightweight utilities may pull in the full class if not using subpath exports.

::: note Future Roadmap Considerations
In future releases, extended time handling or modular plugins (such as date-time formatters or time-zone converters) may be introduced as separate classes or extension plugins to maintain a lightweight core.
:::
