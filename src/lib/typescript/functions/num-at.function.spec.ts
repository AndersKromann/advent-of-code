import { numAt } from './num-at.function';

describe(`Number at`, () => {
	test(`should work with numbers longer than the position`, async () => {
		expect(numAt(123, 1)).toBe(2);
		expect(numAt(7653, 3)).toBe(3);
		expect(numAt(85476847, 0)).toBe(8);
	});

	test(`should work with the position being negative`, async () => {
		expect(numAt(123, -1)).toBe(0);
		expect(numAt(7653, -2)).toBe(0);
	});
});
