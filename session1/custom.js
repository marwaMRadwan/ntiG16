// variables 
/*
int float string char ......
number string boolean any union 
unknown
scopes
*/
// var let const
// var x = 2
// var x = 3
// var x = 7
// console.log(x);
// let a = 6
// function x(){
//     var a = 5
// }
// x()
// console.log(a)
// let x = 5 
// if(true){
//    let x = 10
// }
// console.log(x)

// 5>3 ? "":""
// boolean => true false
// console.log(5>3) //true
// if(true){

// }

// for(;;){
//     if(true) break;
//     console.log(1)
// }
// while(true){}
// if(true){}

// let x = prompt('x= ')
/*
Number, c f
(f-32)*5/9
(c*9/5)+32
*/
// function => only one function

/*
get user inputs 2
check conversion type
convert to c
convert to f
*/
// const getUserInput = (msg)=>{
//     return prompt(msg)
// }
// const convertToC = (val)=>{
//     return (Number(val)-32)*5/9
// }
// const convertToF = (val)=>{
//     return (parseFloat(val)*9/5)+32
// }
// const myConvert = () => {
//     const convertType = getUserInput("your convert type (choose between c and f)")
//     const temp = getUserInput("temp: ")
//     let result = ""
//     switch(convertType){
//         case 'c':result= convertToC(temp);break;
//         case 'f':result= convertToF(temp);break;
//         default: result="undefined type";
//     }
//     return result
// }
//alert(myConvert())

// let x = [1, false, "hello", 5.5]
// for(a of x) console.log(a)
// x.length
// for(i=0;i<x.length;i++){
//     console.log(x[i])
// }
// x.forEach((el, i)=>{
//     console.log(i, "=>", el);
// })
// find findIndex filter

//object
// let user = {
//     name:"marwa",
//     age:36,
//     job:"developer"
// }
// for(o in user){
//     console.log(o , "=", user[o])
// }
// console.log(Object.keys(user));
// console.log(Object.values(user));

// let users = [
//     {
//         name:"marwa",
//         age:36,
//         job:"developer"
//     },
//     {
//         name:"mohammed",
//         age:40,
//         job:"doctor"
//     }   
// ]
// for(o in x){
//     console.log(o , "=", x[o])  
// }
// users[0]
// console.log(user.name)
// console.log(user['name'])
// object
/*
{
    0: x,
    1:y,
    2:i
}
*/

const photos = [
    {
        albumId: 1,
        id: 1,
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
    },
    {
        albumId: 1,
        id: 2,
        title: "reprehenderit est deserunt velit ipsam",
        url: "https://via.placeholder.com/600/771796",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
    },
    {
        albumId: 1,
        id: 3,
        title: "officia porro iure quia iusto qui ipsa ut modi",
        url: "https://via.placeholder.com/600/24f355",
        thumbnailUrl: "https://via.placeholder.com/150/24f355"
    },
    {
        albumId: 1,
        id: 4,
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        url: "https://via.placeholder.com/600/d32776",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
    },
    {
        albumId: 1,
        id: 5,
        title: "natus nisi omnis corporis facere molestiae rerum in",
        url: "https://via.placeholder.com/600/f66b97",
        thumbnailUrl: "https://via.placeholder.com/150/f66b97"
    },
    {
        albumId: 1,
        id: 6,
        title: "accusamus ea aliquid et amet sequi nemo",
        url: "https://via.placeholder.com/600/56a8c2",
        thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
    },
    {
        albumId: 1,
        id: 7,
        title: "officia delectus consequatur vero aut veniam explicabo molestias",
        url: "https://via.placeholder.com/600/b0f7cc",
        thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
    },
    {
        albumId: 1,
        id: 8,
        title: "aut porro officiis laborum odit ea laudantium corporis",
        url: "https://via.placeholder.com/600/54176f",
        thumbnailUrl: "https://via.placeholder.com/150/54176f"
    },
    {
        albumId: 1,
        id: 9,
        title: "qui eius qui autem sed",
        url: "https://via.placeholder.com/600/51aa97",
        thumbnailUrl: "https://via.placeholder.com/150/51aa97"
    },
    {
        albumId: 1,
        id: 10,
        title: "beatae et provident et ut vel",
        url: "https://via.placeholder.com/600/810b14",
        thumbnailUrl: "https://via.placeholder.com/150/810b14"
    }
]

// template string `hi ${name}` 
// forEach filter find findIndex
// photos.forEach((photo,index)=>{
//     console.log(`
//     index: ${index}
//     album id: ${photo.albumId}
// id: ${photo.id}
//     title: ${photo.title}
//     url: ${photo.url}
//     thumbnailUrl: ${photo.thumbnailUrl}
//     `)
// })
// let x = photos.filter(photo=>{
//     return photo.id>5
// })
// console.table(x)

// let x = photos.find(photo=>{
//     return photo.id>5
// })
// console.table(x)

let x = photos.findIndex(photo=>{
    // return photo.id>5
    console.log(photo.id)
})
console.table(x)



















