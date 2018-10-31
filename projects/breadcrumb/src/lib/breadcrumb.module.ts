import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from "./breadcrumb.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class BreadcrumbModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BreadcrumbModule,
      providers: [BreadcrumbService]
    };
  }

}
