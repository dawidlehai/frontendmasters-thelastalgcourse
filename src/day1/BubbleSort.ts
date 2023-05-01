/*
  - you need to compare each pairs
  - after each iteration there will be one less pair to compare as the highest number is in its place
  - running time O(n^2)
*/

export default function bubble_sort(arr: number[]): void {
    for (let n = arr.length - 1; n > 1; n--)
        for (let i = 0; i < n; i++)
            if (arr[i] > arr[i + 1])
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}
