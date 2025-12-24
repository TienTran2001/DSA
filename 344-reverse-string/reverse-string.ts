/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    const n = s.length
    let l = 0
    let r = n - 1

    let temp;
    while(l < r) {
        temp = s[l]
        s[l] = s[r]
        s[r] = temp

        l++, r--
    }
};