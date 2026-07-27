export { banglaToDigit, digitToBangla } from 'toolbox-x';

import { isNonEmptyString } from 'toolbox-x/guards';

import type { BanglaDate, BanglaMonth, BanglaYear } from './types';

/**
 * * Checks whether a value is a valid Bangla year in Bangla digits (`০–৯৯৯৯`).
 *
 * @param value - Value to check. Accepts both zero-padded and non-padded Bangla digits
 * @returns `true` if the value is a valid Bangla year, `false` otherwise
 *
 * @example
 * isBanglaYear('১৪৩০'); // true
 * isBanglaYear('০');    // true
 * isBanglaYear('১০০০০'); // false (too many digits)
 * isBanglaYear('1430');  // false (Latin digits)
 */
export function isBanglaYear(value: unknown): value is BanglaYear {
	return isNonEmptyString(value) && /^(?:০{0,3}[১-৯][০-৯]{0,3}|০)$/.test(value.trim());
}

/**
 * * Checks whether a value is a valid Bangla month in Bangla digits (`১–১২`).
 *
 * @param value - Value to check. Accepts both zero-padded and non-padded Bangla digits
 * @returns `true` if the value is a valid Bangla month, `false` otherwise
 *
 * @example
 * isBanglaMonth('১');  // true
 * isBanglaMonth('১২'); // true
 * isBanglaMonth('১৩'); // false
 * isBanglaMonth('0');  // false (Latin digit)
 */
export function isBanglaMonth(value: unknown): value is BanglaMonth {
	return isNonEmptyString(value) && /^(?:০?[১-৯]|১০|১১|১২)$/.test(value.trim());
}

/**
 * * Checks whether a value is a valid Bangla date of month in Bangla digits (`১–৩১`).
 *
 * @param value - Value to check. Accepts both zero-padded and non-padded Bangla digits
 * @returns `true` if the value is a valid Bangla date, `false` otherwise
 *
 * @example
 * isBanglaDate('১');   // true
 * isBanglaDate('৩১');  // true
 * isBanglaDate('৩২');  // false
 * isBanglaDate('০');   // false
 */
export function isBanglaDate(value: unknown): value is BanglaDate {
	return isNonEmptyString(value) && /^(?:০?[১-৯]|[১২][০-৯]|৩০|৩১)$/.test(value.trim());
}

/**
 * * Checks whether a string is a valid Bangla date formatted as `YYYY-MM-DD` using Bangla digits and supported separators.
 *
 * @param value - String value to check
 * @returns `true` if the value is a valid Bangla date string with valid year, month, and date components; otherwise `false`.
 *
 * @example
 * isBanglaDateString('১৪৩০-০১-০১'); // true
 * isBanglaDateString('1430-01-01'); // false (Latin digits)
 * isBanglaDateString('১৪৩০/১/১'); // true (single-digit month/date)
 * isBanglaDateString('১৪৩০-১৩-০১'); // false (invalid month)
 *
 * @remarks
 * - Accepts both zero-padded and non-padded components.
 * - Accepted separators are `-`, `/`, `_`, `.`, and space (` `).
 * - Year, month, and date are validated individually.
 * - Year must be `০–৯৯৯৯`, month `১–১২`, and date `১–৩১`.
 */
export function isBanglaDateString(value: unknown): value is string {
	const separator = /[-/_.]|\s+/;

	if (isNonEmptyString(value) && separator.test(value)) {
		const parts = value.replace(/['"]/g, '').split(separator);

		if (parts.length !== 3) return false;

		const [year, month, date] = parts;

		return isBanglaYear(year) && isBanglaMonth(month) && isBanglaDate(date);
	}

	return false;
}
