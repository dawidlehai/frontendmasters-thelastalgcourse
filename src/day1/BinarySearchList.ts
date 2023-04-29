/*
 OlogN
 only for sorted data
*/

export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length;

    do {
        const mid = Math.floor(lo + (hi - lo) / 2);
        const val = haystack[mid];
        if (val === needle) return true;
        if (val > needle) hi = mid;
        if (val < needle) lo = mid + 1;
    } while (lo < hi);

    return false;
}
