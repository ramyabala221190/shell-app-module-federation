import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

export interface envConfigModel{
  env:string
}

@Injectable({
  providedIn: 'root'
})
export class EnvConfigService {

  constructor(private http:HttpClient) { }
  private envConfig:envConfigModel={
    env:""
  }

  loadConfig(){
     return this.http.get('/assets/configurations/config.json').pipe(
      tap((config:any)=>{
        console.log(config);
          this.envConfig=config;
      })
     )
  }

  fetchEnvConfig(){
    return this.envConfig;
  }

}
