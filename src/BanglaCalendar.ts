import {
	banglaToDigit,
	digitToBangla,
	isDateString,
	isInteger,
	isNonEmptyString,
	isNumber,
	isObjectWithKeys,
} from 'nhb-toolbox';
import type { Enumerate, NumberRange } from 'nhb-toolbox/number/types';
import { BN_DAYS, BN_MONTH_TABLES, BN_MONTHS, BN_YEAR_OFFSET, MS_PER_DAY } from './constants';
import {
	_bnDaysMonthIdx,
	_extractDateUnits,
	_formatDateCore,
	_getBnSeason,
	_getBnYear,
	_isBnLeapYear,
	_padShunno,
} from './helpers';
import type {
	$BnEn,
	BanglaDate,
	BanglaDateFormat,
	BanglaDayName,
	BanglaMonth,
	BanglaMonthName,
	BanglaSeasonName,
	BanglaYear,
	BnCalendarConfig,
	BnCalendarVariant,
} from './types';

/**
 * @class Represents a date in the Bangla calendar system with support for different variants.
 *      - This class provides functionality to create, manipulate, convert dates between the Bangla and Gregorian calendar systems.
 *      - It supports two Bangla calendar variants: `'revised-2019'` (default) and `'revised-1966'`.
 *
 * @example
 * // Create from current date
 * const today = new BanglaCalendar();
 *
 * // Create from Bangla date string (Bangla digit)
 * const date0 = new BanglaCalendar('১৪৩২-১১-০৮');
 *
 * // Create from Gregorian date
 * const date1 = new BanglaCalendar('2023-04-14'); // Latin digit
 * const date2 = new BanglaCalendar(new Date('2023-04-14')); // Date object
 *
 * // Create with specific Bangla date using Latin digits
 * const date3 = new BanglaCalendar(1430, 1, 1);
 *
 * // Create with specific Bangla date using Bangla digits
 * const date4 = new BanglaCalendar('১৪৩০', '১', '১');
 *
 * // Create with specific variant
 * const date5 = new BanglaCalendar('১৪৩০', '১', '১', { variant: 'revised-1966' });
 *
 * @remarks
 * - The Bangla calendar year starts on `April 14th (১ বৈশাখ)` in the Gregorian calendar.
 * - The class automatically handles leap years according to the selected variant.
 */
export class BanglaCalendar {
	/** Bangla calendar variant */
	readonly variant: BnCalendarVariant;

	/** Bangla year */
	readonly year: Readonly<{
		/** Bangla year in Bangla digit */
		bn: BanglaYear;
		/** Bangla year in Latin digit */
		en: number;
	}>;

	/** Bangla month */
	readonly month: Readonly<{
		/** Bangla month in Bangla digit */
		bn: BanglaMonth;
		/** Bangla month in Latin digit */
		en: NumberRange<1, 12>;
	}>;

	/** Bangla day of the month */
	readonly date: Readonly<{
		/** Bangla day of the month in Bangla digit */
		bn: BanglaDate;
		/** Bangla day of the month in Latin digit */
		en: NumberRange<1, 31>;
	}>;

	/** Gregorian equivalent of the current bangla date */
	readonly gregorian: Readonly<{
		/** Gregorian year in Latin digit */
		year: number;
		/** Gregorian month in Latin digit (`1-12`) */
		month: NumberRange<1, 12>;
		/** Gregorian day of the month in Latin digit (`1-31`) */
		date: NumberRange<1, 31>;
	}>;

	/** Gets the day of the week (0-6, where 0 is Sunday (রবিবার)). */
	readonly weekDay: Enumerate<7>;

	/** Gets ISO weekday: 1 = Monday, 7 = Sunday */
	readonly isoWeekDay: NumberRange<1, 7>;

	/**
	 * * Creates a `BanglaCalendar` instance from the current Gregorian date.
	 *
	 * @param config - Calendar configuration options
	 */
	constructor(config?: BnCalendarConfig);

	/**
	 * * Creates a `BanglaCalendar` instance from a **Gregorian** or **Bangla** date string.
	 *
	 * @param date - Gregorian (should be parsable by {@link Date}) or Bangla date string
	 * @param config - Calendar configuration options
	 *
	 * @remarks
	 * - Bangla date string must be in `YYYY-MM-DD` format (padded with `০` or non-padded) in Bangla digit
	 * - Bangla date string is validated internally using {@link isBanglaDateString} method
	 *
	 * @example
	 * const fromBanglaString = new BanglaCalendar('১৪৩২-১১-০৮');
	 * const fromGregorianString = new BanglaCalendar('2023-04-14');
	 */
	constructor(date: string, config?: BnCalendarConfig);

	/**
	 * * Creates a `BanglaCalendar` instance from a {@link Date} object.
	 *
	 * @param date - Gregorian date as {@link Date} object
	 * @param config - Calendar configuration options
	 *
	 * @example
	 * const fromDateObject = new BanglaCalendar(new Date('2023-04-14'));
	 */
	constructor(date: Date, config?: BnCalendarConfig);

	/**
	 * * Creates a `BanglaCalendar` instance from a timestamp or Bangla year (Latin digits).
	 *
	 * @param tsOrBnYear - Timestamp (number of milliseconds) or Bangla year in Latin digits (`0-9999`)
	 * @param config - Calendar configuration options
	 *
	 * @remarks Current month and day of the month is set with the specified `bnYear`.
	 *
	 * @example
	 * const fromTimestamp = new BanglaCalendar(1681430400000); // 2023-04-14 timestamp
	 * const fromYear = new BanglaCalendar(1430); // Bangla year 1430
	 */
	constructor(tsOrBnYear: number, config?: BnCalendarConfig);

	/**
	 * * Creates a BanglaCalendar instance from Bangla year (Bangla digits).
	 *
	 * @param bnYear - Bangla year in Bangla digits (`০-৯৯৯৯`)
	 * @param config - Calendar configuration options
	 *
	 * @remarks Current month and day of the month is set with the specified `bnYear`.
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০'); // Bangla year 1430
	 */
	constructor(bnYear: BanglaYear, config?: BnCalendarConfig);

	/**
	 * * Creates a `BanglaCalendar` instance from Bangla year and month (Latin digits).
	 *
	 * @param bnYear - Bangla year in Latin digits (`0-9999`)
	 * @param bnMonth - Bangla month in Latin digits (`1-12`)
	 * @param config - Calendar configuration options
	 *
	 * @remarks Current day of the month is set with the specified `bnYear` and `bnMonth`.
	 *
	 * @example
	 * const bnCal = new BanglaCalendar(1430, 1); // বৈশাখ 1430
	 */
	constructor(bnYear: number, bnMonth: NumberRange<1, 12>, config?: BnCalendarConfig);

	/**
	 * * Creates a `BanglaCalendar` instance from Bangla year and month (Bangla digits).
	 *
	 * @param bnYear - Bangla year in Bangla digits (`০-৯৯৯৯`)
	 * @param bnMonth - Bangla month in Bangla digits (`১-১২`)
	 * @param config - Calendar configuration options
	 *
	 * @remarks Current day of the month is set with the specified `bnYear` and `bnMonth`.
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০', '১'); // বৈশাখ 1430
	 */
	constructor(bnYear: BanglaYear, bnMonth: BanglaMonth, config?: BnCalendarConfig);

	/**
	 * * Creates a `BanglaCalendar` instance from Bangla year, month, and day (Latin digits).
	 *
	 * @param bnYear - Bangla year in Latin digits (`0-9999`)
	 * @param bnMonth - Bangla month in Latin digits (`1-12`)
	 * @param bnDate - Bangla day of month in Latin digits (`1-31`)
	 * @param config - Calendar configuration options
	 *
	 * @example
	 * const bnCal = new BanglaCalendar(1430, 1, 1); // ১ বৈশাখ ১৪৩০
	 */
	constructor(
		bnYear: number,
		bnMonth: NumberRange<1, 12>,
		bnDate: NumberRange<1, 31>,
		config?: BnCalendarConfig
	);

	/**
	 * * Creates a `BanglaCalendar` instance from Bangla year, month, and day (Bangla digits).
	 *
	 * @param bnYear - Bangla year in Bangla digits (`০-৯৯৯৯`)
	 * @param bnMonth - Bangla month in Bangla digits (`১-১২`)
	 * @param bnDate - Bangla day of month in Bangla digits (`১-৩১`)
	 * @param config - Calendar configuration options
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০', '১', '১'); // ১ বৈশাখ ১৪৩০
	 */
	constructor(
		bnYear: BanglaYear,
		bnMonth: BanglaMonth,
		bnDate: BanglaDate,
		config?: BnCalendarConfig
	);

	/** * Creates a `BanglaCalendar` instance based on given parameter(s) */
	constructor(
		dateBnYrOrCfg?: string | number | Date | BanglaYear | BnCalendarConfig,
		bnMonthOrCfg?: BanglaMonth | NumberRange<1, 12> | BnCalendarConfig,
		bnDateOrCfg?: BanglaDate | NumberRange<1, 31> | BnCalendarConfig,
		config?: BnCalendarConfig
	) {
		this.variant = this.#processVariants(dateBnYrOrCfg, bnMonthOrCfg, bnDateOrCfg, config);

		let date =
			dateBnYrOrCfg instanceof Date
				? dateBnYrOrCfg
				: new Date(
						isDateString(dateBnYrOrCfg) &&
							!BanglaCalendar.isBanglaDateString(dateBnYrOrCfg)
							? dateBnYrOrCfg
							: isNumber(dateBnYrOrCfg) &&
									!BanglaCalendar.isBanglaYearEn(dateBnYrOrCfg)
								? dateBnYrOrCfg
								: Date.now()
					);

		if (isNaN(date.getTime())) {
			date = new Date();
		}

		const { year, month, monthDate } = this.#processDate(date);

		let bnYear = BanglaCalendar.isBanglaYear(dateBnYrOrCfg)
			? banglaToDigit(dateBnYrOrCfg)
			: isNumber(dateBnYrOrCfg) && BanglaCalendar.isBanglaYearEn(dateBnYrOrCfg)
				? dateBnYrOrCfg
				: year;

		let bnMonth = BanglaCalendar.isBanglaMonth(bnMonthOrCfg)
			? banglaToDigit(bnMonthOrCfg)
			: BanglaCalendar.isBanglaMonthEn(bnMonthOrCfg)
				? bnMonthOrCfg
				: month;

		let bnDate = BanglaCalendar.isBanglaDate(bnDateOrCfg)
			? banglaToDigit(bnDateOrCfg)
			: BanglaCalendar.isBanglaDateEn(bnDateOrCfg)
				? bnDateOrCfg
				: monthDate;

		if (BanglaCalendar.isBanglaDateString(dateBnYrOrCfg)) {
			const parts = dateBnYrOrCfg.replace(/['"]/g, '').split('-');

			bnYear = banglaToDigit(parts[0]);
			bnMonth = banglaToDigit(parts[1]);
			bnDate = banglaToDigit(parts[2]);
		}

		const { gregYear } = this.#processGregYear(bnYear, bnMonth);

		const { bnMonthTable } = this.#getBnMonthTableLeap(gregYear, bnYear);

		const monthRange = bnMonthTable[bnMonth - 1];

		if (bnDate > monthRange) {
			bnDate -= monthRange;

			if (bnMonth === 12) {
				bnMonth = 1;
				bnYear += 1;
			} else {
				bnMonth += 1;
			}
		}

		this.year = {
			bn: digitToBangla(bnYear) as BanglaYear,
			en: bnYear,
		};

		this.month = {
			bn: digitToBangla(bnMonth) as BanglaMonth,
			en: bnMonth as NumberRange<1, 12>,
		};

		this.date = {
			bn: digitToBangla(bnDate) as BanglaDate,
			en: bnDate as NumberRange<1, 31>,
		};

		const { gy, gm, gd, wd } = _extractDateUnits(this.toDate());

		this.gregorian = { year: gy, month: gm, date: gd };

		this.weekDay = wd;

		this.isoWeekDay = wd === 0 ? 7 : wd;
	}

	[Symbol.toPrimitive](hint: string): string | number {
		if (hint === 'number') return this.valueOf();
		return this.toJSON();
	}

	get [Symbol.toStringTag](): string {
		return this.toJSON();
	}

	/**
	 * @instance Get timestamp in milliseconds for the current date.
	 * @remarks
	 * - Converts the current Bangla date to a Gregorian {@link Date} using {@link toDate()}.
	 * - Returns the Unix timestamp (in milliseconds) of the converted date.
	 * - The time component is normalized to midnight UTC during the conversion process.
	 */
	valueOf(): number {
		return this.toDate().getTime();
	}

	/**
	 * @instance Returns a string representation of the Bangla date in ISO-like format (YYYY-MM-DD with Bangla digits).
	 *
	 * @returns Bangla date string in the format: "YYYY-MM-DD" (e.g., "১৪৩০-০১-০১")
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('2023-04-14');
	 * console.log(bnCal.toJSON()); // "১৪৩০-০১-০১"
	 *
	 * @remarks
	 * - This method is automatically called by {@link JSON.stringify()} method
	 * - Output follows the pattern: `"বছর-মাস-দিন"` with zero-padded Bangla digits
	 * - Month and date are padded to 2 digits, year to 4 digits
	 */
	toJSON(): string {
		const { year, month, date } = this;

		return `${_padShunno(year.bn, 4)}-${_padShunno(month.bn)}-${_padShunno(date.bn)}`;
	}

	/**
	 * * Checks if the current Bangla year is a leap year.
	 *
	 * @returns `true` if the year is a leap year, `false` otherwise
	 *
	 * @example
	 * const date = new BanglaCalendar(1430, 1, 1);
	 * const isLeap = date.isLeapYear(); // false
	 *
	 * @remarks
	 * - Leap year determination depends on the selected calendar variant.
	 * - The `'revised-2019'` and `'revised-1966'` variants have different leap year rules.
	 *   - **Revised-2019**: Leap year is determined by the associated Gregorian year's leap rule:
	 *     - A year is a leap year if it is divisible by 4, but not divisible by 100, unless it is also divisible by 400.
	 *   - **Revised-1966**: Leap year is determined solely by the Bangla year (`bnYear % 4 === 2`), no Gregorian rule applies.
	 */
	isLeapYear(): boolean {
		const { gregYear } = this.#processGregYear();

		return this.#getBnMonthTableLeap(gregYear).isBnLeapYear;
	}

	/**
	 * * Converts the Bangla calendar date to a JS {@link Date} object.
	 *
	 * @returns Gregorian Date object equivalent to the Bangla date
	 *
	 * @example
	 * const bnDate = new BanglaCalendar('১৪৩০', '১', '১');
	 * const gregorianDate = bnDate.toDate(); // Date for April 14, 2023
	 * console.log(gregorianDate.toISOString()); // 2023-04-14T00:00:00.000Z
	 *
	 * @remarks
	 * - The conversion takes into account the calendar variant and leap year rules.
	 * - Time component is always set to `00:00:00` in UTC.
	 */
	toDate(): Date {
		const { baseGregYear, gregYear } = this.#processGregYear();
		const { bnMonthTable } = this.#getBnMonthTableLeap(gregYear);

		const epoch = Date.UTC(baseGregYear, 3, 13);

		let days = this.date.en;
		for (let i = 0; i < this.month.en - 1; i++) {
			days += bnMonthTable[i];
		}

		return new Date(days * MS_PER_DAY + epoch);
	}

	/**
	 * @instance Gets the Bangla season name for the current date.
	 *
	 * @param locale - Output locale ('bn' for Bengali, 'en' for English)
	 * @returns Name of the season in the specified locale
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('2023-04-14');
	 * bnCal.getSeasonName(); // Returns: 'গ্রীষ্ম'
	 * bnCal.getSeasonName('en'); // Returns: 'Grisma (Summer)'
	 *
	 * @remarks
	 * Bangla calendar is traditionally divided into 6 seasons (ঋতু):
	 * - গ্রীষ্ম (Summer): Mid-April to Mid-June
	 * - বর্ষা (Monsoon): Mid-June to Mid-August
	 * - শরৎ (Autumn): Mid-August to Mid-October
	 * - হেমন্ত (Late Autumn): Mid-October to Mid-December
	 * - শীত (Winter): Mid-December to Mid-February
	 * - বসন্ত (Spring): Mid-February to Mid-April
	 */
	getSeasonName<Locale extends $BnEn = 'bn'>(locale?: Locale): BanglaSeasonName<Locale> {
		return _getBnSeason(this.month.en - 1, locale);
	}

	/**
	 * @instance Gets the Bangla name of the month for the current date.
	 *
	 * @param locale - Output locale ('bn' for Bengali, 'en' for English)
	 * @returns Name of the month in the specified locale
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('2023-04-14');
	 * bnCal.getMonthName(); // Returns: 'বৈশাখ'
	 * bnCal.getMonthName('en'); // Returns: 'Boishakh'
	 *
	 * @remarks
	 * - Month names follow traditional Bengali naming conventions.
	 * - English names are transliterated versions of the Bengali names.
	 * - Month determination may vary slightly between calendar variants near month boundaries.
	 */
	getMonthName<Locale extends $BnEn = 'bn'>(locale?: Locale): BanglaMonthName<Locale> {
		const MONTH = BN_MONTHS[this.month.en - 1];

		return (locale === 'en' ? MONTH.en : MONTH.bn) as BanglaMonthName<Locale>;
	}

	/**
	 * @instance Gets the Bangla name of the weekday for the current date.
	 *
	 * @param locale - Output locale ('bn' for Bengali, 'en' for English)
	 * @returns Name of the weekday in the specified locale
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('2023-04-14'); // Friday
	 * bnCal.getDayName(); // Returns: 'শুক্রবার'
	 * bnCal.getDayName('en'); // Returns: 'Shukrobar (Friday)'
	 *
	 * @remarks
	 * - Weekday names follow the standard Bengali naming convention ending with 'বার'.
	 * - English names are the Latin transliterations of the Bangla names with standard English weekday names.
	 */
	getDayName<Locale extends $BnEn = 'bn'>(locale?: Locale): BanglaDayName<Locale> {
		const DAY = BN_DAYS[this.weekDay];

		return (locale === 'en' ? DAY.en : DAY.bn) as BanglaDayName<Locale>;
	}

	/**
	 * @instance Adds days to the current Bangla date.
	 *
	 * @param days - Number of days to add (can be negative to subtract days)
	 * @returns New `BanglaCalendar` instance with the adjusted date
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০', '১', '১'); // ১ বৈশাখ ১৪৩০
	 *
	 * // Add days
	 * bnCal.addDays(7); // Returns: ৮ বৈশাখ ১৪৩০
	 *
	 * // Subtract days
	 * bnCal.addDays(-3); // Returns: ২৮ চৈত্র ১৪২৯
	 *
	 * // Add days crossing month boundary
	 * bnCal.addDays(35); // Returns: ৫ জ্যৈষ্ঠ ১৪৩০
	 *
	 * // Add days crossing year boundary
	 * const lateDate = new BanglaCalendar('১৪৩০', '১২', '২৫');
	 * lateDate.addDays(10); // Returns: ৫ বৈশাখ ১৪৩১
	 *
	 * @remarks
	 * - The resulting instance preserves the calendar variant of the original
	 * - Handles month and year transitions automatically
	 * - Accounts for varying month lengths and leap years
	 * - Time component remains at midnight UTC in the Gregorian conversion (using {@link BanglaCalendar.toDate()} method)
	 * - Negative values subtract days from the current date
	 */
	addDays(days: number): BanglaCalendar {
		const date = this.toDate();

		return new BanglaCalendar(date.setDate(date.getDate() + days), {
			variant: this.variant,
		});
	}

	/**
	 * @instance Adds weeks to the current Bangla date.
	 *
	 * @param weeks - Number of weeks to add (can be negative to subtract weeks)
	 * @returns New `BanglaCalendar` instance with the adjusted date
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০', '১', '১'); // ১ বৈশাখ ১৪৩০
	 *
	 * // Add weeks
	 * bnCal.addWeeks(2); // Returns: ১৫ বৈশাখ ১৪৩০
	 *
	 * // Subtract weeks
	 * bnCal.addWeeks(-1); // Returns: ২৪ চৈত্র ১৪২৯
	 *
	 * // Add weeks crossing month boundary
	 * bnCal.addWeeks(5); // Returns: ৫ জ্যৈষ্ঠ ১৪৩০
	 *
	 * @remarks
	 * - Each week is treated as 7 days
	 * - The resulting instance preserves the calendar variant of the original
	 * - Handles month and year transitions automatically
	 * - Time component remains at midnight UTC in the Gregorian conversion (using {@link BanglaCalendar.toDate()} method)
	 * - Negative values subtract weeks from the current date
	 * - Useful for scheduling recurring weekly events
	 */
	addWeeks(weeks: number): BanglaCalendar {
		const date = this.toDate();

		return new BanglaCalendar(date.setDate(date.getDate() + weeks * 7), {
			variant: this.variant,
		});
	}

	/**
	 * @instance Adds months to the current Bangla date.
	 *
	 * @param months - Number of months to add (can be negative to subtract months)
	 * @param overflow - If `true`, allows date overflow to next month when day doesn't exist;
	 *                   if `false`, clamps to last day of target month (default: `true`)
	 * @returns New `BanglaCalendar` instance with the adjusted date
	 *
	 * @example
	 * // Normal case: day exists in target month
	 * const normal = new BanglaCalendar('১৪৩০', '২', '১৫');
	 * normal.addMonths(1); // Returns: ১৫ আষাঢ় ১৪৩০
	 * normal.addMonths(1, false); // Returns: ১৫ আষাঢ় ১৪৩০ (same behavior for both)
	 *
	 * // Edge case: day does not exist in target month
	 * const edgeCase = new BanglaCalendar('১৪৩০', '৬', '৩১'); // ৩১ আশ্বিন ১৪৩০
	 *
	 * // With overflow (default): 31st doesn't exist in কার্তিক (30 days)
	 * edgeCase.addMonths(1); // Returns: ১ অগ্রহায়ণ ১৪৩০ (overflows to next month)
	 *
	 * // Without overflow: clamps to last day of target month
	 * edgeCase.addMonths(1, false); // Returns: ৩০ কার্তিক ১৪৩০ (clamped)
	 *
	 * // Subtract months
	 * edgeCase.addMonths(-1); // Returns: ১ আশ্বিন ১৪৩০
	 * edgeCase.addMonths(-1, false); // Returns: ৩১ ভাদ্র ১৪৩০
	 *
	 * @remarks
	 * - When `overflow=true` (default):
	 *   Follows JavaScript {@link Date} behavior where invalid dates overflow to the next month (e.g., ৩১ আশ্বিন + 1 month → ১ অগ্রহায়ণ)
	 * - When `overflow=false`:
	 *   Clamps to the last valid day of the target month (e.g., ৩১ আশ্বিন + 1 month → ৩০ কার্তিক)
	 * - The resulting instance preserves the calendar variant of the original
	 * - Handles year transitions automatically
	 * - Time component remains at midnight UTC in the Gregorian conversion (using {@link BanglaCalendar.toDate()} method)
	 * - Negative values subtract months from the current date
	 */
	addMonths(months: number, overflow = true): BanglaCalendar {
		if (overflow) {
			const current = this.toDate();

			return new BanglaCalendar(current.setMonth(current.getMonth() + months), {
				variant: this.variant,
			});
		} else {
			const { variant, year, month, date } = this;

			let targetMonth = month.en + months;
			let targetYear = year.en;

			while (targetMonth > 12) {
				targetMonth -= 12;
				targetYear += 1;
			}

			while (targetMonth < 1) {
				targetMonth += 12;
				targetYear -= 1;
			}

			return this.#getClampedBnCal(targetYear, targetMonth, date.en, variant);
		}
	}

	/**
	 * @instance Adds years to the current Bangla date.
	 *
	 * @param years - Number of years to add (can be negative to subtract years)
	 * @param overflow - If `true`, allows date overflow when day doesn't exist in target year;
	 *                   if `false`, clamps to last valid day of month (default: `true`)
	 * @returns New `BanglaCalendar` instance with the adjusted date
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০', '১', '১৫'); // ১৫ বৈশাখ ১৪৩০
	 *
	 * // Add years
	 * bnCal.addYears(1); // Returns: ১৫ বৈশাখ ১৪৩১
	 *
	 * // Subtract years
	 * bnCal.addYears(-1); // Returns: ১৫ বৈশাখ ১৪২৯
	 *
	 * // Multiple years
	 * bnCal.addYears(5); // Returns: ১৫ বৈশাখ ১৪৩৫
	 *
	 * // Edge case: day adjustment for ফাল্গুন (accounting leap year)
	 * const leapDay = new BanglaCalendar('১৪৩১', '১১', '৩০'); // ১৪৩১ is a leap year
	 * leapDay.addYears(1, false); // Returns: ২৯ ফাল্গুন ১৪৩২ (non-leap years have 29 days in ফাল্গুন)
	 *
	 * @remarks
	 * - The resulting instance preserves the calendar variant of the original
	 * - Negative values subtract years from the current date
	 * - Year addition follows Bangla calendar years
	 * - Time component remains at midnight UTC in the Gregorian conversion (using {@link BanglaCalendar.toDate()} method)
	 * - The month and day generally remain the same unless affected by leap year rules
	 */
	addYears(years: number, overflow = true): BanglaCalendar {
		const { variant, year, month, date } = this;

		const targetYear = year.en + years;

		if (overflow) {
			return new BanglaCalendar(targetYear, month.en, date.en, { variant });
		} else {
			return this.#getClampedBnCal(targetYear, month.en, date.en, variant);
		}
	}

	/**
	 * @instance Gets a new `BanglaCalendar` instance representing the first day of the current month.
	 *
	 * @returns A `BanglaCalendar` instance set to the 1st day of the current month
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০', '৫', '১৫');
	 * const startOfMonth = bnCal.startOfMonth(); // Returns: ১ জ্যৈষ্ঠ ১৪৩০
	 *
	 * @remarks
	 * - The resulting instance preserves the calendar variant of the original
	 * - Useful for date range calculations and month-based operations
	 * - Time component remains at midnight UTC in the Gregorian conversion (using {@link BanglaCalendar.toDate()} method)
	 */
	startOfMonth(): BanglaCalendar {
		const { year, month, variant } = this;

		return new BanglaCalendar(year.en, month.en, 1, { variant });
	}

	/**
	 * @instance Gets a new `BanglaCalendar` instance representing the last day of the current month.
	 *
	 * @returns A `BanglaCalendar` instance set to the last day of the current month
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০', '৫', '১৫');
	 * const endOfMonth = bnCal.endOfMonth(); // Returns: ৩১ জ্যৈষ্ঠ ১৪৩০ (or 30 for some months)
	 *
	 * @remarks
	 * - The resulting instance preserves the calendar variant of the original
	 * - Accounts for month length variations (29/30/31 days) including leap years
	 * - Time component remains at midnight UTC in the Gregorian conversion (using {@link BanglaCalendar.toDate()} method)
	 */
	endOfMonth(): BanglaCalendar {
		const { year, month, variant } = this;

		return new BanglaCalendar(year.en, month.en, this.daysInMonth(), { variant });
	}

	/**
	 * @instance Gets a new `BanglaCalendar` instance representing the first day of the current year (১ বৈশাখ).
	 *
	 * @returns A `BanglaCalendar` instance set to ১ বৈশাখ of the current year
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০', '৫', '১৫');
	 * const startOfYear = bnCal.startOfYear(); // Returns: ১ বৈশাখ ১৪৩০
	 *
	 * @remarks
	 * - The resulting instance preserves the calendar variant of the original
	 * - Always returns the 1st day of the 1st month (বৈশাখ)
	 * - Time component remains at midnight UTC in the Gregorian conversion (using {@link BanglaCalendar.toDate()} method)
	 */
	startOfYear(): BanglaCalendar {
		const { year, variant } = this;

		return new BanglaCalendar(year.en, 1, 1, { variant });
	}

	/**
	 * @instance Gets a new `BanglaCalendar` instance representing the last day of the current year (৩০ চৈত্র).
	 *
	 * @returns A `BanglaCalendar` instance set to ৩০ চৈত্র of the current year
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০', '৫', '১৫');
	 * const endOfYear = bnCal.endOfYear(); // Returns: ৩০ চৈত্র ১৪৩০
	 *
	 * @remarks
	 * - The resulting instance preserves the calendar variant of the original
	 * - Always returns the 30th day of the 12th month (চৈত্র)
	 * - Time component remains at midnight UTC in the Gregorian conversion (using {@link BanglaCalendar.toDate()} method)
	 */
	endOfYear(): BanglaCalendar {
		const { year, variant } = this;

		return new BanglaCalendar(year.en, 12, 30, { variant });
	}

	/**
	 * @instance Gets the number of days in a Bangla month.
	 *
	 * @param month - Optional Bangla month (1-12 in Latin digits)
	 * @returns Number of days in the specified month (29, 30, or 31)
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('১৪৩০', '১', '১');
	 *
	 * // Get days in current month
	 * bnCal.daysInMonth(); // Returns: 31 (বৈশাখ has 31 days)
	 *
	 * // Get days in specific month
	 * bnCal.daysInMonth(2); // Returns: 31 (জ্যৈষ্ঠ has 31 days)
	 * bnCal.daysInMonth(12); // Returns: 30 (চৈত্র has 30 days)
	 *
	 * @remarks
	 * - The method accounts for the selected calendar variant when determining leap years
	 * - If no month is provided, uses the current instance's month
	 * - In the 'revised-2019' variant, leap years follow Gregorian leap rules
	 * - In the 'revised-1966' variant, leap years occur when `bnYear % 4 === 2`
	 */
	daysInMonth(month?: NumberRange<1, 12>): NumberRange<29, 31> {
		const { gregYear } = this.#processGregYear();
		const { bnMonthTable } = this.#getBnMonthTableLeap(gregYear);

		return bnMonthTable[(month ?? this.month.en) - 1];
	}

	/**
	 * @instance Returns a string representation of the Bangla date in Bengali format.
	 *
	 * @returns Bangla date string in the format: "শুক্রবার, ১৫ জ্যৈষ্ঠ, ১৪৩০ [গ্রীষ্ম]"
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('2023-04-14');
	 * console.log(bnCal.toString()); // "শুক্রবার, ১ বৈশাখ, ১৪৩০ [গ্রীষ্ম]"
	 *
	 * @remarks
	 * - Equivalent to calling {@link toStringEn()} with 'bn' locale
	 * - Format includes day name, date, month name, year, and season in brackets
	 * - Uses Bengali digits and Bengali month/day names
	 */
	toString(): string {
		return this.#toString('bn');
	}

	/**
	 * @instance Returns a string representation of the Bangla date in English/Latin format.
	 *
	 * @returns Bangla date string in the format: "Shukrobar (Friday), 15 Joishtho, 1430 [Grisma (Summer)]"
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('2023-04-14');
	 * console.log(bnCal.toStringEn()); // "Shukrobar (Friday), 1 Boishakh, 1430 [Grisma (Summer)]"
	 *
	 * @remarks
	 * - Equivalent to calling {@link toString()} with 'en' locale
	 * - Format includes transliterated day name (with English equivalent), date, transliterated month and season name, and year.
	 * - Uses Latin digits and transliterated Bengali names
	 */
	toStringEn(): string {
		return this.#toString('en');
	}

	/**
	 * @instance Formats the current date as a Bangla calendar date string (no time) using customizable tokens.
	 *
	 * @param format - Format string using tokens (default: `'ddd, DD mmmm (SS), YYYY বঙ্গাব্দ'`)
	 * @returns Formatted Bangla date string according to the specified format
	 *
	 * @example
	 * const bnCal = new BanglaCalendar('2023-04-14');
	 *
	 * bnCal.format();
	 * // Returns: 'শুক্রবার, বৈশাখ ০১ (গ্রীষ্মকাল), ১৪৩০ বঙ্গাব্দ'
	 *
	 * bnCal.format('YYYY-MM-DD');
	 * // Returns: '১৪৩০-০১-০১'
	 *
	 * bnCal.format('mmmm DD, YYYY');
	 * // Returns: 'বৈশাখ ০১, ১৪৩০'
	 *
	 * @remarks
	 * - **Important:** Does not allow time formatting tokens!
	 * - Supported format tokens include: `YYYY`, `YY`, `mmmm`, `mmm`, `MM`, `M`, `DD`, `D`, `dd`, `ddd`, `Do`, `SS` and `S`.
	 *   - **Year**: `YYYY/yyyy` (full year), `YY/yy` (last 2 digits)
	 *   - **Month**: `M/MM`(padded), `mmm` (short name), `mmmm` (full name)
	 *   - **Day**: `D/DD`(padded), Do (results same as cardinal for Bangla dates)
	 *   - **Weekday**: `d` (short), `dd` (without 'বার'), `ddd` (full)
	 *   - **Season**: `S` (season), `SS` (season with 'কাল' suffix)
	 * - To output raw text (i.e., not interpreted as a date token), wrap it in square brackets.
	 * - For example, `[আজ] ddd` results in `আজ রবিবার`, and `[year ]YYYY` results in `year ২০২৫`.
	 * - *Any token not wrapped in brackets will be parsed and replaced with its corresponding date component.*
	 */
	format(format?: BanglaDateFormat) {
		const { year, month, date, weekDay } = this;

		const seasonName = this.getSeasonName();

		const M_NAME = BN_MONTHS[month.en - 1];
		const D_NAME = BN_DAYS[weekDay];

		const paddedYear = _padShunno(year.bn, 4);

		const dateComponents: Record<string, string> = {
			YYYY: paddedYear,
			YY: paddedYear.slice(-2),
			yyyy: paddedYear,
			yy: paddedYear.slice(-2),
			M: month.bn,
			MM: _padShunno(month.bn),
			mmm: M_NAME.short,
			mmmm: M_NAME.bn,
			d: D_NAME.short,
			dd: D_NAME.bn.replace('বার', ''),
			ddd: D_NAME.bn,
			D: date.bn,
			DD: _padShunno(date.bn),
			Do: date.bn,
			S: seasonName,
			SS: seasonName + 'কাল',
		};

		return _formatDateCore(format || 'ddd, DD mmmm (SS), YYYY বঙ্গাব্দ', dateComponents);
	}

	/** Process Gregorian base year and calculated year from optional Bangla year and month */
	#processGregYear(bnYear?: number, bnMonth?: number) {
		const baseGregYear = (bnYear ?? this.year.en) + BN_YEAR_OFFSET;

		const gregYear = (bnMonth ?? this.month.en) > 10 ? baseGregYear + 1 : baseGregYear;

		return { baseGregYear, gregYear };
	}

	/** Get the Bangla month table and leap year flag based on calendar variant */
	#getBnMonthTableLeap(gregYear: number, bnYear?: number) {
		const isBnLeapYear = _isBnLeapYear(bnYear ?? this.year.en, gregYear, this.variant);

		const bnMonthTable = isBnLeapYear
			? BN_MONTH_TABLES?.[this.variant].leap
			: BN_MONTH_TABLES?.[this.variant].normal;

		return { bnMonthTable, isBnLeapYear };
	}

	/**
	 * @internal Get new `BanglaCalendar` instance with clamped date
	 * @param tyBn - Target Bangla year
	 * @param tmBn - Target Bangla month
	 * @param cdBn - Current Bangla date of the month
	 * @param variant - Calendar variant to preserve
	 * @returns New `BanglaCalendar` instance with date clamped to valid range
	 *
	 * @remarks
	 * - Clamps the date to not exceed the number of days in the target month
	 * - Used internally for non-overflow date arithmetic
	 * - Ensures dates like ৩১ don't become invalid in months with only 30 days
	 */
	#getClampedBnCal(tyBn: number, tmBn: number, cdBn: number, variant: BnCalendarVariant) {
		const { gregYear } = this.#processGregYear(tyBn, tmBn);
		const { bnMonthTable } = this.#getBnMonthTableLeap(gregYear, tyBn);

		const tdBn = Math.min(cdBn, bnMonthTable[tmBn - 1]) as NumberRange<1, 31>;

		return new BanglaCalendar(tyBn, tmBn as NumberRange<1, 12>, tdBn, { variant });
	}

	/** Process variant from the config */
	#processVariants(v1: unknown, v2: unknown, v3: unknown, v4: unknown) {
		return this.$hasVariantConfig(v1)
			? v1.variant
			: this.$hasVariantConfig(v2)
				? v2.variant
				: this.$hasVariantConfig(v3)
					? v3.variant
					: this.$hasVariantConfig(v4)
						? v4.variant
						: 'revised-2019';
	}

	/** Process {@link Date} and extract Bangla year, month and dates in both Bangla and Latin */
	#processDate(date: Date) {
		const bnYear = _getBnYear(date);

		const { days, monthIdx } = _bnDaysMonthIdx(date, this.variant);

		return {
			year: bnYear,
			month: (monthIdx + 1) as NumberRange<1, 12>,
			monthDate: (days + 1) as NumberRange<1, 31>,
		};
	}

	/** Convert to human readable string either in `bn` or `en` locale */
	#toString<Locale extends $BnEn = 'bn'>(lcl = 'bn' as Locale) {
		const { year, date } = this;

		return `${this.getDayName(lcl)}, ${date[lcl]} ${this.getMonthName(lcl)}, ${year[lcl]} [${this.getSeasonName(lcl)}]`;
	}

	/**
	 * @static Check if a value is a configuration object that contains a valid {@link variant}
	 * @param value Value to check
	 * @returns `true` if the value contains a valid {@link variant} property, `false` otherwise
	 */
	$hasVariantConfig(value: unknown): value is { variant: BnCalendarVariant } {
		return (
			isObjectWithKeys(value, ['variant']) &&
			isNonEmptyString(value.variant) &&
			(value.variant === 'revised-1966' || value.variant === 'revised-2019')
		);
	}

	/**
	 * @static Checks whether a value is a valid Bangla year in Bangla digits (`০–৯৯৯৯`).
	 *
	 * @param value - Value to check. Accepts both zero-padded and non-padded Bangla digits
	 * @returns `true` if the value is a valid Bangla year, `false` otherwise
	 *
	 * @example
	 * BanglaCalendar.isBanglaYear('১৪৩০'); // true
	 * BanglaCalendar.isBanglaYear('০');    // true
	 * BanglaCalendar.isBanglaYear('১০০০০'); // false (too many digits)
	 * BanglaCalendar.isBanglaYear('1430');  // false (Latin digits)
	 */
	static isBanglaYear(value: unknown): value is BanglaYear {
		// /^[০-৯]{1,4}$/ // Allow unlimited left padding with ০
		// return isNonEmptyString(value) && /^[০-৯]{1,4}$/.test(value.trim());
		// return isNonEmptyString(value) && /^(?:০|[১-৯][০-৯]{0,3})$/.test(value.trim());
		return isNonEmptyString(value) && /^(?:০{0,3}[১-৯][০-৯]{0,3}|০)$/.test(value.trim());
	}

	/**
	 * @static Checks whether a value is a valid Bangla year in Latin digits (`0–9999`).
	 *
	 * @param value - Value to check (must be a number)
	 * @returns `true` if the value is a valid Bangla year, `false` otherwise
	 *
	 * @example
	 * BanglaCalendar.isBanglaYearEn(1430);  // true
	 * BanglaCalendar.isBanglaYearEn(0);     // true
	 * BanglaCalendar.isBanglaYearEn(10000); // false
	 * BanglaCalendar.isBanglaYearEn(-1);    // false
	 */
	static isBanglaYearEn(value: number): boolean {
		return isInteger(value) && value >= 0 && value <= 9999;
	}

	/**
	 * @static Checks whether a value is a valid Bangla month in Bangla digits (`১–১২`).
	 *
	 * @param value - Value to check. Accepts both zero-padded and non-padded Bangla digits
	 * @returns `true` if the value is a valid Bangla month, `false` otherwise
	 *
	 * @example
	 * BanglaCalendar.isBanglaMonth('১');  // true
	 * BanglaCalendar.isBanglaMonth('১২'); // true
	 * BanglaCalendar.isBanglaMonth('১৩'); // false
	 * BanglaCalendar.isBanglaMonth('0');  // false (Latin digit)
	 */
	static isBanglaMonth(value: unknown): value is BanglaMonth {
		// return isNonEmptyString(value) && /^(?:[১-৯]|১০|১১|১২)$/.test(value.trim());
		return isNonEmptyString(value) && /^(?:০?[১-৯]|১০|১১|১২)$/.test(value.trim());
	}

	/**
	 * @static Checks whether a value is a valid Bangla month in Latin digits (`1–12`).
	 *
	 * @param value - Value to check
	 * @returns `true` if the value is a valid Bangla month, `false` otherwise
	 *
	 * @example
	 * BanglaCalendar.isBanglaMonthEn(1);  // true
	 * BanglaCalendar.isBanglaMonthEn(12); // true
	 * BanglaCalendar.isBanglaMonthEn(0);  // false
	 * BanglaCalendar.isBanglaMonthEn(13); // false
	 */
	static isBanglaMonthEn(value: unknown): value is NumberRange<1, 12> {
		return isInteger(value) && value >= 1 && value <= 12;
	}

	/**
	 * @static Checks whether a value is a valid Bangla date of month in Bangla digits (`১–৩১`).
	 *
	 * @param value - Value to check. Accepts both zero-padded and non-padded Bangla digits
	 * @returns `true` if the value is a valid Bangla date, `false` otherwise
	 *
	 * @example
	 * BanglaCalendar.isBanglaDate('১');   // true
	 * BanglaCalendar.isBanglaDate('৩১');  // true
	 * BanglaCalendar.isBanglaDate('৩২');  // false
	 * BanglaCalendar.isBanglaDate('০');   // false
	 */
	static isBanglaDate(value: unknown): value is BanglaDate {
		// return isNonEmptyString(value) && /^(?:[১-৯]|[১২][০-৯]|৩০|৩১)$/.test(value.trim());
		return isNonEmptyString(value) && /^(?:০?[১-৯]|[১২][০-৯]|৩০|৩১)$/.test(value.trim());
	}

	/**
	 * @static Checks whether a value is a valid Bangla date of month in Latin digits (`1–31`).
	 *
	 * @param value - Value to check
	 * @returns `true` if the value is a valid Bangla date, `false` otherwise
	 *
	 * @example
	 * BanglaCalendar.isBanglaDateEn(1);   // true
	 * BanglaCalendar.isBanglaDateEn(31);  // true
	 * BanglaCalendar.isBanglaDateEn(32);  // false
	 * BanglaCalendar.isBanglaDateEn(0);   // false
	 */
	static isBanglaDateEn(value: unknown): value is NumberRange<1, 31> {
		return isInteger(value) && value >= 1 && value <= 31;
	}

	/**
	 * @static Checks whether a string follows the Bangla date format pattern (`YYYY-MM-DD` with Bangla digits).
	 *
	 * @param value - String value to check
	 * @returns `true` if the string matches the pattern `"বছর-মাস-দিন"` with Bangla digits, `false` otherwise
	 *
	 * @example
	 * BanglaCalendar.isBanglaDateString('১৪৩০-০১-০১'); // true
	 * BanglaCalendar.isBanglaDateString('1430-01-01'); // false (Latin digits)
	 * BanglaCalendar.isBanglaDateString('১৪৩০-১-১'); // true (single-digit month/date)
	 * BanglaCalendar.isBanglaDateString('১৪৩০-১৩-০১'); // false (invalid month)
	 *
	 * @remarks
	 * - Accepts both zero-padded and non-padded Bangla digits
	 * - Validates year, month, and date components separately
	 * - Year must be `‌০-৯৯৯৯`, month must be `১-১২`, date must be `১-৩১`
	 */
	static isBanglaDateString(value: unknown): value is string {
		if (isNonEmptyString(value) && value.includes('-')) {
			const [year, month, date] = value.replace(/['"]/g, '').split('-');

			return (
				BanglaCalendar.isBanglaYear(year) &&
				BanglaCalendar.isBanglaMonth(month) &&
				BanglaCalendar.isBanglaDate(date)
			);
		}

		return false;
	}
}
