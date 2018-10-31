import { Component, OnInit } from '@angular/core';

import { BreadcrumbService } from "../../../../projects/breadcrumb/src/lib/breadcrumb.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.addItem('Page', '/page');
  }

}
