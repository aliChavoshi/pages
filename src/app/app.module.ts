import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassDirective } from './class.directive';
import { TimesDirective } from './times.directive';
import { PagingComponent } from './paging/paging.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassDirective,
    TimesDirective,
    PagingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
