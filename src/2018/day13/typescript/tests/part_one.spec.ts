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

	test(
        `should resolve to ${results.one.example1} when using the example`,
        async () => {
            expect(await runner((await read(year, day, 'example.1.txt')()).input)).toBe(results.one.example1);
        }
    );

	test(
        `should resolve to ${results.one.example2} when using the example`,
        async () => {
            expect(await runner((await read(year, day, 'example.2.txt')()).input)).toBe(results.one.example2);
        }
    );
});
