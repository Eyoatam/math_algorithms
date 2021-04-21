/**
 * @param rad - the value of radian to be converted to revolution
 */

export function radianToRevn(rad: number): number {
  const deg = rad * (180 / Math.PI);
  return 360 / deg;
}
