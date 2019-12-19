import { lcm } from './lcm.function';

describe(`Least common multiple`, () => {
	test(`should return 120 with 120 and -20`, async () => {
		expect(lcm(120, -20)).toBe(120);
	});

	test(`should return 3 with 3, 3`, async () => {
		expect(lcm(3, 3)).toBe(3);
	});
});
