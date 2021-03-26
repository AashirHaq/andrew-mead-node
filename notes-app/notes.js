const fs = require('fs')
const chalk = require('chalk')

const all = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const fetch = title => {
    const records = all()
    const record = records.find((record) => record.title === title)

    debugger
    
    if(record){
        console.log(chalk.inverse(record.title))
        console.log(record.body)
    }
    else
        console.log(chalk.red.inverse('No record found.'))
}

const list = () => {
    const records = all()

    console.log(chalk.inverse('Your notes'))
    
    records.forEach((record) => {
        console.log(record.title)
    })
}

const add = (title, body) => {
    const records = all()
    const duplicate = records.find((record) => record.title === title)

    if(!duplicate){
        records.push({
            title,
            body
        })
    
        save(records)
        console.log(chalk.green.inverse('New note added.'))
    }else{
        console.log(chalk.red.inverse('Note title taken.'))
    }
}

const remove = title => {
    const records = all()
    const newRecords = records.filter(record => record.title !== title)
    if(records.length === newRecords.length){
        console.log(chalk.red.inverse('No record found of ' + title + ' title'))
    }else{
        console.log(chalk.green.inverse(title + ' successfully removed'))
        save(newRecords)
    }

}

const save = (records) => {
    const dataJSON = JSON.stringify(records)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = { list, add, remove, fetch }