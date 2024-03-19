import { Component } from '@angular/core';
import { EnvConfigService, envConfigModel } from '../env-config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private envConfigService:EnvConfigService){}

  config:envConfigModel|undefined;

  ngOnInit(){
    this.config=this.envConfigService.fetchEnvConfig();
    }
}
