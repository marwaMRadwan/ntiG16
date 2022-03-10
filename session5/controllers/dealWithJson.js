const fs = require("fs")
const readData = () => {
    let data
    try{
        data = JSON.parse(fs.readFileSync("data.json"))
        if(!Array.isArray(data)) throw new Error()
    }
    catch(e){
        data = []
    }
    return data
}
const writeData = (data) => {
    fs.writeFileSync("data.json", JSON.stringify(data))
}

module.exports = { readData, writeData }