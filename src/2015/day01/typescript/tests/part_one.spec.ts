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

	test('should be that that both the first examples resolves to 0', async () => {
		expect(await runner('(())')).toBe(0);
		expect(await runner('()()')).toBe(0);
	});

	test(
        'should be that that both the second and the third examples resolves to 3',
        async () => {
            expect(await runner('(((')).toBe(3);
            expect(await runner('(()(()(')).toBe(3);
            expect(await runner('))(((((')).toBe(3);
        }
    );

	test(
        'should be that that both the fourth examples resolves to -1',
        async () => {
            expect(await runner('())')).toBe(-1);
            expect(await runner('))(')).toBe(-1);
        }
    );

	test('should be that that both the fith examples resolves to -3', async () => {
		expect(await runner(')))')).toBe(-3);
		expect(await runner(')())())')).toBe(-3);
	});
});
