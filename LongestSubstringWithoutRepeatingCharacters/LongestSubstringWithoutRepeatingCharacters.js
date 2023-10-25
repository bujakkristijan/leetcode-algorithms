//3.Longest Substring Without Repeating Characters

//Given a string s, find the length of the longest substring without repeating characters

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */

//test cases
s = "abcabcbb"
// s = "bbbbb"
// s = "pwwkew"

function returnSubstringsWithoutRepeat(s) {
    let allSubStr = [];
    for (let i = 0; i < s.length; i++) {
      let subStr = "";
      for (let j = i; j < s.length; j++) {
        if (subStr.includes(s[j])) {
          break;
        }
        subStr += s[j];
      }
      allSubStr.push(subStr);
    }
    return allSubStr;
  }
  
  function maxLengthSubstr(strArray) {
    let longestSubStr = "";
    let maxLength = 0;
    for (let i = 0; i < strArray.length; i++) {
      if (strArray[i].length > maxLength) {
        maxLength = strArray[i].length;
        longestSubStr = strArray[i];
      }
    }
    console.log(longestSubStr);
    return maxLength;
  }
  
  function lengthOfLongestSubstring (s) {
    if(s.length === 1){
        return 1;
    }
    else if(s === ""){
        return 0;
    }
    let subStrArray = returnSubstringsWithoutRepeat(s);
    let maxLen = maxLengthSubstr(subStrArray);
    return maxLen;
  };

  console.log(lengthOfLongestSubstring(s));
  
