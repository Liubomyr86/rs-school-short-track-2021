/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.replace(/([a-z])\1*/g, (substring) => (substring.length > 1 ? substring.length + substring[0] : substring[0]));
}

module.exports = encodeLine;
