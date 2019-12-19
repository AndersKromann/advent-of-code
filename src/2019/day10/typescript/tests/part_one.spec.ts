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

	test('should be that that the first example resolves to 8', async () => {
		expect(await runner((await read(year, day, 'example.1.txt')()).input)).toBe(8);
	});

	test('should be that that the second example resolves to 33', async () => {
		expect(await runner((await read(year, day, 'example.2.txt')()).input)).toBe(33);
	});

	test('should be that that the third example resolves to 35', async () => {
		expect(await runner((await read(year, day, 'example.3.txt')()).input)).toBe(35);
	});

	test('should be that that the fourth example resolves to 41', async () => {
		expect(await runner((await read(year, day, 'example.4.txt')()).input)).toBe(41);
	});

	test('should be that that the fifth example resolves to 210', async () => {
		expect(await runner((await read(year, day, 'example.5.txt')()).input)).toBe(210);
	});
});
