import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules path
import { NbLayoutModule, NbCardModule, NbThemeModule, NbStepperModule, NbButtonModule } from '@nebular/theme';
import { AngularTutorialRoutingModule } from './angular-tutorial-routing.module';
// Component path
import { NebularDetailsComponent } from './components/nebular-details/nebular-details.component';
import { AuguryDetailsComponent } from './components/augury-details/augury-details.component';
import { PrimengDetailsComponent } from './components/primeng-details/primeng-details.component';
import { AngularLibraryComponent } from './components/angular-library/angular-library.component';
import { ThirdPartyLibraryComponent } from './components/third-party-library/third-party-library.component';
import { AngularTutorialService } from './services/angular-tutorial.service';

import { FormPageComponent } from './form-page/form-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormControlGroupComponent } from './form-control-group/form-control-group.component';
import {CheckboxModule} from 'primeng/checkbox';
import { PrimengControlsComponent } from './primeng-controls/primeng-controls.component';
import { LoginPageComponent } from './login-page/login-page.component';
@NgModule({
  declarations: [
    PrimengDetailsComponent,
    NebularDetailsComponent,
    AuguryDetailsComponent,
    AngularLibraryComponent,
    ThirdPartyLibraryComponent,
    FormPageComponent,
    FormControlGroupComponent,
    PrimengControlsComponent,
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AngularTutorialRoutingModule,
    NbLayoutModule,
    // this will enable the default theme, you can change this by passing `{ name: 'dark' }` to enable the dark theme
    NbThemeModule.forRoot({ name: 'dark' }),
    NbCardModule,
    NbStepperModule,
    NbButtonModule,
    ReactiveFormsModule,
    CheckboxModule,
    FormsModule
  ],
  // providers: [AngularTutorialService]
})
export class AngularTutorialModule { }
