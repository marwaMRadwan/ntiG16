import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"add", component:AddComponent},
  {path:"reactive", component:ReactiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
