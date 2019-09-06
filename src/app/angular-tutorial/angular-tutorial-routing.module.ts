import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimengDetailsComponent } from './primeng-details/primeng-details.component';
import { NebularDetailsComponent } from './nebular-details/nebular-details.component';
import { AuguryDetailsComponent } from './augury-details/augury-details.component';
import { AngularLibraryComponent } from './angular-library/angular-library.component';
import { ThirdPartyLibraryComponent } from './third-party-library/third-party-library.component';


const routes: Routes = [{
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
  component: AuguryDetailsComponent
},
{
  path: "third-party-library",
  component: ThirdPartyLibraryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularTutorialRoutingModule { }
