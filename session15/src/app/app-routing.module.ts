import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlltasksComponent } from './pages/alltasks/alltasks.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SingletaskComponent } from './pages/singletask/singletask.component';

const routes: Routes = [
  {path:"", component:AlltasksComponent},
  {path:"allTasks/:id", component:SingletaskComponent},
  {path:"contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
