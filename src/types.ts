import type { DateFormatToken } from 'nhb-toolbox/date/types';
import type { $BnOnes, BanglaDigit, NumberRange } from 'nhb-toolbox/number/types';
import type { LooseLiteral, Repeat } from 'nhb-toolbox/utils/types';
import type {
	BN_DAYS,
	BN_MONTH_TABLES,
	BN_MONTHS,
	BN_SEASONS,
	DATE_FORMATS,
	DAY_FORMATS,
	HOUR_FORMATS,
	MILLISECOND_FORMATS,
	MINUTE_FORMATS,
	MONTH_FORMATS,
	SECOND_FORMATS,
	TIME_FORMATS,
	YEAR_FORMATS,
} from './constants';

/** Year in either 4 or 2 digits format */
export type YearToken = (typeof YEAR_FORMATS)[number];
/** Month in either 1 or 2 digits or 3 letters or full word format */
export type MonthToken = (typeof MONTH_FORMATS)[number];
/** Day in either 2 letters or full word format */
export type DayToken = (typeof DAY_FORMATS)[number];
/** Date in either 1 or 2 digits format */
export type DateToken = (typeof DATE_FORMATS)[number];
/** Second in either 1 or 2 digits format */
export type HourToken = (typeof HOUR_FORMATS)[number];
/** Second in either 1 or 2 digits format */
export type MinuteToken = (typeof MINUTE_FORMATS)[number];
/** Second in either 1 or 2 digits format */
export type SecondToken = (typeof SECOND_FORMATS)[number];
/** Millisecond in either 1 or 2 digits format */
export type MSToken = (typeof MILLISECOND_FORMATS)[number];
/** Time formats in either capital or lowercase `am/pm` format */
export type TimeToken = (typeof TIME_FORMATS)[number];

export type $BnEn = 'bn' | 'en';

type $BnOnesPadded = `০${$BnOnes}`;

/** Bangla month from `১-১২` */
export type BanglaMonth = $BnOnes | $BnOnesPadded | '১০' | '১১' | '১২';

/** Bangla date of month from `১-৩১` */
export type BanglaDate =
	| $BnOnes
	| $BnOnesPadded
	| `১${BanglaDigit}`
	| `২${BanglaDigit}`
	| '৩০'
	| '৩১';

export type $BnYearPadded = Repeat<BanglaDigit, 4>;
export type $BnMonthPadded = $BnOnesPadded | '১০' | '১১' | '১২';
export type $BnDatePadded = $BnOnesPadded | `১${BanglaDigit}` | `২${BanglaDigit}` | '৩০' | '৩১';

// export type BnDateString = `${$BanglaYearPadded}-${$BanglaMonthPadded}-${$BanglaDatePadded}`;

/** Bangla year from `০-৯৯৯৯` */
export type BanglaYear =
	| BanglaDigit
	| `${$BnOnes}${BanglaDigit}`
	| `${$BnOnes}${BanglaDigit}${BanglaDigit}`
	| Repeat<BanglaDigit, 4>;

/** Token for Bangla season format */
type $SeasonToken = 'S' | 'SS';

/** Standard format tokens for Bangla date with seasons */
export type DateWithSeasonToken =
	| `${Exclude<MonthToken, 'M' | 'MM'>} ${DateToken}, ${YearToken} ${$SeasonToken}`
	| `${DateToken} ${Exclude<MonthToken, 'M' | 'MM'>}, ${YearToken} ${$SeasonToken}`
	| `${Exclude<MonthToken, 'M' | 'MM'>} ${DateToken} ${YearToken} ${$SeasonToken}`
	| `${DateToken} ${Exclude<MonthToken, 'M' | 'MM'>} ${YearToken} ${$SeasonToken}`
	| `${DayToken}, ${Exclude<MonthToken, 'M' | 'MM'>} ${DateToken}, ${YearToken}, ${$SeasonToken}`
	| `${DayToken}, ${DateToken} ${Exclude<MonthToken, 'M' | 'MM'>}, ${YearToken}, ${$SeasonToken}`
	| `${DayToken}, ${Exclude<MonthToken, 'M' | 'MM'>} ${DateToken} ${YearToken}, ${$SeasonToken}`
	| `${DayToken}, ${DateToken} ${Exclude<MonthToken, 'M' | 'MM'>} ${YearToken}, ${$SeasonToken}`
	| `${Exclude<DateToken, 'Do'>}/${Exclude<MonthToken, 'mmm' | 'mmmm'>}/${YearToken} (${$SeasonToken})`
	| `${Exclude<DateToken, 'Do'>}-${Exclude<MonthToken, 'mmm' | 'mmmm'>}-${YearToken} (${$SeasonToken})`
	| `${Exclude<MonthToken, 'mmm' | 'mmmm'>}/${Exclude<DateToken, 'Do'>}/${YearToken} (${$SeasonToken})`
	| `${Exclude<MonthToken, 'mmm' | 'mmmm'>}-${Exclude<DateToken, 'Do'>}-${YearToken} (${$SeasonToken})`
	| `${YearToken}-${Exclude<MonthToken, 'mmm' | 'mmmm'>}-${Exclude<DateToken, 'Do'>} (${$SeasonToken})`
	| `${YearToken}/${Exclude<MonthToken, 'mmm' | 'mmmm'>}/${Exclude<DateToken, 'Do'>} (${$SeasonToken})`
	| `${YearToken}-${Exclude<DateToken, 'Do'>}-${Exclude<MonthToken, 'mmm' | 'mmmm'>} (${$SeasonToken})`
	| `${YearToken}/${Exclude<DateToken, 'Do'>}/${Exclude<MonthToken, 'mmm' | 'mmmm'>} (${$SeasonToken})`;

/** Standard format tokens for Bangla date along with any string */
export type BanglaDateFormat = LooseLiteral<DateFormatToken | DateWithSeasonToken>;

/** Bangla name of the weekday either in Bangla or Latin */
export type BanglaDayName<Locale extends $BnEn = 'bn'> = (typeof BN_DAYS)[number][Locale];
/** Bangla name of the month either in Bangla or Latin */
export type BanglaMonthName<Locale extends $BnEn = 'bn'> = (typeof BN_MONTHS)[number][Locale];
/** Bangla name of the season either in Bangla or Latin */
export type BanglaSeasonName<Locale extends $BnEn = 'bn'> = (typeof BN_SEASONS)[number][Locale];

/** Represents Bangla year either in Bangla digit or Latin from 1-12 */
export type $BanglaYear<Locale extends $BnEn = 'bn'> = Locale extends 'en'
	? number
	: BanglaYear;

/** Represents Bangla month either in Bangla digit or Latin from 0-9999 */
export type $BanglaMonth<Locale extends $BnEn = 'bn'> = Locale extends 'en'
	? NumberRange<1, 12>
	: BanglaMonth;

/** Represents Bangla date of the month either in Bangla digit or Latin from 1-31 */
export type $BanglaMonthDate<Locale extends $BnEn = 'bn'> = Locale extends 'en'
	? NumberRange<1, 31>
	: BanglaDate;

/** Represents a Bangla date object for `Chronos` plugin */
export type BanglaDateObject<Locale extends $BnEn = 'bn'> = {
	/** Represents Bangla year either in Bangla digit or Latin from 1-12 */
	year: $BanglaYear<Locale>;
	/** Represents Bangla month either in Bangla digit or Latin from 1-12 */
	month: $BanglaMonth<Locale>;
	/** Represents Bangla date of the month either in Bangla digit or Latin from 1-31 */
	date: $BanglaMonthDate<Locale>;
	/** Bangla name of the weekday either in Bangla or Latin */
	dayName: BanglaDayName<Locale>;
	/** Bangla name of the month either in Bangla or Latin */
	monthName: BanglaMonthName<Locale>;
	/** Bangla name of the season either in Bangla or Latin */
	seasonName: BanglaSeasonName<Locale>;
	/** Leap year status of the current year */
	isLeapYear: boolean;
};

/** Variant of Bangla calendar system */
export type BnCalendarVariant = keyof typeof BN_MONTH_TABLES;

/** Configuration object for Bangla Calendar system */
export interface BnCalendarConfig {
	/** - Calendar variant to use. Defaults to `'revised-2019'`. */
	variant?: BnCalendarVariant;
}

/** Bangla date options for `Chronos` plugin (`banglaPlugin`) */
export interface BanglaDateOptions<Locale extends $BnEn> extends BnCalendarConfig {
	/** - Locale to use for output values. Defaults to `'bn'`. */
	locale?: Locale | $BnEn;
}
