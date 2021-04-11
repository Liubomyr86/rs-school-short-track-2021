/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');
  let count = 0;

  const objS1 = arrS1.reduce((acc, elem) => {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
  }, {});

  const objS2 = arrS2.reduce((acc, elem) => {
    acc[elem] = (acc[elem] || 0) + 1;
    return acc;
  }, {});

  const keys = Object.keys(objS1);
  for (let i = 0; i < keys.length; i++) {
    if (objS2[keys[i]]) {
      if (objS1[keys[i]] < objS2[keys[i]]) {
        count += objS1[keys[i]];
      } else {
        count += objS2[keys[i]];
      }
    }
  }

  /* for (const prop in objS1) {
    if (objS2.hasOwnProperty(prop) === true) {
      if (objS1[prop] < objS2[prop]) {
        count += objS1[prop];
      } else {
        count += objS2[prop];
      }
    }
  } */

  return count;
}

module.exports = getCommonCharacterCount;
