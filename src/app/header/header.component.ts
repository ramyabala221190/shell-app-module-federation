import { Component } from '@angular/core';
import { ModuleFederationConfigLibService, configModel } from 'module-federation-config-lib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private envConfigLibService:ModuleFederationConfigLibService){}

  config:configModel|undefined;

  ngOnInit(){
    console.log(this.envConfigLibService.getConfiguration("shell-application"))
    this.config=this.envConfigLibService.getConfiguration("shell-application");
    }
}
