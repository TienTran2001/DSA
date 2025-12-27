function isPalindrome(x: number): boolean {
    const str = x.toString()
    const reverseStr = str.split("").reverse().join("")
    if (str === reverseStr) return true
    return false
};