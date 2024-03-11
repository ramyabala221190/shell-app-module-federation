import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"todos",
    loadChildren:()=>loadRemoteModule({
       type:'manifest',
       remoteName:'toDoApp',
       exposedModule:'./myToDoModule'
    }).then(m=>m.ToDoModule)
  },
  {
    path:"users",
    loadChildren:()=>loadRemoteModule({
      type:'manifest',
      remoteName:'usersApp',
      exposedModule:'./myUsersModule'
    }).then(m=>m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
