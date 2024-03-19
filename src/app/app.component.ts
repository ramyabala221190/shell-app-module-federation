import { Component } from '@angular/core';
import { EnvConfigService, envConfigModel } from './env-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell-application';

  constructor(private envConfigService:EnvConfigService){}

  config:envConfigModel|undefined;

  ngOnInit(){
    this.config=this.envConfigService.fetchEnvConfig();
    }
}
