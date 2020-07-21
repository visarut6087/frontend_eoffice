import { DragulaModule } from 'ng2-dragula';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { LogiComponent } from './logi/logi.component';
import { CommandAddFileComponent } from './command-add-file/command-add-file.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LogiComponent,
    CommandAddFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    DragulaModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
