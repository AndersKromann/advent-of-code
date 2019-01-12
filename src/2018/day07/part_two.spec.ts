import { runner } from './part_two';
import { Node } from './node.class';

describe('Day 7 Part Two', () => {
	const node_a: Node = new Node('a');
	const node_A: Node = new Node('A');
	const node_b: Node = new Node('b');
	const node_z: Node = new Node('z');

	const a_cost_short = 1;
	const a_cost_long = 61;
	const b_cost_short = 2;
	const b_cost_long = 62;
	const z_cost_long = 86;

	let resultExample: number;
	let resultMain: number;
	beforeAll(async () => {
		resultExample = await runner('example');
		resultMain = await runner();
	});
	it('Node cost is equal regardless of casing', () => {
		expect(node_a.cost()).toEqual(node_A.cost());
	});

	it(`Node cost of 'a' is ${a_cost_long}`, () => {
		expect(node_a.cost(true)).toEqual(a_cost_long);
	});

	it(`Node cost of non base 'a' is ${a_cost_short}`, () => {
		expect(node_a.cost()).toEqual(a_cost_short);
	});

	it(`Node cost of 'b' is ${b_cost_long}`, () => {
		expect(node_b.cost(true)).toEqual(b_cost_long);
	});

	it(`Node cost of non base 'b' is ${b_cost_short}`, () => {
		expect(node_b.cost()).toEqual(b_cost_short);
	});

	it(`Node cost of 'z' is ${z_cost_long}`, () => {
		expect(node_z.cost(true)).toEqual(z_cost_long);
	});

	it(`Example should finish in the given ticks`, async () => {
		expect(resultExample).toEqual(15);
	});

	it(`Main should finish in given ticks`, async () => {
		expect(resultMain).toEqual(1115);
	});
});