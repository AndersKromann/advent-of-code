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

	test('should be that that the first example resolves to 1', async () => {
		expect(await runner('111111-111111')).toBe(1);
	});

	test('should be that that the second example resolves to 0', async () => {
		expect(await runner('223450-223450')).toBe(0);
	});

	test('should be that that the third example resolves to 0', async () => {
		expect(await runner('123789-123789')).toBe(0);
	});
});
