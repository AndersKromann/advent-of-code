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

	test('should be that that the first example resolves to 1', async () => {
		expect(await runner('112233-112233')).toBe(1);
	});

	test('should be that that the second example resolves to 0', async () => {
		expect(await runner('123444-123444')).toBe(0);
	});

	test('should be that that the third example resolves to 1', async () => {
		expect(await runner('111122-111122')).toBe(1);
	});
});
