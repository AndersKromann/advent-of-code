import { read } from '@lib';
import { day, results, year } from '..';
import { runner } from '../part_one';

describe(`${year} - Day ${day} - Part One`, () => {
	test(
        `should resolve to ${results.one.example0} when using the zeroth example`,
        async () => {
            expect(await runner((await read(year, day, 'example.0.txt')()).input)).toBe(results.one.example0);
        }
    );

	test(
        `should resolve to ${results.one.example1} when using the first example`,
        async () => {
            expect(await runner((await read(year, day, 'example.1.txt')()).input)).toBe(results.one.example1);
        }
    );

	test(
        `should resolve to ${results.one.example2} when using the second example`,
        async () => {
            expect(await runner((await read(year, day, 'example.2.txt')()).input)).toBe(results.one.example2);
        }
    );

	test(
        `should resolve to ${results.one.example3} when using the third example`,
        async () => {
            expect(await runner((await read(year, day, 'example.3.txt')()).input)).toBe(results.one.example3);
        }
    );

	test(
        `should resolve to ${results.one.example4} when using the fourth example`,
        async () => {
            expect(await runner((await read(year, day, 'example.4.txt')()).input)).toBe(results.one.example4);
        }
    );

	test(
        `should resolve to ${results.one.example5} when using the fifth example`,
        async () => {
            expect(await runner((await read(year, day, 'example.5.txt')()).input)).toBe(results.one.example5);
        }
    );

	test(
        `should resolve to ${results.one.input} when using the input`,
        async () => {
            expect(await runner((await read(year, day)()).input)).toBe(results.one.input);
        }
    );
});
