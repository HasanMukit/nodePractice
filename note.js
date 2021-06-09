const fs = require('fs')
const chalk = require('chalk')


/* ---------------------adding notes to fs--------------------*/


const addNote = (title, body) => {
    
    const notes = loadNotes()
    const duplicateNotes = notes.find((note) => note.title === title)
 
    debugger 
    
    if (duplicateNotes === undefined){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    }
    else {
        console.log('Note title already exists')
    }
}


/* ---------------------removing notes from fs--------------------*/

const removeNote = (title) => {
    const notes = loadNotes()
    
    notes.forEach((note, i) => {
        if(note.title === title) {
            notes.splice(i, 1)
            saveNotes(notes)
            console.log(chalk.bgGreen.black('Removed Note with title : ' + title))
            return
        }
        
        if( notes.length === i + 1)
        {
            console.log(chalk.bgRed('Title Not Found'))
        }
    })    
}

/* ---------------------Listing Notes--------------------*/

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach((note) => console.log(chalk.inverse(note.title)))
}

/* ---------------------Reading Notes--------------------*/

const readNote = (title) => {
    const notes = loadNotes()

    const noteToRead = notes.find((note) => note.title === title)
    if (noteToRead !== undefined) {
        console.log(chalk.inverse(noteToRead.title))
        console.log(noteToRead.body)
    }
    else {
        console.log(chalk.red.inverse('Note Not Found'))
    }
}

/* ---------------------uitilitis--------------------*/


const loadNotes =  () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}
    
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes) 
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
} 