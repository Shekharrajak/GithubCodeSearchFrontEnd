import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { SaarchBoxComponent } from './saarch-box/saarch-box.component';
import { BoldPipe } from './customPipes/bold.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SaarchBoxComponent,
    BoldPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
