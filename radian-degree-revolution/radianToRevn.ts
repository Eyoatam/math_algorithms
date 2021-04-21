/**
 * @param rad - the value of radian to be converted to revolution
 */

export default function radianToRevn(rad: number): number {
  const deg = rad * (180 / Math.PI);
  return 360 / deg;
}

console.log(radianToRevn(4));
