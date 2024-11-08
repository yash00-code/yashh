function removeDuplicates(arr) {
    let uniqueArray = [];
  
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    
    return uniqueArray;
}


console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 3])); // [1, 2, 3, 4, 5]
console.log(removeDuplicates([10, 20, 10, 30, 20]));   // [10, 20, 30]
console.log(removeDuplicates([1, 1, 1, 1, 1]));        // [1]
