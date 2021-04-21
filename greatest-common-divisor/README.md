# Euclidean Algorithm

The Euclidean algorithm, or Euclid's algorithm, is an efficient method for
computing the greatest common divisor (GCD) of two integers (numbers), the
largest number that divides them both without a remainder.

The Euclidean algorithm is based on the principle that the greatest common
divisor of two numbers does not change if the larger number is replaced by its
difference with the smaller number. For example, `21` is the GCD of `252` and
`105` (as `252 = 21 × 12` and `105 = 21 × 5`), and the same number `21` is also
the GCD of `105` and `252 − 105 = 147`. Since this replacement reduces the
larger of the two numbers, repeating this process gives successively smaller
pairs of numbers until the two numbers become equal. When that occurs, they are
the GCD of the original two numbers.

By reversing the steps, the GCD can be expressed as a sum of the two original
numbers each multiplied by an integer, e.g., `21 = 5 × 105 + (−2) × 252`. The
fact that the GCD can always be expressed in this way is known as Bézout's
identity.

_Source [Wikipedia](https://en.wikipedia.org/wiki/Euclidean_algorithm)_

![24x60](https://upload.wikimedia.org/wikipedia/commons/7/74/24x60.svg)

A 24-by-60 rectangle is covered with ten 12-by-12 square tiles, where 12 is the
GCD of 24 and 60. More generally, an a-by-b rectangle can be covered with square
tiles of side-length c only if c is a common divisor of a and b.

_Source
[Wikipedia](https://upload.wikimedia.org/wikipedia/commons/7/74/24x60.svg)_

![Euclidean-Algorithm-Animation](https://upload.wikimedia.org/wikipedia/commons/1/1c/Euclidean_algorithm_1071_462.gif)

Animation of the Euclidean algorithm for 1071 and 462. The initial green
rectangle has dimensions a = 1071 and b = 462. Square 462x462 tiles are added
until a green 462x147 rectangle remains. This is tiled with square 147x147 tiles
until a 21x147 rectangle remains. This third rectangle is tiled with 21x21
square tiles, leaving no remainder. Thus, 21 is the greatest common divisor of
1071 and 462.

_Source
[Wikipedia](https://upload.wikimedia.org/wikipedia/commons/1/1c/Euclidean_algorithm_1071_462.gif)_

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Euclidean_algorithm)
