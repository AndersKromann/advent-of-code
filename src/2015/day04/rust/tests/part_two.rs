use aoc::Solvable;

#[test]
fn input() {
	let input = aoc::reader(2015, 4, "input.txt");
	assert_eq!(aoc1504::PartTwo::solve(&input), 0);
}

#[test]
fn example() {
	let input = aoc::reader(2015, 4, "example.txt");
	assert_eq!(aoc1504::PartTwo::solve(&input), 0);
}