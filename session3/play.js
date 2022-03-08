
// const user = {
//     name: "marwa",
//     age:36,
//     show: function(){
//         console.log(`${this.name} - ${this.age}`)
//     }
// }
// user.show()

//clousers
// function test (name){
//     return {
//         name,
//         add()  { console.log(name, "add") },
//         edit() { console.log(name, "edit") }
//     }
// }
// // console.log(test())
// const obj = test('marwa')
// obj.add()
// obj.edit()
// // test().add()

// const obj2 = test('myada')
// obj2.add()
// obj2.edit()

// let calculator = function(a,b){
//     return{
//         add( ) { return a + b },
//         sub( ) { return a - b },
//         div( ) { return a / b },
//     }
// }
// const c1 = calculator(5, 4)
//  c1.add()


//callback
//function
// const myCb = function(val, cb){
//     if(typeof val=="number"){
//         cb ('number', false)
//     }
//     else {
//         cb(false, 'error')
//     }
// } 
//call
// myCb('a', (success, failure)=>{
//     if(success) console.log(success)
//     else console.log(failure)
// })


//promises
const myPromise = (val) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        typeof val=="number"? resolve("it is a number"): reject("it is not a number")
    }, 1500)
})
//then catch 
console.log(1)
myPromise("a")
.then(
    (res)=> console.log(res)
)
.catch(
    e=> console.log(e)
)




// taskHeads= ['a','b','c']
// taskHeads.forEach( function( index, task ){
// console.log(task)
// } )

// console.log(1)
// setTimeout( () => { console.log(2) }, 1000 )
// console.log(3);



