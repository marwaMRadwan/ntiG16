import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  commonURL : string = "https://jsonplaceholder.typicode.com/users"
  constructor(private myHttp: HttpClient) { }

  getAllUsers():Observable<any>{
    return this.myHttp.get(this.commonURL)
  }
  getSingleUser(id:string):Observable<any>{
    return this.myHttp.get(`${this.commonURL}/${id}`)
  }
}
