import { read } from '@lib';
import { Args, day, results, year } from '..';
import { Node } from '../model/node.class';
import { runner } from '../part_two';

describe(`${year} - Day ${day} - Part Two`, () => {
	const NODE_A: Node = new Node('a');
	const NODE_UA: Node = new Node('A');
	const NODE_B: Node = new Node('b');
	const NODE_Z: Node = new Node('z');

	const A_COST_SHORT = 1;
	const A_COST_LONG = 61;
	const B_COST_SHORT = 2;
	const B_COST_LONG = 62;
	const Z_COST_LONG = 86;

	test('Node cost is equal regardless of casing', () => {
		expect(NODE_A.cost()).toBe(NODE_UA.cost());
	});

	test(`Node cost of 'a' is ${A_COST_LONG}`, () => {
		expect(NODE_A.cost(true)).toBe(A_COST_LONG);
	});

	test(`Node cost of non base 'a' is ${A_COST_SHORT}`, () => {
		expect(NODE_A.cost()).toBe(A_COST_SHORT);
	});

	test(`Node cost of 'b' is ${B_COST_LONG}`, () => {
		expect(NODE_B.cost(true)).toBe(B_COST_LONG);
	});

	test(`Node cost of non base 'b' is ${B_COST_SHORT}`, () => {
		expect(NODE_B.cost()).toBe(B_COST_SHORT);
	});

	test(`Node cost of 'z' is ${Z_COST_LONG}`, () => {
		expect(NODE_Z.cost(true)).toBe(Z_COST_LONG);
	});

	test(
        `should resolve to ${results.two.input} when using the input`,
        async () => {
            const { input, args } = await read<Args>(year, day)();
            expect(await runner(input, args)).toBe(results.two.input);
        }
    );

	test(
        `should resolve to ${results.two.example} when using the example`,
        async () => {
            const { input, args } = await read<Args>(year, day, 'example.txt')();
            expect(await runner(input, args)).toBe(results.two.example);
        }
    );
});
