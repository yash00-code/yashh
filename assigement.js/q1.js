function printStars(rows) {
    for (let row=1;row<=rows;row++) {
        // Print stars for each row
        for (let star=1;star<=row;star++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

printStars(4);
