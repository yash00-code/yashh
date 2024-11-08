function isPalindrome(str) {
  
    str = str.toLowerCase();

    
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}



console.log(isPalindrome("hello"));//true   
console.log(isPalindrome("Madam"))//false