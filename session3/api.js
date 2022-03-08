function apiGetter(apiLink, callback){
    fetch(apiLink)
    .then( (x) => {
        x.json()
        .then( (y) => {
            callback (y, false)
        } )
        .catch(err=>{
            callback(false, err.message)
        })
    }
    )
    .catch(e=> callback(false, e.message))    
}

apiGetter("https://jsonplaceholder.typicode.com/users", (res, err)=>{
if(err) console.log(err)  
else {
res.forEach(element => {
        console.log(element.id)
    });
}
})