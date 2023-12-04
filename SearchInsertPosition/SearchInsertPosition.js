// 35. Search Insert Position - LEETCODE

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 
// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

// const nums1 = [1,3,5,6];
// const target1 = 5;

// const nums2 = [1,3,5,6];
// const target2 = 7

// const nums3 = [1,3,5,6];
// const target3 = 2;

// const nums4 = [1,3,5];
// const target4 = 4;


/***************** PRVOBITNO RESENJE, PRODJE 62/65 testa, jer time complexity bude n2 umest logn ********************/

// var searchInsert = function(nums, target) {
//     if(nums.length === 1 && nums[0] < target){
//         console.log("sadas")
//         return 1;
//     }
//     if(nums.length === 1 && nums[0] > target){
//         return 0;
//     }
//     for(let i=0; i<=nums.length; i++){
//         if(nums[i] === target){
//             return i;
//         }
//         for(let j=i+1; j<=nums.length; j++){
//             console.log("I: " + i + ", J: " + j);
//             if(target > nums[i] && target <nums[j] && nums.includes(target) === false && j-i === 1){
//                 console.log("nums i: " + nums[i] + " , i: " + i + " j: " + j + ", nums j: " + nums[j]);
//                 return i+1;
//             }
//             if(target > nums[nums.length-1]){
//                 return nums.length;
//             }
//         }
//     }
//     return 0;
// };

// console.log(searchInsert(nums4, target4));

 const nums2 = [1,3,5,6];
 const target2 = 7;

 var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};

console.log(searchInsert(nums2, target2));