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

	test('should be that that the first example resolves to 2', async () => {
		expect(await runner('12')).toBe(2);
	});

	test('should be that that the second example resolves to 2', async () => {
		expect(await runner('14')).toBe(2);
	});

	test('should be that that the third example resolves to 654', async () => {
		expect(await runner('1969')).toBe(654);
	});

	test('should be that that the fourth example resolves to 33583', async () => {
		expect(await runner('100756')).toBe(33583);
	});
});
