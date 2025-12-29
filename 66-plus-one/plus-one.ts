function plusOne(digits: number[]): number[] {
    const n = digits.length
    let k = 0
    for (let i = n - 1; i >= 0; i--) {
        if (i === n - 1) {
            digits[i] += 1
            if (digits[i] === 10) {
                k = 1
                digits[i] = 0
            } else {
                return digits
            }
        } else {
            digits[i] = digits[i] + k
            if (digits[i] === 10) {
                k = 1
                digits[i] = 0
            } else {
                k = 0
            }

        }

    }
    if (k !== 0) digits.unshift(1)
    return digits
};