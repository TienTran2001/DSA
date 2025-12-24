function removeDuplicates(nums: number[]): number {
    const n = nums.length

    if (n === 0 || n === 1) return 1

    let k = 1
    let j = 1

    while (j < n) {
        if (nums[j] !== nums[j - 1]) {
            nums[k] = nums[j]
            k++
        }
        j++
    }

    return k
};