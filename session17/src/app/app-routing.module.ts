import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlldataComponent } from './pages/alldata/alldata.component';
import { HomeComponent } from './pages/home/home.component';
import { SingleDataComponent } from './pages/single-data/single-data.component';
import { AllComponent } from './users/all/all.component';
import { SingleComponent } from './users/single/single.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"allData", children:[
    {path:"", component:AlldataComponent}, //allData
    {path:":id", component:SingleDataComponent}  //allData/:id
  ]},
  {path:"users", children:[
    {path:"", component:AllComponent},
    {path:":id", component:SingleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
