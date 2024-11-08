function printDiamondPattern(totalRows) {
    let nsp = Math.floor(totalRows / 2); 
    let nst = 1; 
    for (let row = 1; row <= totalRows; row++) { 
        // Print spaces
        for (let sp = 1; sp <= nsp; sp++) {
            process.stdout.write(" ");
        }

        // Print stars
        for (let st = 1; st <= nst; st++) {
            process.stdout.write("*");
        }

        console.log(); 

        
        if (row < Math.ceil(totalRows / 2)) {   
            nsp -= 1;  
            nst += 2; 
        } else {           
            nsp += 1;  
            nst -= 2;  
        }
    }
}


printDiamondPattern(9)
