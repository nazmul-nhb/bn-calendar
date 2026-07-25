# Bangla Calendar

> Comprehensive Bengali calendar system library built for any JavaScript and TypeScript environment.

[![Bangla Calendar](https://raw.githubusercontent.com/nazmul-nhb/bn-calendar/refs/heads/main/docs/public/bn-calendar.png)](https://bncal.nazmul-nhb.dev/)

<p>
  <!-- Package Info -->
  <a href="https://www.npmjs.com/package/bn-calendar" aria-label="NPM Downloads">
    <img src="https://img.shields.io/npm/dm/bn-calendar.svg?label=DOWNLOADS&style=flat&color=red&logo=npm" alt="Downloads" />
  </a>
  <a href="https://www.npmjs.com/package/bn-calendar" aria-label="Latest Version">
    <img src="https://img.shields.io/npm/v/bn-calendar.svg?label=NPM&style=flat&color=teal&logo=npm" alt="Latest Version" />
  </a>
  <a href="https://bundlejs.com/?q=bn-calendar" aria-label="Bundle Size">
    <img src="https://img.shields.io/bundlejs/size/bn-calendar?label=Bundle%20Size&style=flat&color=blue&logo=npm" alt="Bundle Size" />
  </a>

  <!-- Project Metadata -->
  <a href="https://github.com/nazmul-nhb/bn-calendar" aria-label="TypeScript">
    <img src="https://img.shields.io/badge/BUILT%20with-TypeScript-3178C6?style=flat&logo=typescript&logoColor=blue" alt="Built with TypeScript" />
  </a>
  <a href="https://github.com/nazmul-nhb/bn-calendar/actions" aria-label="Build Status">
    <img src="https://img.shields.io/github/actions/workflow/status/nazmul-nhb/bn-calendar/publish.yml?label=BUILD%20%26%20PUBLISH&style=flat&logo=github" alt="Build Status" />
  </a>
  <a href="https://github.com/nazmul-nhb/bn-calendar" aria-label="Project Status">
    <img src="https://img.shields.io/badge/STATUS-maintained-brightgreen?style=flat&logo=git" alt="Maintained" />
  </a>
  <a href="https://github.com/nazmul-nhb/bn-calendar/commits/main" aria-label="Last Commit">
    <img src="https://img.shields.io/github/last-commit/nazmul-nhb/bn-calendar?style=flat&label=LAST%20COMMIT&logo=git" alt="Last Commit" />
  </a>

  <!-- GitHub Meta -->
  <a href="https://github.com/nazmul-nhb/bn-calendar/stargazers" aria-label="GitHub Stars">
    <img src="https://img.shields.io/github/stars/nazmul-nhb/bn-calendar?style=flat&label=STARS&logo=github" alt="GitHub stars" />
  </a>
  <a href="https://github.com/nazmul-nhb/bn-calendar/issues" aria-label="Open Issues">
    <img src="https://img.shields.io/github/issues/nazmul-nhb/bn-calendar?style=flat&label=ISSUES&logo=github" alt="Open Issues" />
  </a>
  <a href="https://github.com/nazmul-nhb/bn-calendar/pulls" aria-label="Open Pull Requests">
    <img src="https://img.shields.io/github/issues-pr/nazmul-nhb/bn-calendar?style=flat&label=PRs&logo=github" alt="Pull Requests" />
  </a>

  <!-- License Info -->
  <a href="https://www.npmjs.com/package/bn-calendar" aria-label="License">
    <img src="https://img.shields.io/npm/l/bn-calendar.svg?label=LICENSE&style=flat&color=orange&logo=open-source-initiative" alt="License" />
  </a>
</p>

<!-- markdownlint-disable-file MD024 -->

`bn-calendar` is a comprehensive Bengali calendar system library built for any JavaScript and TypeScript environment. It supports creation, manipulation, and conversion between Bengali and Gregorian calendars with full support for both `'revised-2019'` (default) and `'revised-1966'` variants.

## Install

### NPM

```bash
npm i bn-calendar
```

### PNPM

```bash
pnpm add bn-calendar
```

### YARN

```bash
yarn add bn-calendar
```

---

## Import

```typescript
import { BanglaCalendar } from 'bn-calendar';
```

## Quick Examples

**`BanglaCalendar`** - The class to create, manipulate, and convert dates between the Bangla and Gregorian calendar systems.

> It supports two calendar variants: `'revised-2019'` (default) and `'revised-1966'`.

```typescript
import { BanglaCalendar } from 'bn-calendar';

// 1. Current date in Bangla calendar
const today = new BanglaCalendar();
console.log(today.toString()); 
// Output: "শুক্রবার, ৯ ফাল্গুন, ১৪৩২ [বসন্ত]"

// 2. From Gregorian date string
const date1 = new BanglaCalendar('2023-04-14');
console.log(date1.toJSON()); 
// Output: "১৪৩০-০১-০১"

// 3. From JavaScript Date object
const date2 = new BanglaCalendar(new Date(2023, 3, 14));
console.log(date2.getMonthName()); 
// Output: "বৈশাখ"

// 4. From specific Bangla components (Year, Month, Date)
const date3 = new BanglaCalendar(1430, 1, 1);
console.log(date3.toDate()); 
// Output: Fri Apr 14 2023 00:00:00 GMT+0000

// 5. Using Bangla digits directly
const date4 = new BanglaCalendar('১৪৩০', '১', '১');
console.log(date4.toStringEn()); 
// Output: "Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"
```

> Read full documentation: [bncal.nazmul-nhb.dev](https://bncal.nazmul-nhb.dev/)

---

## Features

- **Bidirectional Conversion**: Seamlessly convert dates between Gregorian and Bengali calendar systems.
- **Multiple Variants**: Full support for both `'revised-2019'` (official Bangladesh calendar) and `'revised-1966'` leap year rules.
- **Immutable by Design**: `BanglaCalendar` objects are strictly immutable. All date manipulation methods (`addDays`, `addMonths`, etc.) and `toDate()` return fresh instances/objects without side effects.
- **Rich API**: Extensive methods for date manipulation, formatting, and calculations.
- **Universal Utilities**: Handy functions to handle conversion between Bangla (`০-৯`) and Latin (`0-9`) digits.
- **Lightweight & Fast**: Zero dependencies, fully tree-shakable, and optimized for performance.
- **Universal Compatibility**: Works seamlessly in Node.js, browsers, and any JS/TS environment.
- **Type-Safe**: Written in TypeScript with comprehensive type definitions.

---

## 🔗 Related Packages

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/toolbox-x">
    <img src="https://img.shields.io/badge/Utility_Library-toolbox--x-blue" alt="toolbox-x" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/chronos-date">
    <img src="https://img.shields.io/badge/Date--Time_Library-chronos--date-green" alt="chronos-date" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/locality-idb">
    <img src="https://img.shields.io/badge/IndexedDB_ORM-locality--idb-darkviolet" alt="locality-idb" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-hooks">
    <img src="https://img.shields.io/badge/React_Hooks-nhb--hooks-blue" alt="nhb-hooks" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-scripts">
    <img src="https://img.shields.io/badge/Development_Scripts-nhb--scripts-red" alt="nhb-scripts" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-express">
    <img src="https://img.shields.io/badge/Express_Server_Scaffolder-nhb--express-orange" alt="nhb-express" />
  </a>
</div>

<div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
  <a target="_blank" href="https://www.npmjs.com/package/nhb-anagram-generator">
    <img src="https://img.shields.io/badge/Anagram_Generator-nhb--anagram--generator-teal" alt="nhb-anagram-generator" />
  </a>
</div>

---

## License

This project is licensed under the [Apache License 2.0](LICENSE) with the following additional requirement:

**Additional Requirement:**

> Any fork, derivative work, or redistribution of this project must include clear attribution to [**Nazmul Hassan**](https://github.com/nazmul-nhb) in both the source code and any publicly available documentation.

You are free to use, modify, and distribute this project under the terms of the Apache 2.0 License, provided that appropriate credit is given.

---

Built with ❤️ by [**Nazmul Hassan**](https://nazmul-nhb.dev)
