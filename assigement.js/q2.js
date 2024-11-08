function printStars(rows) {
    for (let row = rows; row >= 1; row--) {
        // Print stars for each row
        for (let star = 1; star <= row; star++) {
            process.stdout.write("*");
        }
        console.log();
    }
}

printStars(4);
