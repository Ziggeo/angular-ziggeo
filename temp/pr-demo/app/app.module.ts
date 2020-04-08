import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZiggeoModule } from '../../../angular-ziggeo/lib/main';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ZiggeoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
