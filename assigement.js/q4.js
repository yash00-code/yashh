function printPyramid(ans) {
    for (let i=1;i<=ans;i++) {  
        let nof = "";
        
     
        for (let j=1;j<=ans-i;j++) {  
            nof += " ";
        }

   
        for (let j=1;j<=i;j++) {
            nof += j;
        }

    
        for (let j=i-1;j>=1;j--){
            nof += j;
        }

        console.log(nof);  
    }
}

printPyramid(5);

