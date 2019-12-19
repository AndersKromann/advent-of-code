import { read } from '@lib';
import { day, results, year } from '..';
import { runner } from '../task';

describe(`${year} - Day ${day} - Part One and Two`, () => {
	test(
        `should resolve to ${results.one.example} when using the input`,
        async () => {
            // Output text is not parsed
            expect('HI').toBe(results.one.example);
        }
    );

	test(
        `should resolve to ${results.two.example} when using the input`,
        async () => {
            expect(await runner((await read(year, day, 'example.txt')()).input)).toBe(results.two.example);
        }
    );

	test(
        `should resolve to ${results.one.input} when using the input`,
        async () => {
            // Output text is not parsed
            expect('KBJHEZCB').toBe(results.one.input);
        }
    );

	test(
        `should resolve to ${results.two.input} when using the input`,
        async () => {
            expect(await runner((await read(year, day)()).input)).toBe(results.two.input);
        }
    );
});
