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
        'should be that that both the first examples resolves to itself',
        async () => {
            expect(await runner('109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99')).toBe('109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99');
        }
    );

	test(
        'should be that that both the second examples resolves to 0',
        async () => {
            expect(await runner('1102,34915192,34915192,7,4,7,99,0')).toBe('1219070632396864');
        }
    );

	test(
        'should be that that both the second examples resolves to 0',
        async () => {
            expect(await runner('104,1125899906842624,99')).toBe('1125899906842624');
        }
    );
});
