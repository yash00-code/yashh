
function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let div = 2; div <= Math.sqrt(num); div++) {
        if (num % div === 0) {
            return false; 
        }
    }
    
    return true; 
}


console.log(isPrime(2));  
console.log(isPrime(4));  
console.log(isPrime(17)); 


