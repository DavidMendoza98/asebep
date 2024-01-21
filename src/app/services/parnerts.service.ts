import { Injectable } from '@angular/core';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { API } from 'env';
import { Partners } from '../interfaces/partners';

@Injectable({
  providedIn: 'root'
})
export class ParnertsService {

  constructor(private HttpClient:HttpClient) { }

  getParnertsFromDb(){
    const url = API + 'v1/partners'
    return this.HttpClient.get(url)
  }
  saveParnertInDb(parnert:Partners){
    const url = API + 'v1/partners'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.HttpClient.post(
      url,
      parnert, 
      httpOptions
      );
  }
  updateParnertInDb(parnert:Partners){
    const url = API + 'v1/partners'
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.HttpClient.put(
      url,
      parnert, 
      httpOptions
      );
  }
  getOneParnertFromDb(id:string){
    const url = API + 'v1/partners/' + id;
    return this.HttpClient.get(url)
  }

  removeParnertFromDb(id:string){
    const url = API + 'v1/partners/' + id;
    console.log(url);
    return this.HttpClient.delete(url)
  }

}
