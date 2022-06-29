import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public navFlag : boolean = true
  constructor(private http : HttpClient) { }

  login(obj : any):Observable<any>{
    return this.http.post("http://dashboard.roshetah.com/api/auth/login" , obj )
  }
  editProfileImage(obj:any) :Observable<any>{
    return this.http.post("http://dashboard.roshetah.com/api/auth/StoreAccountImages" , obj)
  }
}
