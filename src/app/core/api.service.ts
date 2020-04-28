import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

   private baseUrl="http://localhost:2020";

  constructor(private http:HttpClient) { }

    createUser(formdata: Object): Observable<Object> {
      
      return this.http.post(`${this.baseUrl}`+'/index/signup', formdata);
    
    }
  
    save(url,Object):Observable<any>{
  
      const headers=new HttpHeaders({'Content-Type':'application/json'});
  
      return this.http.post(url,Object,{headers})
    }
  
    getSlaParams():Observable<any>{
  
      return this.http.get(`${this.baseUrl}`+'/util/getParamValues').pipe(
       catchError( err => {
            if (err.status === 401) {
                return EMPTY;
            } else {
                return throwError(err.message );
            }
       })
   );
     }
  
  
  
}
