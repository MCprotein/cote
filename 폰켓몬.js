function solution(nums) {
    const arr = [...new Set(nums)];
    return arr.length >= nums.length/2 ? nums.length/2 : arr.length;
}