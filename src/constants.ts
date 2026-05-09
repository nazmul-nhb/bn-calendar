/** Bangla year offset */
export const BN_YEAR_OFFSET = 593;

/** Milliseconds per day */
export const MS_PER_DAY = 86400000;

/** Bangla month days table for different variants */
export const BN_MONTH_TABLES = /* @__PURE__ */ Object.freeze({
	'revised-2019': {
		normal: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 29, 30],
		leap: [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30],
	},
	'revised-1966': {
		normal: [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 30, 30],
		leap: [31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 31, 30],
	},
} as const);

/** List of Bangla season names in Bangla and English */
export const BN_SEASONS = /* @__PURE__ */ Object.freeze([
	{ bn: 'গ্রীষ্ম', en: 'Grisma (Summer)' },
	{ bn: 'বর্ষা', en: 'Barsa (Monsoon)' },
	{ bn: 'শরৎ', en: 'Sarat (Autumn)' },
	{ bn: 'হেমন্ত', en: 'Hemanta (Late-Autumn)' },
	{ bn: 'শীত', en: 'Shhit (Winter)' },
	{ bn: 'বসন্ত', en: 'Basanta (Spring)' },
] as const);

/** List of Bangla day names in Bangla and English */
export const BN_DAYS = /* @__PURE__ */ Object.freeze([
	{ bn: 'রবিবার', en: 'Robibar (Sunday)', short: 'র' },
	{ bn: 'সোমবার', en: 'Shombar (Monday)', short: 'সো' },
	{ bn: 'মঙ্গলবার', en: 'Mongolbar (Tuesday)', short: 'ম' },
	{ bn: 'বুধবার', en: 'Budhbar (Wednesday)', short: 'বু' },
	{ bn: 'বৃহস্পতিবার', en: 'Brihoshpotibar (Thursday)', short: 'বৃ' },
	{ bn: 'শুক্রবার', en: 'Shukrobar (Friday)', short: 'শু' },
	{ bn: 'শনিবার', en: 'Shonibar (Saturday)', short: 'শ' },
] as const);

/** List of Bangla month names in Bangla and English */
export const BN_MONTHS = /* @__PURE__ */ Object.freeze([
	{ bn: 'বৈশাখ', en: 'Boishakh', short: 'বৈ' },
	{ bn: 'জ্যৈষ্ঠ', en: 'Joishtho', short: 'জ্য' },
	{ bn: 'আষাঢ়', en: 'Asharh', short: 'আ' },
	{ bn: 'শ্রাবণ', en: 'Srabon', short: 'শ্রা' },
	{ bn: 'ভাদ্র', en: 'Bhadro', short: 'ভা' },
	{ bn: 'আশ্বিন', en: 'Ashwin', short: 'আ' },
	{ bn: 'কার্তিক', en: 'Kartik', short: 'কা' },
	{ bn: 'অগ্রহায়ণ', en: 'Ogrohayon', short: 'অ' },
	{ bn: 'পৌষ', en: 'Poush', short: 'পৌ' },
	{ bn: 'মাঘ', en: 'Magh', short: 'মা' },
	{ bn: 'ফাল্গুন', en: 'Falgun', short: 'ফা' },
	{ bn: 'চৈত্র', en: 'Choitro', short: 'চৈ' },
] as const);

export const YEAR_FORMATS = /* @__PURE__ */ Object.freeze([
	'YYYY',
	'YY',
	'yyyy',
	'yy',
] as const);

export const MONTH_FORMATS = /* @__PURE__ */ Object.freeze(['M', 'MM', 'mmm', 'mmmm'] as const);

export const DATE_FORMATS = /* @__PURE__ */ Object.freeze(['DD', 'D', 'Do'] as const);

export const DAY_FORMATS = /* @__PURE__ */ Object.freeze(['d', 'dd', 'ddd'] as const);

export const HOUR_FORMATS = /* @__PURE__ */ Object.freeze(['H', 'HH', 'hh', 'h'] as const);

export const MINUTE_FORMATS = /* @__PURE__ */ Object.freeze(['mm', 'm'] as const);

export const SECOND_FORMATS = /* @__PURE__ */ Object.freeze(['ss', 's'] as const);

export const MILLISECOND_FORMATS = /* @__PURE__ */ Object.freeze(['ms', 'mss'] as const);

export const TIME_FORMATS = /* @__PURE__ */ Object.freeze(['a', 'A'] as const);

export const EXTRA_FORMATS = /* @__PURE__ */ Object.freeze(['Z', 'ZZ', 'S', 'SS'] as const);

export const SORTED_TIME_FORMATS = /* @__PURE__ */ Object.freeze(
	[
		...YEAR_FORMATS,
		...MONTH_FORMATS,
		...DAY_FORMATS,
		...DATE_FORMATS,
		...HOUR_FORMATS,
		...MINUTE_FORMATS,
		...SECOND_FORMATS,
		...MILLISECOND_FORMATS,
		...TIME_FORMATS,
		...EXTRA_FORMATS,
	].sort((a, b) => b.length - a.length)
);
