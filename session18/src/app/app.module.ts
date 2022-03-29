import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterComponent } from './components/pages/user/register/register.component';
import { LoginComponent } from './components/pages/user/login/login.component';
import { ProfileComponent } from './components/pages/user/profile/profile.component';
import { AllUsersComponent } from './components/pages/user/all-users/all-users.component';
import { SingleUserComponent } from './components/pages/user/single-user/single-user.component';
import { EditProfileComponent } from './components/pages/user/edit-profile/edit-profile.component';
import { AddPostComponent } from './components/pages/posts/add-post/add-post.component';
import { MyPostsComponent } from './components/pages/posts/my-posts/my-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AllUsersComponent,
    SingleUserComponent,
    EditProfileComponent,
    AddPostComponent,
    MyPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
