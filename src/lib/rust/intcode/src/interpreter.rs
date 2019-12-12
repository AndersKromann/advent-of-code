use std::collections::HashMap;

pub struct IntCode<T = i64> {
	tape: HashMap<T, T>,
	cursor: T,
}

impl IntCode<i64> {
	pub fn new(tape: Vec<i64>) -> IntCode<i64> {
		IntCode {
			tape: HashMap::new(),
			cursor: 0,
		}
	}
}
