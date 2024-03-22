import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ModuleFederationConfigLibService, configModel } from 'module-federation-config-lib';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteConfigurationResolverService implements Resolve<configModel> {

  constructor(private envConfigLibService: ModuleFederationConfigLibService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<configModel>|Promise<configModel>|configModel {
    let configObject=this.envConfigLibService.getConfiguration(route.data["appName"]);
    if(configObject){
      //already exists. jsut return the object
      return of(configObject);
    }
    return this.envConfigLibService.setConfiguration(route.data["path"],route.data["appName"]);
  }
}
