import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AngularTutorialModule } from './angular-tutorial/angular-tutorial.module';


const routes: Routes = [{
  path: '',
  loadChildren: () => import('./angular-tutorial/angular-tutorial.module').then(m => m.AngularTutorialModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
