// async function apiGetter(apiLink, callback){
//     try{
//         let data = await fetch(apiLink)
//         let jsonData = await data.json()
//         callback(jsonData)    
//     }
//     catch(e){
//         callback(e.message)
//     }
// }

// const apiGetter = async function (apiLink, callback){
//     try{
//         let data = await fetch(apiLink)
//         let jsonData = await data.json()
//         callback(jsonData)    
//     }
//     catch(e){
//         callback(e.message)
//     }
// }

const apiGetter = async (apiLink, callback) => {
    try{
        let data = await fetch(apiLink)
        let jsonData = await data.json()
        callback(jsonData)    
    }
    catch(e){
        callback(e.message)
    }
}

apiGetter("https://jsonplaceholder.typicode.com/users", (res)=>{
    console.log(res)
})





