/*
 OlogN
 only for sorted data
*/

export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const mid = Math.floor(lo + (hi - lo) / 2);
        if (haystack[mid] === needle) return true;
        if (haystack[mid] > needle) hi = mid;
        if (haystack[mid] < needle) lo = mid + 1;
    } while (lo < hi);

    return false;
}
