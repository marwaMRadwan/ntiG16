const chalk=require('chalk')
const fun1 = () =>{
    console.log(chalk.blue("fun1"))
}
const fun2 = () =>{
    return ('fun2')
}
module.exports = { 
    fun1 , 
    fun2 
} // {fun1:fun1, fun2:fun2}