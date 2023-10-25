// 9. Palindrome Number - LEETCODE

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1

var numberValue = -121;
// var numberValue = 121;

function checkIsPalindromeNumber(number){
    var strValue = number.toString();
    let reversedStr = "";
    let isPalindrome = true;

    for(let i = 0; i<strValue.length; i++){
        reversedStr += strValue[strValue.length - 1 - i];
    }

    for(let i = 0; i<strValue.length;i++){
        if(reversedStr[i] !== strValue[i]){
            isPalindrome = false;
        }
    }

    if(isPalindrome === false){
        console.log("false")
        return false;
    }
    else if(isPalindrome === true){
        console.log("true")
        return true;
    }

}

checkIsPalindromeNumber(numberValue);