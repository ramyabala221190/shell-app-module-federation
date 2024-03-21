import { Component, Inject } from '@angular/core';
import { ModuleFederationConfigLibService, configModel } from 'module-federation-config-lib';
import { appName } from '../app.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private envConfigLibService:ModuleFederationConfigLibService,@Inject(appName)public appName:string){}

  config:configModel|undefined;


  ngOnInit(){
    console.log(this.appName)
    console.log(this.envConfigLibService.getConfiguration(this.appName))
    this.config=this.envConfigLibService.getConfiguration(this.appName);
    }
}
