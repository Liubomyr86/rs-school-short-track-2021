/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num = n;
  let digit = 0;
  let digit2 = 0;

  while (num) {
    digit += num % 10;
    num = Math.floor(num / 10);
  }

  if (digit >= 10) {
    while (digit) {
      digit2 += digit % 10;
      digit = Math.floor(digit / 10);
    }

    digit = digit2;
  }

  return digit;
}

module.exports = getSumOfDigits;
