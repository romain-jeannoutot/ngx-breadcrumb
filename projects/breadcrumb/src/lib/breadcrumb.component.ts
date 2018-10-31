import { Component } from '@angular/core';
import { ActivationEnd, Router } from "@angular/router";

import { Breadcrumb } from "./breadcrumb";

@Component({
  selector: 'ngx-breadcrumb',
  template: `
    <p>
      breadcrumb works!
    </p>
  `,
  styles: []
})
export class BreadcrumbComponent {

  public breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationEnd) {
        if (e.snapshot.data.breadcrumbs) {
          this.breadcrumbs = Object.assign([], e.snapshot.data.breadcrumbs);
        }
      }
    });
  }

}
