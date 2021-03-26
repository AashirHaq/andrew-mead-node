const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.1.0')

// Create Add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Body of note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.add(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.remove(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Show all notes',
    handler: () => {
        notes.list()
    }
})

// Create reading command
yargs.command({
    command: 'read',
    describe: 'Read an notes',
    builder: {
        title: {
            describe: 'Note title.',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.fetch(argv.title)
    }
})

yargs.parse()
