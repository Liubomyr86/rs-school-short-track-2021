/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('').map((elem) => +elem);
  const min = Math.min(...arr);
  let newNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === min) {
      arr.splice(i, 1);
      break;
    }
  }

  newNum = arr.join('');

  return +newNum;
}

module.exports = deleteDigit;
