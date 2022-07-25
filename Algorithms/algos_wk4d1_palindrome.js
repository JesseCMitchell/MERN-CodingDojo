/**
 * /*
 *   Given to me (Neil) in an interview
 *   Given a string
 *   return whether or not it's possible to make a palindrome out of the string's
 *   characters.
 *   What is it about a string that makes it possible for it to become a
 *   palindrome?
 *
 * @format
 */

const str1 = '';
const expected1 = false;

const str2 = 'a';
const expected2 = true;

const str3 = 'ddaa';
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = 'dda';
const expected4 = true;
// Explanation: "dad"

const str5 = 'aaadd';
const expected5 = true;
// Explanation: "daaad"

const str6 = 'abbcc';
const expected6 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {
	if (str.length == 0) return false;
	let charArray = str.split('');
	let charFreq = {};
	for (let i = 0; i < charArray.length; i++) {
		if (!charFreq.hasOwnProperty(charArray[i])) {
			charFreq[charArray[i]] = 0;
		}
		if (charFreq[charArray[i]] == 2) {
			charFreq[charArray[i]] = 0;
		}
		charFreq[charArray[i]] += 1;
	}
	let count = 0;
	for (let key in charFreq) {
		if (charFreq[key] == 1) count++;
	}
	return count <= 1 ? true : false;
}

console.log(canStringBecomePalindrome(str1));
console.log(canStringBecomePalindrome(str2));
console.log(canStringBecomePalindrome(str3));
console.log(canStringBecomePalindrome(str4));
console.log(canStringBecomePalindrome(str5));
console.log(canStringBecomePalindrome(str6));
