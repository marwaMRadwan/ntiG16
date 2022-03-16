const fs = require("fs")
const readData = () => {
    let data
    try{
        data = JSON.parse(fs.readFileSync("models/data.json"))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data = []
    }
    return data
}
const writeData = (data) => {
    fs.writeFileSync("models/data.json", JSON.stringify(data))
}

module.exports = { readData, writeData }