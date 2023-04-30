/*
  Given two crystal balls that will break if dropped from high enough distance, determine the exact spot in which it will break in the most optimized way.

  This assumes an array of booleans, e.g. [false, false, false, true, true, true].

  O(sqrt(N))
*/

export default function two_crystal_balls(breaks: boolean[]): number {
    const { length } = breaks;
    const jumpAmount = Math.floor(Math.sqrt(length));
    let i = jumpAmount;

    for (; i < length; i += jumpAmount) if (breaks[i]) break;

    i -= jumpAmount;

    for (let j = 0; j <= jumpAmount && i < length; ++j, ++i)
        if (breaks[i]) return i;

    return -1;
}
