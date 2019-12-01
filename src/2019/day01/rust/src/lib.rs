use rayon::prelude::*;
use std::cmp;

pub struct PartOne;
pub struct PartTwo;

impl aoclib::Solvable<&str, i32> for PartOne {
	/// 3399947, ~1.6μs
	fn solve(input: &str) -> aoclib::Solution<i32> {
		Ok(input
			.lines()
			.map(|n| (n.parse::<i32>().unwrap_or(0) / 3) - 2)
			.sum())
	}
}

impl aoclib::Solvable<&Vec<i32>, i32> for PartTwo {
	// 5097039, ~3.6μs
	fn solve(input: &Vec<i32>) -> aoclib::Solution<i32> {
		Ok(input.iter().map(|n| PartTwo::fuel_rec(*n)).sum())
	}
}

impl PartTwo {
	pub fn interpret(input: &str) -> Vec<i32> {
		input
			.lines()
			.filter_map(|l| l.parse::<i32>().ok())
			.collect()
	}
	fn fuel(i: i32) -> i32 {
		cmp::max((i / 3) - 2, 0)
	}

	fn fuel_rec(i: i32) -> i32 {
		let f = PartTwo::fuel(i);
		f + if f > 0 { PartTwo::fuel_rec(f) } else { 0 }
	}
}
