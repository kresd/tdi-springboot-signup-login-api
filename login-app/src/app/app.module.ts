import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
