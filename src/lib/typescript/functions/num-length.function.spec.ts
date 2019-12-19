import { numLength } from './num-length.function';

describe(`Number length`, () => {
	test(`should work with numbers larger than 1`, async () => {
		expect(numLength(123)).toBe(3);
		expect(numLength(7653)).toBe(4);
		expect(numLength(85476847)).toBe(8);
	});

	test(`should work with 1`, async () => {
		expect(numLength(1)).toBe(1);
	});

	test(`should work with 0`, async () => {
		expect(numLength(0)).toBe(0);
	});

	test(`should work with negative numbers`, async () => {
		expect(numLength(-34312)).toBe(5);
	});
});
