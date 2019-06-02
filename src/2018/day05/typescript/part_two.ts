import { collapse } from './collapse.function';
import { bench } from '@root/bench.function';
import { reader } from '@root/reader.function';
import { year, day } from '.';

export const runner = async (input: string) => {
	const uniqueUnits = [...input].reduce((acc, curr) =>
		acc.includes(curr.toLowerCase()) ? acc.toLowerCase() : acc + curr.toLowerCase()
	);

	let shortestSequence: string;
	let shortestSequenceRemovedUnit: string;

	for (let unit of uniqueUnits) {
		let modifiedSequence = [...input].reduce((acc, curr) => (curr.toLowerCase() === unit ? acc : acc + curr));
		let collapsedSequence = collapse(modifiedSequence);
		if (shortestSequence === undefined || collapsedSequence.length < shortestSequence.length) {
			shortestSequence = collapsedSequence;
			shortestSequenceRemovedUnit = unit;
		}
	}

	console.log(`The removed unit is: ${shortestSequenceRemovedUnit}`);
	return shortestSequence.length;
};

if (require.main === module) {
	(async () => console.log(`Result: ${await bench(reader(year, day), runner)}`))(); // 6394 ~326ms
}