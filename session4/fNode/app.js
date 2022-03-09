// console.log("hello world")

//modules
//build-in modules
//fs => file system
// const myFs = require("fs")
// myFs.writeFileSync("a.txt", "hello")

//my own modules
const myMod = require("./m")
// myMod()
// console.log(myMod)
myMod.fun1()

//npm modules
/* 
npm init --y
npm install ---------- way of any package install
npm i chalk@4.0.0
npm i
*/
//validator 
const val = require("validator")
console.log(val.isFloat("marwa"))

const chalk = require("chalk")
console.log(chalk.blue(myMod.fun2()));