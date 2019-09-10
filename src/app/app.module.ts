import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NbLayoutModule, NbCardModule, NbThemeModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateBodyComponent } from './shared/components/template-body/template-body.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    // this will enable the default theme, you can change this by passing `{ name: 'dark' }` to enable the dark theme
    NbThemeModule.forRoot({ name: 'dark' }),
    NbCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
