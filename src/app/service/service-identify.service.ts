import { Injectable, InjectionToken  } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceIdentifyService {
  public http_server_base: any = "https://api.bancoink.biz/qa/signup/documentTypes?apiKey=030106";

  
  constructor(private _httpclient: HttpClient) { 
      
  }
  getByTypeIdentify(){
    return  this._httpclient.get<Response>( this.http_server_base )
            .pipe(  catchError( this.controlExcepcion )  ) ;

  }

  controlExcepcion( _error: HttpErrorResponse ){
    return throwError(() => new Error( _error.message ) );
  }
}
