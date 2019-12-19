import { read } from '@lib';
import { day, results, year } from '..';
import { runner } from '../part_one';

describe(`${year} - Day ${day} - Part One`, () => {
	test(`should resolve to ${results.one.input} when using the input`, async () => {
		expect(await runner((await read(year, day)()).input)).toBe(results.one.input);
	});

	test('should be that that both the first examples resolves to 0', async () => {
		expect(await runner('')).toBe(0);
	});
});
