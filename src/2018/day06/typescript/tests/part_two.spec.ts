import { read } from '@lib';
import { Args, day, results, year } from '..';
import { runner } from '../part_two';

describe(`${year} - Day ${day} - Part Two`, () => {
	test(
        `should resolve to ${results.two.input} when using the input`,
        async () => {
            const { input, args } = await read<Args>(year, day)();
            expect(await runner(input, args)).toBe(results.two.input);
        }
    );

	test(
        `should resolve to ${results.two.example} when using the example`,
        async () => {
            const { input, args } = await read<Args>(year, day, 'example.txt')();
            expect(await runner(input, args)).toBe(results.two.example);
        }
    );
});
