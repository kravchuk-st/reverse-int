module.exports = function reverse (n) {
  let nReverse = String(Math.abs(n)).split('').reverse().join('');
  return Number(nReverse)
}
