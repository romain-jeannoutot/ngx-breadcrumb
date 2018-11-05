# Ngx Breadcrumb

[![NPM version][npm-image]][npm-url]

A basic Angular module to display breadcrumb using native Angular router.

See a demo at: https://ngx-breadcrumb.ranout.xyz

Table of contents
=================

  * [Install](#install)
  * [Usage](#usage)
  * [Service](#service)
  * [Customize](#customize)

## Install

Install the module via npm:

    npm i --save @ranout/ngx-breadcrumb

## Usage

##### Step 1: Import the BreadcrumbModule:

```js
import { BreadcrumbModule } from '@ranout/ngx-breadcrumb';

@NgModule({
  imports: [BreadcrumbModule.forRoot()]
})
export class AppModule { }
```

##### Step 2: Add breadcrumbs data to routes:

```js
import { Breadcrumb } from '@ranout/ngx-breadcrumb';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  data: { 
    breadcrumbs: [new Breadcrumb('Home', '/home')] 
  }
}];
```

##### Step 3: Place the ngx-breadcrumb component in your app.component.html:

	<ngx-breadcrumb></ngx-breadcrumb>
	<router-outlet></router-outlet>

Enjoy :)

## Service

To add a breadcrumb item dynamically, use the addItem method declared in the BreadcrumbService:

```js
import { BreadcrumbService } from '@ranout/ngx-breadcrumb';

export class HomeComponent implements OnInit {

  constructor(private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.addItem('Page', '/page');
  }

}
```

## Customize

By default, the ngx-breadcrumb component looks like this:

```html
  <nav>
    <ul>
      <li *ngFor="let breadcrumb of breadcrumbs">
        <a [routerLink]="breadcrumb.href">{{ breadcrumb.label }}</a>
      </li>
    </ul>
  </nav>
```

To customize breadcrumb style, you can add css class on `<nav>`, `<ul>`, `<li>` and `<a>` tags, with respectively `navClass`, `ulClass`, `liClass` and `aClass` attributes.

Too, you can add css class for active `li` element with `isActiveClass` attribute.

For example, for Bulma:

```html
  <ngx-breadcrumb navClass="breadcrumb" isActiveClass="is-active"></ngx-breadcrumb>
```

will give the following result if current path is `/home`:

```html
  <nav class="breadcrumb">
    <ul>
      <li class="is-active">
        <a routerLink="/home">Home</a>
      </li>
      <li>
        <a routerLink="/page">Page</a>
      </li>
    </ul>
  </nav>
```

[npm-image]: https://img.shields.io/badge/npm%20package-1.0.5-brightgreen.svg
[npm-url]: https://www.npmjs.com/package/@ranout/ngx-breadcrumb
