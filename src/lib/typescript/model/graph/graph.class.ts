import { Node } from './node.class';

export class Graph<T = string> {
	public nodes: Node<T>[] = [];

	public constructor() {}

	public aStar(_start: Node<T>, _goal: Node<T>, _h: (n: Node<T>) => number) {}
}
