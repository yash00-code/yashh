function reverseNumber(n) {
    
    let reversed = n.toString().split('').reverse().join('');
    

    return parseInt(reversed, 10);
}


console.log(reverseNumber(12345));  // Output: 54321
console.log(reverseNumber(987));  // Output: 56789
