import { read } from '@lib';
import { day, results, year } from '..';
import { runner } from '../part_two';

describe(`${year} - Day ${day} - Part Two`, () => {
	test(`should resolve to ${results.two.input} when using the input`, async () => {
		expect(await runner((await read(year, day)()).input)).toBe(results.two.input);
	}, 10000);

	test(`should resolve to ${results.two.example} when using the example`, async () => {
		expect(await runner((await read(year, day, 'example.txt')()).input)).toBe(results.two.example);
	}, 10000);
});
