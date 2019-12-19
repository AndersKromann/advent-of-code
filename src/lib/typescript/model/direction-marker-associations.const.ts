import { Vec2 } from './vec2.class';

console.log(typeof Vec2);
console.log(Vec2);
export const directionMarkerAssociations: { [key: string]: Vec2 } = {
	'^': new Vec2(0, 1),
	'>': new Vec2(1, 0),
	v: new Vec2(0, -1),
	'<': new Vec2(-1, 0),
	'': new Vec2(0, 0)
};

export const directionMarkerInvert: { [key: string]: string } = {
	'^': 'v',
	'>': '<',
	v: '^',
	'<': '>',
	'': ''
};
