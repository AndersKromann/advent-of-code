import { bench, read } from '@lib';
import { lcm } from '@lib/functions';
import * as p from 'path';
import { day, year } from '.';

import { Worker } from 'worker_threads';
import { FindCycleWorkerData } from './worker/cycle.worker';
// export const planeState = (moons: Moon[], plane: 'x' | 'y' | 'z'): string =>
// 	moons.map(m => `${m.pos[plane]},${m.vel[plane]}`).join(';');

export const findCycleOnWorker = (workerData: FindCycleWorkerData) => {
	return new Promise<number>((resolve, reject) => {
		const worker = new Worker(p.resolve(__dirname, './worker/ts.worker.js'), {
			workerData: { path: './cycle.worker.ts', ...workerData }
		});
		worker.on('message', resolve);
		worker.on('error', reject);
		worker.on('exit', code => {
			if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
		});
	});
};

export const runner = async (input: string) => {
	const [cx, cy, cz] = (
		await Promise.all([
			findCycleOnWorker({ input, plane: 'x' }),
			findCycleOnWorker({ input, plane: 'y' }),
			findCycleOnWorker({ input, plane: 'z' })
		])
	).map(r => (r as any).result as number);
	return lcm(lcm(cx, cy), cz);
};

if (require.main === module) {
	// 332477126821644 ~870ms (~89ms without worker threads)
	(async () => console.log(`Result: ${await bench(read(year, day), runner)}`))();
}
