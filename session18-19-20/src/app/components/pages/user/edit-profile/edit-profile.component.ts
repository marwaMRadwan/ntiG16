import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/providers/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private _user:UserService) { }
  myFile :any = null
  ngOnInit(): void {
  }
  onUploadFile(event:any){
    this.myFile = event.target.files[0]
  }
  handleUpload(){
    if(this.myFile!=null){
    const myForm = new FormData()
    myForm.append("profile", this.myFile, this.myFile.name)
    this._user.uploadImg(myForm).subscribe(
      (data)=>{console.log(data)},
      (e)=> {console.log(e)},
      ()=>{}
    )}
  }
}
