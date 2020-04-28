import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlaparamService {

  _slaparamData$=new BehaviorSubject<any>([]);
 

  constructor(private apiservice : ApiService) {
    this.apiservice.getSlaParams().subscribe((data)=>{
      console.log('data--->'+data);
    this._slaparamData$.next(data);
    });
   }
  
   ngOnInit() {
   
  }
   get slaparamData(){
    
    return this._slaparamData$.asObservable();
   }
   set slaparamData(data){

     this._slaparamData$.next(data);

   }

}
