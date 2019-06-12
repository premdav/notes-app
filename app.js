const chalk = require('chalk');
const getNotes = require('./notes.js');

const notes = getNotes();
console.log(notes);
console.log(chalk.blue.inverse('Success'));