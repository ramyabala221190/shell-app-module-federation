import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteConfigurationResolverService } from './remote-configuration-resolver.service';

const routes: Routes = [
  {
    path:"todos",
    loadChildren:()=>loadRemoteModule({
       type:'manifest',
       remoteName:'toDoApp',
       exposedModule:'./myToDoModule'
    }).then(m=>m.ToDoModule),
    // resolve: { //resolve added for lazy method
    //   configDetails: RemoteConfigurationResolverService
    // },
    // data:{appName:"toDoApp",path:"toDoApp/assets/configurations/config.json"} //data added for lazy method
  },
  {
    path:"users",
    loadChildren:()=>loadRemoteModule({
      type:'manifest',
      remoteName:'usersApp',
      exposedModule:'./myUsersModule'
    }).then(m=>m.UsersModule),
    // resolve: { //resolve added for lazy method
    //   configDetails: RemoteConfigurationResolverService 
    // },
    // data:{appName:"usersApp",path:"usersApp/assets/configurations/config.json"}//data added for lazy method
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
