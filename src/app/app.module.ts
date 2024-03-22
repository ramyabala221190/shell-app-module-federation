import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http'
import { Observable, forkJoin, tap } from 'rxjs';
import { ModuleFederationConfigLibService, configModel } from 'module-federation-config-lib';

//eagerly setting the configuration details for all the applications
// function appInitialization(envConfigLibService:ModuleFederationConfigLibService) :()=>Observable<any>{
//   return ()=>forkJoin([
//     envConfigLibService.setConfiguration("assets/configurations/config.json","shell-application"),
//     envConfigLibService.setConfiguration("toDoApp/assets/configurations/config.json","toDoApp"),
//     envConfigLibService.setConfiguration("usersApp/assets/configurations/config.json","usersApp")
//   ])
// }

function appInitialization(envConfigLibService:ModuleFederationConfigLibService) :()=>Observable<configModel>{
  return ()=>envConfigLibService.setConfiguration("assets/configurations/config.json","shell-application") 
}

export const appName=new InjectionToken("appName");


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ {
    provide:APP_INITIALIZER,
    useFactory:appInitialization,
    deps:[ModuleFederationConfigLibService],
    multi:true
  },
  {
    provide:appName,
    useValue:"shell-application"
  }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
