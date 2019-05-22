import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StdService {

  apiUrl : string = "http://localhost/student/process/crud_Std.php";
  constructor(public http: HttpClient) { }

  getStd(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  get(std_id : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      'std_id' : std_id
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  insert( std_id: any, std_name: string, std_last:string,std_detail:string){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'insert',
      
      'std_name': std_name,
      'std_last': std_last,
      'std_detail': std_detail
      
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }

  del( std_id : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      'std_id' : std_id
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  
  edit( std_id: any , std_name: string, std_last:string, std_detail:string	){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      'std_id': std_id,
      'std_name': std_name,
      'std_last': std_last,
      'std_detail':std_detail
     
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
}

