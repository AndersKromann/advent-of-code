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

	test(
        `should resolve to ${results.two.example1} when using the example`,
        async () => {
            expect(await runner((await read(year, day, 'example.1.txt')()).input)).toBe(results.two.example1);
        }
    );

	test(
        `should resolve to ${results.two.example2} when using the example`,
        async () => {
            expect(await runner((await read(year, day, 'example.2.txt')()).input)).toBe(results.two.example2);
        }
    );
});
