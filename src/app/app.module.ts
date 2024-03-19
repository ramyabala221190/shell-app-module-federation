import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http'
import { EnvConfigService } from './env-config.service';
import { Observable } from 'rxjs';

function appInitialization(envConfigService:EnvConfigService) :()=>Observable<any>{
  return ()=>envConfigService.loadConfig();
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ {
    provide:APP_INITIALIZER,
    useFactory:appInitialization,
    deps:[EnvConfigService],
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
