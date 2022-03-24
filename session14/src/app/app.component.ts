import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title :string= 'session14';
  img:string="assets/img.jpg"
  data = "<h3>hello</h3><p>hi</p>"
  testEvent = ""

  val : number = 0
  
  myData(): string{
    return "Hi There"
  }
//click hover mouseup mousedown input ngSubmit
  handleClick(){
    this.testEvent = "hello"
    console.log("hello")
  }

  handleBtn(type:string){
    if(type=="+") this.val++
    else this.val--
  }

  inputData=""
  handleInput(event:any){
    // console.log(event.target.value)
    this.inputData = event.target.value
  }

}
