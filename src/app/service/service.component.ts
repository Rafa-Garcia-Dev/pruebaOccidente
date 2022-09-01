import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class getAws {

  private url : string = 'https://ex1cuzi2zl.execute-api.us-west-2.amazonaws.com/test/cliente';
  

  constructor(private _http: HttpClient) {  }

  public getClient(dataNit:any): Observable<any>{
    return this._http.post( this.url, dataNit);
  }
}

