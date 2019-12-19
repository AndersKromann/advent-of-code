import { day, results, year } from '..';
import { runner } from '../part_one';

describe(`${year} - Day ${day} - Part One`, () => {
	test('Should be 5158916779 after 9 recipe:', async () => {
		expect((await runner(9)).toString()).toBe('5158916779');
	});

	test('Should be 0124515891 after 5 recipe:', async () => {
		expect((await runner(5)).toString()).toBe('0124515891');
	});

	test('Should be 9251071085 after 18 recipe:', async () => {
		expect((await runner(18)).toString()).toBe('9251071085');
	});
	test('Should be 5941429882 after 2018 recipe:', async () => {
		expect((await runner(2018)).toString()).toBe('5941429882');
	});

	test(
        `should resolve to ${results.one.input} when using the input`,
        async () => {
            expect(runner(327901)).toBe(results.one.input);
        }
    );
});
