import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http'
import { Observable, forkJoin, tap } from 'rxjs';
import { ModuleFederationConfigLibService } from 'module-federation-config-lib';

function appInitialization(envConfigLibService:ModuleFederationConfigLibService) :()=>Observable<any>{
  return ()=>forkJoin([
    envConfigLibService.fetchConfiguration("/assets/configurations/config.json","shell-application"),
    envConfigLibService.fetchConfiguration("/todos/assets/configurations/config.json","todoApp"),
    envConfigLibService.fetchConfiguration("/users/assets/configurations/config.json","usersApp")
  ])
}


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
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
