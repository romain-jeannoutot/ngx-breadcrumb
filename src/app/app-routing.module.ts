import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from "./pages/page/page.component";

const routes: Routes = [{
  path: 'home',
  component: PageComponent
}, {
  path: 'contact',
  component: PageComponent
}, {
  path: '**',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
