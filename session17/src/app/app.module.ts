import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AlldataComponent } from './pages/alldata/alldata.component';
import { SingleDataComponent } from './pages/single-data/single-data.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllComponent } from './users/all/all.component';
import { SingleComponent } from './users/single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlldataComponent,
    SingleDataComponent,
    NavbarComponent,
    AllComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
