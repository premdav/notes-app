const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// users should be able to add, remove, list, read notes
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note content',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Adding a new note with title:', argv.title);
        console.log('Note contents:', argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    handler: () => {
        console.log('Removing note');
    }
});

yargs.command({
    command: 'list',
    describe: 'Lists all notes',
    handler: () => {
        console.log('Listing all notes');
    }
});

yargs.command({
    command: 'read',
    describe: 'Read a selected note',
    handler: () => {
        console.log('Reading note: X');
    }
})

yargs.parse();