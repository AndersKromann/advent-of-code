import { bench, read } from 'aoclib';
import { day, year } from '../typescript';
import { hashSearch } from './hash-search.function';

export const runner = hashSearch(5);

if (require.main === module) {
	(async () => console.log(`Result: ${await bench(read(year, day), runner)}`))(); // 346386 ~663ms
}
