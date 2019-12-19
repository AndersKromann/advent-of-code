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

	test('should be that that the first example resolves to 3', async () => {
		expect(await runner('1122')).toBe(3);
	});

	test('should be that that the second example resolves to 3', async () => {
		expect(await runner('1111')).toBe(4);
	});

	test('should be that that the third example resolves to 0', async () => {
		expect(await runner('1234')).toBe(0);
	});

	test('should be that that the fourth example resolves to 9', async () => {
		expect(await runner('91212129')).toBe(9);
	});
});
