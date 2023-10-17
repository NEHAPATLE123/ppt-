import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FirstrowComponent } from './shared/components/firstrow/firstrow.component';
import { ThirdroeComponent } from './shared/components/thirdroe/thirdroe.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FirstrowComponent,
    ThirdroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
