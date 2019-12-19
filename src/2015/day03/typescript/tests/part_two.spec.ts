import { read } from '@lib';
import { day, results, year } from '..';
import { runner } from '../part_two';

describe(`${year} - Day ${day} - Part Two`, () => {
	test(`should resolve to ${results.two.input} when using the input`, async () => {
		expect(await runner((await read(year, day)()).input)).toBe(results.two.input);
	});

	test('should be that that the first example resolves to 3', async () => {
		expect(await runner('^v')).toBe(3);
	});

	test('should be that that the second example resolves to 3', async () => {
		expect(await runner('^>v<')).toBe(3);
	});

	test('should be that that the third example resolves to 11', async () => {
		expect(await runner('^v^v^v^v^v')).toBe(11);
	});
});
