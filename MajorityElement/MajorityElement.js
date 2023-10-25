function majorityElement(arrayNum) {
    let uniqueArray = [...new Set(arrayNum)];
    const hashMap = new Map();
    let maxCount = 0;
    let majorityElement = null;
  
    for (let i = 0; i < uniqueArray.length; i++) {
      let count = 0;
  
      for (let j = 0; j < arrayNum.length; j++) {
        if (uniqueArray[i] === arrayNum[j]) {
          count++;
        }
      }
  
      hashMap.set(uniqueArray[i], count);
  
      if (count > maxCount) {
        maxCount = count;
        majorityElement = uniqueArray[i];
      }
    }
  
    console.log(hashMap);
    return majorityElement;
  }
  
  const array = [2, 2, 3, 1, 1, 2, 2, 3, 3, 3, 3];
  const majorityElementValue = majorityElement(array);
  console.log(majorityElementValue);
  