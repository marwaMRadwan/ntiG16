import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/pages/posts/add-post/add-post.component';
import { MyPostsComponent } from './components/pages/posts/my-posts/my-posts.component';
import { AllUsersComponent } from './components/pages/user/all-users/all-users.component';
import { EditProfileComponent } from './components/pages/user/edit-profile/edit-profile.component';
import { LoginComponent } from './components/pages/user/login/login.component';
import { ProfileComponent } from './components/pages/user/profile/profile.component';
import { RegisterComponent } from './components/pages/user/register/register.component';
import { SingleUserComponent } from './components/pages/user/single-user/single-user.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"user", children:[
    {path:"register", component:RegisterComponent},
    {path:"profile", component:ProfileComponent},
    {path:"all", component:AllUsersComponent},
    {path:"all/:id", component:SingleUserComponent},
    {path:"edit/:id", component:EditProfileComponent}
  ]},
  {path:"post", children:[
    {path:"add", component:AddPostComponent},
    {path:"myPosts", component:MyPostsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
