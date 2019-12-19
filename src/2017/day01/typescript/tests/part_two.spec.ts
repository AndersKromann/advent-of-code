import { read } from '@lib';
import { day, results, year } from '..';
import { runner } from '../part_two';

describe(`${year} - Day ${day} - Part Two`, () => {
	test(
        `should resolve to ${results.two.input} when using the input`,
        async () => {
            expect(await runner((await read(year, day)()).input)).toBe(results.two.input);
        }
    );

	test('should be that that the first example resolves to 3', async () => {
		expect(await runner('1212')).toBe(6);
	});

	test('should be that that the second example resolves to 3', async () => {
		expect(await runner('1221')).toBe(0);
	});

	test('should be that that the third example resolves to 0', async () => {
		expect(await runner('123425')).toBe(4);
	});

	test('should be that that the fourth example resolves to 9', async () => {
		expect(await runner('123123')).toBe(12);
	});

	test('should be that that the fifth example resolves to 4', async () => {
		expect(await runner('12131415')).toBe(4);
	});
});
