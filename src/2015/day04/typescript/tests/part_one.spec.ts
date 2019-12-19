import { read } from '@lib';
import * as isCI from 'is-ci';
import { day, results, year } from '..';
import { runner } from '../part_one';

describe(`${year} - Day ${day} - Part One`, () => {
	test(`should resolve to ${results.one.input} when using the input`, async () => {
		if (!isCI) {
			expect(await runner((await read(year, day)()).input)).toBe(results.one.input);
		}
	}, 20000);

	test(`should resolve to ${results.one.example} when using the example`, async () => {
		if (!isCI) {
			expect(await runner((await read(year, day, 'example.txt')()).input)).toBe(results.one.example);
		}
	}, 20000);

	test(`should resolve to ${results.one.example} when using the second example`, async () => {
		if (!isCI) {
			expect(await runner((await read(year, day, 'example.2.txt')()).input)).toBe(results.one.example2);
		}
	}, 20000);
});
