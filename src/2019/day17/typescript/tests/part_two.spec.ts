import { read } from '@lib';
import { day, results, year } from '..';
import { runner } from '../part_two';

describe(`${year} - Day ${day} - Part Two`, () => {
	test(`should resolve to ${results.two.input} when using the input`, async () => {
		expect(await runner(false)((await read(year, day)()).input)).toBe(results.two.input);
	});

	test('should be that that the first example resolves to 0', async () => {
		expect(await runner(false)('0')).toBe(0);
	});
});
