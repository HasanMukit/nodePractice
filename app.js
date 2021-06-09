//import chalk from 'chalk'
//import yargs from 'yargs'

const yargs = require('yargs')
const notes = require('./note.js')


yargs.command({
    command: 'add',
    describe:  "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe:  "removing a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }        
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe:  "List your notes",
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe:  "reading a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }        
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()

