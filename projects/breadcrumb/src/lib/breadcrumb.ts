export class Breadcrumb {

  private _label: string;
  private _href: string;

  constructor(label: string, href: string) {
    this._label = label;
    this._href = href;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get href(): string {
    return this._href;
  }

  set href(value: string) {
    this._href = value;
  }
}
