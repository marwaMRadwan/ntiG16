// http https http2
const https = require("https")
const apiURL = "https://jsonplaceholder.typicode.com/users"
const myReq = (apiURL, cb) =>{
    const request = https.request(apiURL, (res) => {
        let d = ""
        res.on("data", result => {
            d += result.toString()
        })
        res.on("end", () => {
           cb(JSON.parse(d), false)
        })
    })
    request.on("error", (err) => {
        cb(false,err)
    })
    request.end()
}

myReq(apiURL, (data, err)=>{
    if(err) return console.log(err)
    console.log(data)
})