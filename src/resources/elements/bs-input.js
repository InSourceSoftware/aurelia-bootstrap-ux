import {bindable} from 'aurelia-framework';

export class BsInput {
  @bindable name;
  @bindable type = 'text';
  @bindable size = 'md';
  @bindable label = '';
  @bindable srOnly = false;
  @bindable placeholder = '';
  @bindable value;
  @bindable disabled = false;
  @bindable readonly = false;

  bind() {
    this.disabled = !!this.disabled;
    this.readonly = !!this.readonly;
  }
}
