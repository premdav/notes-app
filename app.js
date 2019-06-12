const fs = require('fs');

fs.writeFileSync('notes.txt', 'This file was created and written by a Node.js script');
fs.appendFileSync('notes.txt', '. This text was appended to the file previously created by Node.js');