import {bindable} from 'aurelia-framework';

export class BsSelect {
  @bindable name;
  @bindable label;
  @bindable placeholder;
  @bindable value;
  @bindable options = [];
  @bindable multiple = false;

  bind() {
    this.multiple = !!this.multiple;
  }
}
