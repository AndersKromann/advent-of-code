import { clamp, pairs } from '@lib/functions';
import { Vec3 } from '@lib/model/vec3.class';
import { parentPort, workerData } from 'worker_threads';
import { Moon } from '../model/moon.class';
import { parseLines } from '../parse';

export interface FindCycleWorkerData {
	input: string;
	plane: 'x' | 'y' | 'z';
}

export const findCycle = (ms: Moon[], ps: Moon[][], plane: 'x' | 'y' | 'z'): number | undefined => {
	for (let i = 0; ; i++) {
		ps.forEach(([a, b]) => {
			const d = clamp(b.pos[plane] - a.pos[plane]);
			a.vel[plane] += d;
			b.vel[plane] -= d;
		});
		ms.forEach(m => m.step(plane));
		if (ms.every(m => m.vel.equals(Vec3.ORIGO))) {
			return 2 + i * 2;
		}
	}
};

const input = workerData as FindCycleWorkerData;
const ms = parseLines(input.input).map(m => new Moon(m));
const ps = pairs(ms);
parentPort?.postMessage({ result: findCycle(ms, ps, input.plane) });
parentPort?.close();
