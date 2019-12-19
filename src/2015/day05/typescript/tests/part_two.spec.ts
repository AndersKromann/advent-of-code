import { read } from '@lib';
import { day, results, year } from '..';
import { isNice, runner } from '../part_two';

describe(`${year} - Day ${day} - Part Two`, () => {
	test(
        `should resolve to ${results.two.input} when using the input`,
        async () => {
            expect(runner((await read(year, day)()).input)).toBe(results.two.input);
        }
    );

	test(`should true that example 1 is nice`, async () => {
		expect(isNice('qjhvhtzxzqqjkmpb')).toBe(true);
	});

	test(`should true that example 2 is nice`, async () => {
		expect(isNice('xxyxx')).toBe(true);
	});

	test(`should true that example 3 is naughty`, async () => {
		expect(isNice('uurcxstgmygtbstg')).toBe(false);
	});

	test(`should true that example 4 is naughty`, async () => {
		expect(isNice('ieodomkazucvgmuy')).toBe(false);
	});
});
