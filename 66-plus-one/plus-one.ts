/**
    time complexity: O(1 -> n)
    space complexity: O(1)
 */

function plusOne(digits: number[]): number[] {
    const n = digits.length

    for (let i = n - 1; i >= 0; i--) {
        digits[i] += 1

        if (digits[i] < 10) return digits

        digits[i] = 0

    }

    digits.unshift(1)

    return digits
};