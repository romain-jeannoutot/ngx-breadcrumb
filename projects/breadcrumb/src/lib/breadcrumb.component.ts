import { Component, Input } from '@angular/core';
import { ActivationEnd, Router } from "@angular/router";

import { Breadcrumb } from "./breadcrumb";
import { BreadcrumbService } from "./breadcrumb.service";

@Component({
  selector: 'ngx-breadcrumb',
  template: `
    <nav [ngClass]="navClass">
      <ul [ngClass]="ulClass">
        <li *ngFor="let breadcrumb of breadcrumbs" [ngClass]="liClass" [routerLinkActive]="isActiveClass">
          <a [ngClass]="aClass" [routerLink]="breadcrumb.href">{{ breadcrumb.label }}</a>
        </li>
      </ul>
    </nav>
  `,
  styles: []
})
export class BreadcrumbComponent {

  @Input() isActiveClass = '';

  @Input() navClass = '';
  @Input() ulClass = '';
  @Input() liClass = '';
  @Input() aClass = '';

  public breadcrumbs: Breadcrumb[] = [];

  constructor(private router: Router, private breadcrumbService: BreadcrumbService) {
    this.router.events.subscribe(e => {
      if (e instanceof ActivationEnd) {
        if (e.snapshot.data.breadcrumbs) {
          this.breadcrumbs = Object.assign([], e.snapshot.data.breadcrumbs);
        }
      }
    });

    this.breadcrumbService._addItem.subscribe(breadcrumb => this.breadcrumbs.push(breadcrumb));
  }

}
