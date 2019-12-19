import { read } from '@lib';
import { IntCodeComputer } from '@lib/intcode';
import { day, results, year } from '..';
import { parse } from '../parse';
import { runner } from '../part_one';

describe(`${year} - Day ${day} - Part One`, () => {
	test(
        `should resolve to ${results.one.input} when using the input`,
        async () => {
            expect(await runner((await read(year, day)()).input)).toBe(results.one.input);
        }
    );

	test('should be that that both the first examples resolves to 0', async () => {
		const computer = new IntCodeComputer(parse('1,0,0,0,99'));
		computer.execute();
		expect(computer.peek(0)).toBe(2);
		// expect(await runner('')).to.equal(0);
	});
});
