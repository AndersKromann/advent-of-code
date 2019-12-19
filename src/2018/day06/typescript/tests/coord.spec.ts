import { day, year } from '..';
import { Coord } from '../model/coord.class';

describe(`${year} - Day ${day} - Coord`, () => {
	const a: Coord = new Coord(1, 1);
	const b: Coord = new Coord(3, 3);
	const c: Coord = new Coord(7, 2);

	test('should the manhattan distance between (1, 1) and (3, 3) be 4', () => {
		expect(a.manhattanCoord(b)).toBe(4);
	});

	test('should the manhattan distance between (3, 3) and (7, 2) be 4', () => {
		expect(b.manhattanCoord(c)).toBe(5);
	});

	test('should the that the manhattan distance is commutative', () => {
		expect(a.manhattanCoord(b)).toBe(b.manhattanCoord(a));
		expect(a.manhattanCoord(c)).toBe(c.manhattanCoord(a));
	});
});
