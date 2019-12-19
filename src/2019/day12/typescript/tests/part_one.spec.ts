import { read } from '@lib';
import { day, results, year } from '..';
import { runner } from '../part_one';

describe(`${year} - Day ${day} - Part One`, () => {
	test(
        `should resolve to ${results.one.input} when using the input`,
        async () => {
            expect(await runner()((await read(year, day)()).input)).toBe(results.one.input);
        }
    );

	test(
        'should be that that the first examples resolves to 179 after 10 steps',
        async () => {
            expect(await runner(10)((await read(year, day, 'example.1.txt')()).input)).toBe(179);
        }
    );

	test(
        'should be that that the second examples resolves to 1940 after a 100 steps',
        async () => {
            expect(await runner(100)((await read(year, day, 'example.2.txt')()).input)).toBe(1940);
        }
    );
});
