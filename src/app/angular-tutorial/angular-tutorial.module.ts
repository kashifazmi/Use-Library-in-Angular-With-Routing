import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules path
import { NbLayoutModule, NbCardModule, NbThemeModule } from '@nebular/theme';
import { AngularTutorialRoutingModule } from './angular-tutorial-routing.module';
// Component path
import { NebularDetailsComponent } from './nebular-details/nebular-details.component';
import { AuguryDetailsComponent } from './augury-details/augury-details.component';
import { PrimengDetailsComponent } from './primeng-details/primeng-details.component';
import { AngularLibraryComponent } from './angular-library/angular-library.component';
import { ThirdPartyLibraryComponent } from './third-party-library/third-party-library.component';


@NgModule({
  declarations: [
    PrimengDetailsComponent, 
    NebularDetailsComponent, 
    AuguryDetailsComponent, 
    AngularLibraryComponent, 
    ThirdPartyLibraryComponent
  ],
  imports: [
    CommonModule,
    AngularTutorialRoutingModule,
    NbLayoutModule,
    // this will enable the default theme, you can change this by passing `{ name: 'dark' }` to enable the dark theme
    NbThemeModule.forRoot({ name: 'dark' }),
    NbCardModule
  ]  
})
export class AngularTutorialModule { }
