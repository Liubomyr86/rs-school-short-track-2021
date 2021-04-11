/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const finalArr = arr;
  let newArr = arr;

  newArr = newArr.filter((elem) => elem !== -1).sort((a, b) => a - b);

  let newArrIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (finalArr[i] !== -1) {
      finalArr[i] = newArr[newArrIndex];
      newArrIndex++;
    }
  }
  return finalArr;
}

module.exports = sortByHeight;
