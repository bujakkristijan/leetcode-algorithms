// 14. Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

let strs = ["folower","foloight","folkw"];
function longestCommonPrefix(arrayStr){
    let prefix = arrayStr[0];
    console.log(prefix);
    for(let i=1; i<arrayStr.length; i++){
        for(let j=0; j<prefix.length; j++){
            if(arrayStr[i][j] !== prefix[j]){
                prefix = prefix.substring(0, j); // prefix dobija novu vrednost, pa for petlja prolazi sledeci put samo kroz novi prefix, jer mora da odgovara za sve string vrednosti u nizu 
                console.log(prefix)
                break;
                }
            }
        }
    return prefix;
    }

console.log("Result: " + longestCommonPrefix(strs));


