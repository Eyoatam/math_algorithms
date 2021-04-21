/**
 * @param rev - the value of revolution to be converted to radian
 */

export function revnToRadian(rev: number): number {
  const deg = 360 * rev;
  return deg * (Math.PI / 180);
}
