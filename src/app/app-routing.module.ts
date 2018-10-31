import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageComponent } from "./pages/page/page.component";

import { Breadcrumb } from "../../projects/breadcrumb/src/lib/breadcrumb";

const routes: Routes = [{
  path: 'home',
  component: PageComponent,
  data: {
    breadcrumbs: [ new Breadcrumb('Home', '/home') ]
  }
}, {
  path: 'contact',
  component: PageComponent,
  data: {
    breadcrumbs: [ new Breadcrumb('Contact', '/contact') ]
  }
}, {
  path: '**',
  redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
