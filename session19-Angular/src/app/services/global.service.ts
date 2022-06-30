import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http : HttpClient) { }

  getImages():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/photos?_limit=5")
  }

  getProviders():Observable<any>{
    return this.http.post("http://dashboard.roshetah.com/api/auth/LoadProvidersBySlug/1/0/39" , {"role_id" : "Doctors"})
  }
}
