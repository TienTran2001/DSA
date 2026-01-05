function singleNumber(nums: number[]): number {
    let result = 0

    for (let bit = 0; bit < 32; bit++) {
        let bitCount = 0

        for (const num of nums) {
            bitCount += (num >> bit) & 1
        }

        if (bitCount % 3 !== 0) {
            result |= (1 << bit)
        }
    }

    return result
}
