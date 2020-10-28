/**
 * Returns the nth digit of a number.
 *
 * This is actually faster than converting it to a string and getting its length.
 *
 * @param n the number of whichs length will be returned
 */
export function numAt(n: number, p: number): number {
	return parseInt(n.toString()[p], 10) || 0;
}

/**
 * Returns the nth digit of a number.
 *
 * @deprecated left here for novelty reasons
 */
export function numAtMath(n: number, p: number): number {
	return Math.floor((n / Math.pow(10, Math.floor(Math.log10(Math.abs(n))) - p)) % 10);
}

// Performance comparison
// tslint:disable-next-line: max-line-length
// https://perf.link/#eyJpZCI6ImtvNHM5emtvYnJ5IiwidGl0bGUiOiJGaW5kaW5nIHRoZSBudGggbnVtYmVyIGluIGFuIGludGVnZXIiLCJiZWZvcmUiOiJmdW5jdGlvbiBudW1BdChuLCBwKSB7XG5cdHJldHVybiBNYXRoLmZsb29yKChuIC8gTWF0aC5wb3coMTAsIE1hdGguZmxvb3IoTWF0aC5sb2cxMChNYXRoLmFicyhuKSkpIC0gcCkpICUgMTApO1xufVxuXG5mdW5jdGlvbiBudW1BdFN0cihuLCBwKSB7XG5cdHJldHVybiBwYXJzZUludChuLnRvU3RyaW5nKClbcF0sIDEwKTtcbn1cbiIsInRlc3RzIjpbeyJuYW1lIjoiU3RyIiwiY29kZSI6Im51bUF0U3RyKDEyMzQ1Njc4LCA1KSIsInJ1bnMiOlszNzMwMDAsMTMyNTAwMCwxMDY3MDAwLDIwMDAwMCwyMzA1MDAwLDI1MDYwMDAsMTc0MDAwMCwyMzI2MDAwLDc4ODAwMCw2NzAwMDAsMTY5NTAwMCwyNTM4MDAwLDg0MjAwMCwxMDAwLDE2NTcwMDAsMTE0ODAwMCwxNjE2MDAwLDU5MTAwMCwzMjAwMDAsMTg4NDAwMCwyNTI2MDAwLDE0MzIwMDAsNjkyMDAwLDE2MzgwMDAsMjU2MzAwMCwzNDMwMDAsMjYyMzAwMCwxMDg5MDAwLDE4NzAwMDAsNzgyMDAwLDEwOTYwMDAsOTYwMDAsMTgwNTAwMCw0OTIwMDAsMTc1OTAwMCwxMTUwMDAwLDIyNjQwMDAsMTQyNzAwMCwyMTU4MDAwLDEwNDAwMCwxMzQ1MDAwLDI1NzAwMCwxNzU2MDAwLDI2OTIwMDAsMTQ5NzAwMCwyOTUwMDAsMjQxNDAwMCwyMjU1MDAwLDg4NjAwMCwxOTg5MDAwLDI2MDgwMDAsMTE1MDAwMCwyNjMwMDAsMjI1MDAwLDExNDUwMDAsMTA3MTAwMCwxODM2MDAwLDIzNzkwMDAsMTIxOTAwMCwyMzE4MDAwLDQ5MDAwMCwxMDAwLDI1NjAwMDAsNTk1MDAwLDIwMDAsMTcwMDAsMTQ0NTAwMCwxNDQ1MDAwLDE4MjcwMDAsMTYyMzAwMCw4MzkwMDAsMjQwMDAsMTkwMDAwMCwzODgwMDAsMjI4MDAwMCwxMDAwLDIwMDAwLDI2NzkwMDAsMTMzOTAwMCwyODE0MDAwLDE3OTAwMCwxMDI1MDAwLDE3NjUwMDAsMTY5MTAwMCwxNjUxMDAwLDI4NjIwMDAsMjcxNjAwMCwyNjgxMDAwLDU5NjAwMCwzNDQwMDAsMTM2MDAwMCwxNzg2MDAwLDkxNjAwMCw0MjQwMDAsMzU1MDAwLDEzOTEwMDAsMjEyNDAwMCwyODUzMDAwLDEyMTkwMDAsOTk4MDAwXSwib3BzIjoxMzQzMjYwfSx7Im5hbWUiOiJNYXRoIiwiY29kZSI6Im51bUF0KDEyMzQ1Njc4LCA1KSIsInJ1bnMiOlszNzUwMDAsNjMyMDAwLDM1MTAwMCw3ODkwMDAsMzMxMDAwLDEzODkwMDAsMTAwMCwxMDYwMDAwLDU1NjAwMCwxNDQwMDAsMTcwODAwMCw5OTUwMDAsMTcwMTAwMCwxMzU5MDAwLDE2ODgwMDAsNjYwMDAsMTAwMCw0OTMwMDAsODA3MDAwLDEzNjMwMDAsNzQ4MDAwLDk3NjAwMCwxMTI1MDAwLDE0MTYwMDAsMTEyNjAwMCw3MDIwMDAsNTI0MDAwLDExODMwMDAsOTc4MDAwLDE2MDUwMDAsNjE2MDAwLDk0MTAwMCwxNTE2MDAwLDc1NzAwMCw1ODAwMDAsMTQwMDAwLDUwMDAsMTAwNTAwMCwxNDQ1MDAwLDY2MDAwLDI1MDAwLDg2NzAwMCw3NDkwMDAsMTQxNDAwMCwxODQwMDAwLDMzNTAwMCw5NjUwMDAsMTUyNzAwMCwxMzYwMDAsMTI0NjAwMCwxMjk2MDAwLDE1MTEwMDAsMTQxMTAwMCwzMDMwMDAsMTEyMjAwMCw0NzUwMDAsMTAwMCwzMDcwMDAsMTE5MzAwMCwyMTkwMDAsMTcxNzAwMCwxMDAwLDE2MjMwMDAsMTAzOTAwMCwxMjU4MDAwLDEwNDkwMDAsMTUyMTAwMCwxMDc1MDAwLDE0NzcwMDAsMTEyNTAwMCw1NzgwMDAsODc1MDAwLDU1MTAwMCwzOTMwMDAsMTA0MDAwMCwxMTUzMDAwLDc3OTAwMCw3OTgwMDAsNjk0MDAwLDE1NjAwMCw5MTMwMDAsMTk4MDAwLDY5MDAwLDY3ODAwMCwxMjYxMDAwLDU5MDAwMCwxNjAzMDAwLDEwMDAsMzM2MDAwLDY0MjAwMCw3NzQwMDAsMTAwMCwxMzY5MDAwLDIxOTAwMCw3MjUwMDAsNTgwMDAsOTcwMDAsMTA1MTAwMCwxMDExMDAwLDEyMzAwMF0sIm9wcyI6ODA4MjYwfV0sInVwZGF0ZWQiOiIyMDIwLTA5LTAxVDIyOjUxOjQxLjkxN1oifQ%3D%3D
