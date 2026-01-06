

/**
    use sum of n elements = n * (n + 1) / 2 
    time complexity: O(n)
    space complexity: O(1)
 */

function missingNumber(nums: number[]): number {
    const n = nums.length
    const expectedSum = n * (n + 1) / 2

    let actualSum = 0
    for (const num of nums) {
        actualSum += num
    }

    return expectedSum - actualSum
};