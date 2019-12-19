import { day, inputs, results, year } from '..';
import { runner } from '../part_one';

describe(`${year} - Day ${day} - Part One`, () => {
	test(
        `should resolve to ${results.one.input} when using the input`,
        async () => {
            expect(await runner(inputs.one.input.input)).toBe(results.one.input);
        }
    );

	test(
        `should resolve to ${results.one.example} when using the example`,
        async () => {
            expect(await runner(inputs.one.example.input)).toBe(results.one.example);
        }
    );
});
