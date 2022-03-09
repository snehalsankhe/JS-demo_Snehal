const fs = require("fs");

const asyncFunction = (err, data) => {
    if (err) throw err;
    // Display the data
    console.log("Data..........", data);
    fs.writeFile('./write.txt', data, (err) => {
        if (err) {
            fs.writeFile('./error.txt', 'Error', (err) => {
                if (err)  throw err;
                console.log("Error........", err);
            })
        } else {
            fs.writeFile('./error.txt', 'successful.', (err) => {
                if (err)  throw err;
                console.log("Message on error txt file...........", 'successful.');
            })
        }
        console.log("Write Data ...............", data);
    });
}

fs.readFile('./read.txt', "utf8", asyncFunction);