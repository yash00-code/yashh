function fibonacci(n) {
    let sequence = [];
    
   
    if (n <= 0) {
        return sequence; 
    }
    
    
    
    sequence.push(0); 
    if (n > 1) {
        sequence.push(1); 
    }

    
    for (let i=2; i<n;i++){
        let nextNum=sequence[i-1]+sequence[i-2];
        sequence.push(nextNum);
    }

    return sequence;
}


console.log(fibonacci(5));
