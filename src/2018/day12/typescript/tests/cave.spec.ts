import { Cave } from '../model/cave.class';

describe('Day 12, Cave', () => {
	const inputs: string[] = [
		'....#.#....',
		'#.#',
		'#.#.',
		'.#.#',
		'.#.#.',
		'..#.#..',
		'...#.#...',
		'....#.#',
		'#.#....',
		'......#.#......',
		'......#.#'
	];

	test('Should be normalizing inputs on both ends:', () => {
		for (const input of inputs) {
			const cave = new Cave(input);
			cave.normalize();
			// tslint:disable-next-line: no-unused-expression
			expect(cave.row.startsWith('....#')).toBe(true);
			// tslint:disable-next-line: no-unused-expression
			expect(cave.row.endsWith('#....')).toBe(true);
		}
	});

	test('Should be a score of 325:', () => {
		const cave = new Cave('.#....##....#####...#######....#.#..##.');
		cave.offset = -3;
		expect(cave.score()).toBe(325);
	});
});
