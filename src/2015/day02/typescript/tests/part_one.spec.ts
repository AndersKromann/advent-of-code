import { read } from '@lib';
import { day, results, year } from '..';
import { runner } from '../part_one';

describe(`${year} - Day ${day} - Part One`, () => {
	test(
        `should resolve to ${results.one.input} when using the input`,
        async () => {
            expect(await runner((await read(year, day)()).input)).toBe(results.one.input);
        }
    );

	test('should be that that the first example resolves to 58', async () => {
		expect(await runner('2x3x4')).toBe(58);
	});

	test('should be that that the second example resolves to 43', async () => {
		expect(await runner('1x1x10')).toBe(43);
	});
});
