const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicate = notes.find(note => note.title === title);
    if(!duplicate) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(chalk.green('Note was added'));
    } else {
        console.log(chalk.red('Note title already in use.'));
    }  
}

const removeNote = (title) => {
    const notes = loadNotes();
    const keep = notes.filter(note => { return note.title !== title});
    if(keep.length === notes.length) {
        console.log(chalk.red('No Note Found'));
    } else {
        saveNotes(keep);
        console.log(chalk.green('Note successfully removed'));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bold.blue.inverse('Your notes: '));
    console.log(notes.forEach(note => console.log(note.title)));
}

const readNote = (title) => {
    const notes = loadNotes();
    const selected = notes.find(note => note.title === title);
    if(selected) {
        console.log(chalk.blue.inverse(selected.title));
        console.log(selected.body);
    } else {
        console.log(chalk.red(`${title} not found`));
    }
}

const loadNotes = () => {
    try {
        const dataBuf = fs.readFileSync('notes.json');
        const dataJson = dataBuf.toString();
        return JSON.parse(dataJson);
    } catch(e) {
        return [];
    }
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json', data);
}

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};