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
const getUserInput = (msg)=>{
    return prompt(msg)
}
const convertToC = (val)=>{
    return (Number(val)-32)*5/9
}
const convertToF = (val)=>{
    return (parseFloat(val)*9/5)+32
}

const myConvert = () => {
    const convertType = getUserInput("your convert type (choose between c and f)")
    const temp = getUserInput("temp: ")
    let result = ""
    switch(convertType){
        case 'c':result= convertToC(temp);break;
        case 'f':result= convertToF(temp);break;
        default: result="undefined type";
    }
    return result
}
alert(myConvert())












