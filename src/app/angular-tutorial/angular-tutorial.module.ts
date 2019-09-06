import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularTutorialRoutingModule } from './angular-tutorial-routing.module';
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
    AngularLibraryComponent, ThirdPartyLibraryComponent
  ],
  imports: [
    CommonModule,
    AngularTutorialRoutingModule
  ]
})
export class AngularTutorialModule { }
