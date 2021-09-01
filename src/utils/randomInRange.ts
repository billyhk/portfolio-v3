/**
 * A random number between the two arguments.
 * @param {number} min The minumum number in a range.
 * @param {number} max The maximum number in a range.
 * @returns {number}
 */
export const randomInRange = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
