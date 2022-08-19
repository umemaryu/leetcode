/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start

function romanToInt(s: string): number {
	const list = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
	let sum = 0;

	for (let i = 0; i < s.length; i++) {
		const symbol: string = s[i];
		if (i == 0) {
			sum += list[symbol as keyof typeof list];
			continue;
		}

		const prevSymbol: string = s[i - 1];
		if (
			(prevSymbol == "I" && (symbol == "V" || symbol == "X")) ||
			(prevSymbol == "X" && (symbol == "L" || symbol == "C")) ||
			(prevSymbol == "C" && (symbol == "D" || symbol == "M"))
		) {
			sum += list[symbol] - 2 * list[prevSymbol];
		} else {
			sum += list[symbol as keyof typeof list];
		}
	}
	return sum;
}
// @lc code=end
