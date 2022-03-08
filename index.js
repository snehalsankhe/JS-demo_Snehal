const fs = require('fs');
const read = fs.createReadStream('./01-objects/file1.txt');
const write = fs.createWriteStream('./01-objects/file2.txt');   
read.pipe(write);

