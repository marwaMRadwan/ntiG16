const fetch = require('node-fetch');
const x = async function(){
    const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
    const data = await response.json()
    console.log(data)
}

x()
