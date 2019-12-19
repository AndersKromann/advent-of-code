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
		expect(await runner('>')).toBe(2);
	});

	test('should be that that the second example resolves to 4', async () => {
		expect(await runner('^>v<')).toBe(4);
	});

	test('should be that that the third example resolves to 2', async () => {
		expect(await runner('^v^v^v^v^v')).toBe(2);
	});
});
