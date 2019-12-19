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

	test('should be that that the first example resolves to 2772', async () => {
		expect(await runner((await read(year, day, 'example.1.txt')()).input)).toBe(2772);
	});

	test(
        'should be that that the second example resolves to 4686774924',
        async () => {
            expect(await runner((await read(year, day, 'example.2.txt')()).input)).toBe(4686774924);
        }
    );
});
