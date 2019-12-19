import { gcd } from './gcd.function';

describe(`Greatest common divisor`, () => {
	test(`should return 20 with 120 and -20`, async () => {
		expect(gcd(120, -20)).toBe(20);
	});

	test(`should return 3 with 3, 3`, async () => {
		expect(gcd(3, 3)).toBe(3);
	});
});
