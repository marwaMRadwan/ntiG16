// // let x:number = 3
// //Object Oriented Programming
// class Student{
//     static count : number=0
//     private name: string
//     public age : number
//     protected grade: number
//     readonly x:string = "abc"

//     constructor(nName: string, nAge: number, nGrade:number){
//         Student.count++
//         this.name = nName
//         this.age = nAge
//         this.grade = nGrade
//     }

//     get _name():string{ return this.name }
//     set _name( val: string ){ this.name = val }

//     show( ) : string {
//         return `${this.name} - ${this.age} - ${this.grade}`
//         // return 5.5
//     }
// }

// let s1 = new Student("marwa", 36, 50)
// s1._name = "mazen"
// let s2 = new Student("marwa", 36, 50)
// let s3 = new Student("marwa", 36, 50)

// console.log(Student.count)

// console.log(s1._name)
// console.log(s1.show())

// class User{
//     protected name: string
//     protected age: number
//     protected address: string
//     constructor(name:string, age:number, address:string){
//         this.name = name
//         this.address= address
//         this.age=age
//     }
//     show(){
//         console.log(
// `name: ${this.name} - age: ${this.age} - address: ${this.address}`
//         )
//     }
// }
// class Teacher extends User{
//     private salary:number
//     constructor(name:string, age:number, address:string, salary:number){
//         super(name, age,address)
//         this.salary=salary
//     }
//     show(){
//         // super.show()
//         console.log(
// `name: ${this.name} - age: ${this.age} - address: ${this.address} - salary: ${this.salary}`
//         )
//     }
// }
// // class Student extends User{
// // }
// let t1 = new Teacher("marwa", 36, "home0", 2000)
// t1.show()

// interface User{
//     name:string
//     age: number
//     email?: string
//     martialState: boolean
// }

// const marwa:User = {
//     name:"marwa",
//     age:36,
//     martialState:true,
// }

// //implement
// class MyData implements User{
//     name:string=""
//     age:number=0
//     martialState:boolean=true

//     constructor(name:string){

//     }
// }



// interface X{
//     name:string
//     show(): void
// }

// let z:X = {
//     name:"hdghd",
//     show:()=>{}
// }

// abstract class T{
//     abstract abc():void
//     xyz(){ console.log("hi") }
// }
// class X implements T{
//     abc(){console.log()}
//     xyz(){}
// }

// let a = new T()


