import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public api = "http://blazer7.geotrackers.co.in/GTWS/gtWs/LocationWs/getUsrLatestLocation"
  public headers : HttpHeaders

  constructor(public http : HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('stellar:trackit')
    })
   }

  getList() {
    return this.http.get(this.api,{headers:this.headers});
  }
}
