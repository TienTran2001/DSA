function singleNumber(nums: number[]): number {
   const n = nums.length

    if (n === 1) return nums[0]

    let i = 0
    let res = 0
    while (i < n) {
        res ^= nums[i]
       
        i++
    }

    return res
};