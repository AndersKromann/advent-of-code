import { Heuristic } from './heuristic.type';
import { Node } from './node.class';

export class Graph<T = string, N extends Node<T> = Node<T>> {
	public nodeMap = new Map<string, N>();

	public constructor() {}

<<<<<<< HEAD
	public aStar(_start: Node<T>, _goal: Node<T>, _h: (n: Node<T>) => number) {}
=======
	public aStar(_start: N, _goal: N, _h: Heuristic<T>) {}
>>>>>>> master
}
