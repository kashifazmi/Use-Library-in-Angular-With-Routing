import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimengDetailsComponent } from './components/primeng-details/primeng-details.component';
import { NebularDetailsComponent } from './components/nebular-details/nebular-details.component';
import { AngularLibraryComponent } from './components/angular-library/angular-library.component';
import { ThirdPartyLibraryComponent } from './components/third-party-library/third-party-library.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AuguryDetailsComponent } from './components/augury-details/augury-details.component';



const routes: Routes = [
{
  path: '',
  component: AngularLibraryComponent
},
{
  path: 'primeng-details',
  component: PrimengDetailsComponent
},
{
  path: 'nebular-details',
  component: NebularDetailsComponent
},
{
  path: 'augury-details',
  component: AuguryDetailsComponent,
  children: [{
    path: 'form-page',
    component: FormPageComponent
  }]
},
{
  path: 'third-party-library',
  component: ThirdPartyLibraryComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularTutorialRoutingModule { }
