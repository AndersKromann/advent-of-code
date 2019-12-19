import { ripple } from '../functions/ripple.function';

describe('Day 11, ripple', () => {
	test('Should be only 40 of them:', () => {
		expect(ripple(5, 3, 4).length).toBe(40);
	});
});
