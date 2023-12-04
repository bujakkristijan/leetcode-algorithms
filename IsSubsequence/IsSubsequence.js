// let s = "aaaaaa";
// let t = "bbaaaa";

let s = "aaaaaa";
let t = "bbaaaa";
var isSubsequence = function(s, t) {
    let isFound;
    let indexFound=-1;
    if(s.length === 0){
        return true
    }
    for(let i = 0; i< s.length; i++){
        isFound = false;
        for(let j=0; j<t.length; j++){
            if(s[i] === t[j] && j>=indexFound){
                isFound = true;
                indexFound = j;
                console.log("index found: " + indexFound + " , " + s[i] + " , " + t[j]);
                break;
            }
        }
        if(isFound === false){
            return false;
        }
    }
    if(isFound === false){
        return false;
    }
    else{
        return true;
    }
};

// let s = "abc";
// let t = "ahbgdc";

console.log(isSubsequence(s, t));

// bolje resenje
// function isSubsequence(s, t) {
//     let i = 0; // Pointer for s
//     let j = 0; // Pointer for t
  
//     while (i < s.length && j < t.length) {
//       if (s[i] === t[j]) {
//         i++;
//       }
//       j++; 
//     }
//   
//     return i === s.length;
//   }


