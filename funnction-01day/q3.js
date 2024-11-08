//functions in arm strongs
function armstrong(num) {
    let originalNum = num;
    let nod = 0;

    // Calculate the number of digits
    while (num > 0) {
        num = Math.floor(num / 10);
        nod++;
    }

    // Reset num to original value
    num = originalNum;
    let sum = 0;

    // Calculate the Armstrong sum
    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, nod);
        num = Math.floor(num / 10);
    }

    // Check if the sum is equal to the original number
    if (sum === originalNum) {
        console.log("arms strong numbers");
        
    } else {
        console.log("no arms strong number");
        
    }
}

armstrong(153)