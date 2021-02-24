import { Sucess } from './success/succes-warning-alert';
import { Error } from './warning/errorALert.component';
import { ServerComponent } from './server/server.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServercComponent } from './serverc/serverc.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServercComponent,
     Error,
     Sucess,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
