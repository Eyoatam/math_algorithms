/**
 * @param deg - the value of degree to be converted to revolution
 */

export default function degreeToRev(deg: number): number {
  return deg / 360;
}

console.log(degreeToRev(45));
