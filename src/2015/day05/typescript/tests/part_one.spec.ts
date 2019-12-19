import { read } from '@lib';
import { day, results, year } from '..';
import { isNice, runner } from '../part_one';

describe(`${year} - Day ${day} - Part One`, () => {
	test(
        `should resolve to ${results.one.input} when using the input`,
        async () => {
            expect(runner((await read(year, day)()).input)).toBe(results.one.input);
        }
    );

	test(`should true that example 1 is nice`, async () => {
		expect(isNice('ugknbfddgicrmopn')).toBe(true);
	});

	test(`should true that example 2 is nice`, async () => {
		expect(isNice('aaa')).toBe(true);
	});

	test(`should true that example 3 is naughty`, async () => {
		expect(isNice('jchzalrnumimnmhp')).toBe(false);
	});

	test(`should true that example 4 is naughty`, async () => {
		expect(isNice('haegwjzuvuyypxyu')).toBe(false);
	});

	test(`should true that example 5 is naughty`, async () => {
		expect(isNice('dvszwmarrgswjxmb')).toBe(false);
	});
});
