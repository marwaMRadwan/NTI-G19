import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  constructor(private http : HttpClient) { }
  // https://jsonplaceholder.typicode.com/users

  getUsers():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  
  getPosts():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
  }

  getSinglePost(id : any):Observable<any>{
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  
}
