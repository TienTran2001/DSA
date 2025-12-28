/**
    time complexity: 0(n)
    space complexity: 0(1) 
 */

function removeElement(nums: number[], val: number): number {
    const n = nums.length
    let k = 0

    for (let i = 0; i < n; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }

    return k
};