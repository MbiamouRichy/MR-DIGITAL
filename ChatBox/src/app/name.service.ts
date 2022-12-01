import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {map} from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class NameService {
  constructor(private  httpClient:HttpClient) {}
  /*

    onSendService(formData: FormData):Observable<any>{
     return this.http.post<any>('http://localhost/php/create.php',formData)
    }

   */

   loadProducts(){
    const url = 'http://localhost/php/view.php';
    return this.httpClient.get(url).pipe(map(data => data));
   }
  loadreponse(){
    const url = 'http://localhost/php/view_res.php';
    return this.httpClient.get(url).pipe(map(data => data));
  }
   creat(data: any){
     const url = 'http://localhost/php/create.php';
     return this.httpClient.post(url, data).pipe(map(data => data));
   }
}

