//ng g s services/data
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private _http:HttpClient) { }

  getData():Observable<any>{
    return this._http.get("https://jsonplaceholder.typicode.com/photos")
  }

  getSingleData(id:string):Observable<any>{
    return this._http.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
  }

  addData(data:any):Observable<any>{
    return this._http.post("https://jsonplaceholder.typicode.com/posts", data)
  }
  
}
