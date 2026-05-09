import { isLeapYear } from 'nhb-toolbox';
import type { Enumerate, NumberRange } from 'nhb-toolbox/number/types';
import {
	BN_MONTH_TABLES,
	BN_SEASONS,
	BN_YEAR_OFFSET,
	MS_PER_DAY,
	SORTED_TIME_FORMATS,
} from './constants';
import type { $BnEn, BanglaSeasonName, BnCalendarVariant } from './types';

/** Core formatting logic shared by `formatDate` and `Chronos`, `BanglaCalendar` classes */
export function _formatDateCore(format: string, dateComponents: Record<string, string>) {
	const tokenRegex = new RegExp(`^(${SORTED_TIME_FORMATS.join('|')})`);

	let result = '';

	let i = 0;
	while (i < format.length) {
		// Handle [escaped literal]
		if (format[i] === '[') {
			const end = format.indexOf(']', i);
			if (end !== -1) {
				result += format.slice(i + 1, end);
				i = end + 1;
				continue;
			}
		}

		// Try to match a format token
		const match = tokenRegex.exec(format.slice(i));

		if (match) {
			result += dateComponents[match[0]] ?? match[0];
			i += match[0].length;
		} else {
			result += format[i];
			i++;
		}
	}

	return result;
}

/** Check whether a Bangla year is leap by Gregorian and Bangla years and calendar variant */
export function _isBnLeapYear(by: number, gy: number, v?: BnCalendarVariant) {
	return v === 'revised-1966' ? by % 4 === 2 : isLeapYear(gy);
}

/** Get Bangla season name by month index (`0-11`) */
export function _getBnSeason<L extends $BnEn = 'bn'>(month: number, locale?: L | $BnEn) {
	const season = BN_SEASONS[Math.floor(month / 2)];

	return (locale === 'en' ? season.en : season.bn) as BanglaSeasonName<L>;
}

/** Extract selective unit values from {@link Date} object */
export function _extractDateUnits(date: Date) {
	const month = date.getMonth();

	return {
		gy: date.getFullYear(),
		$gm: month as Enumerate<12>,
		gm: (month + 1) as NumberRange<1, 12>,
		gd: date.getDate() as NumberRange<1, 31>,
		wd: date.getDay() as Enumerate<7>,
	};
}

/** Get Gregorian base year from {@link Date} object for Bangla year */
export function _getGregBaseYear(date: Date): number {
	const { gy, gm, gd } = _extractDateUnits(date);

	return gm < 4 || (gm === 4 && gd < 14) ? gy - 1 : gy;
}

/** Get Bangla year from {@link Date} object */
export function _getBnYear(date: Date): number {
	return _getGregBaseYear(date) - BN_YEAR_OFFSET;
}

/** Get timestamp in milliseconds between midnight, January 1, 1970 (UTC) and the specified {@link Date} object */
export function _getUtcTs(date: Date): number {
	const { gy, $gm, gd } = _extractDateUnits(date);

	return Date.UTC(gy, $gm, gd);
}

/** Get number of days elapsed since midnight April 14, 1970 (UTC) for specific {@link Date} */
export function _getElapsedDays(date: Date): number {
	return Math.floor((_getUtcTs(date) - Date.UTC(_getGregBaseYear(date), 3, 14)) / MS_PER_DAY);
}

/** Get number of days elapsed since midnight April 14, 1970 (UTC) and month index for specific `Date` and Bangla calendar variant */
export function _bnDaysMonthIdx(date: Date, variant?: BnCalendarVariant) {
	const v = variant ?? 'revised-2019';

	const table = _isBnLeapYear(_getBnYear(date), date.getFullYear(), v)
		? BN_MONTH_TABLES?.[v].leap
		: BN_MONTH_TABLES?.[v].normal;

	let days = _getElapsedDays(date);
	let monthIdx = 0;

	while (days >= table[monthIdx]) {
		days -= table[monthIdx];
		monthIdx++;
	}

	return { days, monthIdx };
}

/**
 * Convert number to string and pad at the start with zero (`'0'`)
 * @param value Value to convert and pad with
 * @param length Maximum length to pad, default is `2`
 * @returns The padded string
 */
export function _padZero(value: number, length = 2) {
	return String(value).padStart(length, '0');
}

/**
 * Pad at the start of a string with Bangla zero (`'০'`)
 * @param str String to pad with
 * @param length Maximum length to pad, default is `2`
 * @returns The padded string
 */
export function _padShunno(str: string, length = 2) {
	return str.padStart(length, '০');
}
