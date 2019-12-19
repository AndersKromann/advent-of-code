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

	test('should be that that the first example resolves to 2', async () => {
		expect(await runner('14')).toBe(2);
	});

	test('should be that that the second example resolves to 966', async () => {
		expect(await runner('1969')).toBe(966);
	});

	test('should be that that the third example resolves to 50346', async () => {
		expect(await runner('100756')).toBe(50346);
	});
});
