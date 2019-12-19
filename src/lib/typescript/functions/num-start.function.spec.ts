import { numStart } from './num-start.function';

describe(`Number start`, () => {
	test(`should work with numbers larger than the sliced part`, async () => {
		expect(numStart(12354267, 5)).toBe(12354);
		expect(numStart(7653, 2)).toBe(76);
		expect(numStart(85476847, 1)).toBe(8);
		expect(numStart(85476847, 0)).toBe(0);
	});

	test(`should work with numbers smaller than the sliced part`, async () => {
		expect(numStart(12354267, 8)).toBe(12354267);
		expect(numStart(7653, 4)).toBe(7653);
		expect(numStart(85476847, 8)).toBe(85476847);
	});

	test(
        `should work with numbers exactly as long as the sliced part`,
        async () => {
            expect(numStart(12, 5)).toBe(12000);
            expect(numStart(7653, 5)).toBe(76530);
            expect(numStart(85, 7)).toBe(8500000);
        }
    );

	test(`should work with 0`, async () => {
		expect(numStart(12354267, 0)).toBe(0);
	});
});
