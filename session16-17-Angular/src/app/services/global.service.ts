import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  pathUrl="https://jsonplaceholder.typicode.com/"
  publicUrl = "http://dashboard.roshetah.com/api/auth"

  public isLogin : boolean = false
  public UserData : any

  constructor(private http : HttpClient) { }
  // https://jsonplaceholder.typicode.com/users

  getUsers():Observable<any>{
    return this.http.get(`${this.pathUrl}/users`)
  }
  
  getPosts():Observable<any>{
    return this.http.get(`${this.pathUrl}posts?_limit=10`)
  }

  getSinglePost(id : any):Observable<any>{
    const headers = new HttpHeaders()
    .set("testHeader" , "Tesssst")
    return this.http.get(`${this.pathUrl}posts/${id}` , {headers : headers})
  }

  register(obj:any):Observable<any>{
    return this.http.post(`${this.publicUrl}/signUp` , obj)
  }
  login(obj:any):Observable<any>{
    return this.http.post(`${this.publicUrl}/login` , obj )
  }

  AuthMe():Observable<any>{
    const body = {
      "lang" : 2
   }
    return this.http.post(`${this.publicUrl}/me` , body  )
  }

  
}
