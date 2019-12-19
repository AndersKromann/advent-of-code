import { day, results, year } from '..';
import { runner } from '../part_two';

describe(`${year} - Day ${day} - Part Two`, () => {
	test('Should take 9 recipes for 5158916779 to appear:', async () => {
		expect(runner('5158916779')).toBe(9);
	});

	test('Should take 9 recipes for 51589 to appear:', async () => {
		expect(runner('51589')).toBe(9);
	});

	test('Should take 5 recipes for 0124515891 to appear:', async () => {
		expect(runner('0124515891')).toBe(5);
	});

	test('Should take 5 recipes for 01245 to appear:', async () => {
		expect(runner('01245')).toBe(5);
	});

	test('Should take 18 recipes for 9251071085 to appear:', async () => {
		expect(runner('9251071085')).toBe(18);
	});

	test('Should take 18 recipes for 92510 to appear:', async () => {
		expect(runner('92510')).toBe(18);
	});

	test('Should take 2018 recipes for 5941429882 to appear:', async () => {
		expect(runner('5941429882')).toBe(2018);
	});

	test('Should take 2018 recipes for 59414 to appear:', async () => {
		expect(runner('59414')).toBe(2018);
	});

	test(`should resolve to ${results.two.input} when using the input`, async () => {
		expect(runner('327901')).toBe(results.two.input);
	}, 20000);
});
