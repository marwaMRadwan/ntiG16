import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userData = {name:""}
  public isLoggedIn = false
  host = "http://localhost:3000/user/"
  constructor(private _http:HttpClient) { 
  }

  registerUser(data:any):Observable<any>{
    return this._http.post(`${this.host}register`, data)
  }
  
  loginUser(data:any):Observable<any>{
    return this._http.post(`${this.host}login`, data)
  }
  logout():Observable<any>{
    return this._http.post(`${this.host}logout`, null)
  }
  allUsers():Observable<any>{
    return this._http.get(`${this.host}all`)
  }
  me():Observable<any>{
    return this._http.post(`${this.host}me`, null)
  }
  delUser(id:string):Observable<any>{
    return this._http.delete(`${this.host}all/${id}`)
  }
  uploadImg(data:any):Observable<any>{
    return this._http.post(`${this.host}profileImg`, data)
  }
}
