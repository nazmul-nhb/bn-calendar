# Design Philosophy

Understanding the design tradeoffs of `bn-calendar` will help you determine how best to integrate it into your application.

## Core Principles

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

::: tip Need Full Date-Time Support?

`bn-calendar` is intentionally designed as a **date-only** library. It focuses on Bangla calendar conversion, manipulation, formatting, and validation while keeping the core lightweight, dependency-free, and easy to integrate.

If your application requires **date-time operations**, **time zones**, **durations**, or other advanced features, use the dedicated date-time library [`chronos-date`](https://chronos.nazmul-nhb.dev) together with the [`banglaPlugin`](https://chronos.nazmul-nhb.dev/docs/plugins/bangla-plugin). When used with the [`Chronos`](https://toolbox.nazmul-nhb.dev/docs/classes/Chronos) class, they provide a complete Bangla date-time solution with advanced utilities.

- **`bn-calendar`** → Dedicated Bangla calendar conversion, manipulation, formatting, and validation for **calendar dates**.
- [**`Chronos`**](https://toolbox.nazmul-nhb.dev/docs/classes/Chronos) + [**`banglaPlugin`**](https://chronos.nazmul-nhb.dev/docs/plugins/bangla-plugin) → Complete Bangla date-time management with support for calendar conversion, time, time zones, durations, and other advanced temporal operations.

To preserve a lightweight core and excellent tree-shaking, future ecosystem enhancements will continue to be delivered as **optional extensions or companion packages** rather than expanding the scope of `bn-calendar` itself.

:::
