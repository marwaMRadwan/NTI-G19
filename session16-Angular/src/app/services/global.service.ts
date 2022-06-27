import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  pathUrl="https://jsonplaceholder.typicode.com/"
  publicUrl = "http://dashboard.roshetah.com/api/auth"
  constructor(private http : HttpClient) { }
  // https://jsonplaceholder.typicode.com/users

  getUsers():Observable<any>{
    return this.http.get(`${this.pathUrl}/users`)
  }
  
  getPosts():Observable<any>{
    return this.http.get(`${this.pathUrl}posts?_limit=10`)
  }

  getSinglePost(id : any):Observable<any>{
    return this.http.get(`${this.pathUrl}posts/${id}`)
  }

  register(obj:any):Observable<any>{
    return this.http.post(`${this.publicUrl}/signUp` , obj)
  }

  
}
