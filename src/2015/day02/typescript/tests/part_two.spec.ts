import { read } from '@lib';
import { day, results, year } from '..';
import { runner } from '../part_two';

describe(`${year} - Day ${day} - Part Two`, () => {
	test(
        `should resolve to ${results.two.input} when using the input`,
        async () => {
            expect(await runner((await read(year, day)()).input)).toBe(results.two.input);
        }
    );

	test('should be that that the first example resolves to 34', async () => {
		expect(await runner('2x3x4')).toBe(34);
	});

	test('should be that that the second example resolves to 14', async () => {
		expect(await runner('1x1x10')).toBe(14);
	});
});
