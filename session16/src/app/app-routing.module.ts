import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"add", component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
