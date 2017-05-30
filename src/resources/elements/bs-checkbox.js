import {bindable} from 'aurelia-framework';

export class BsCheckbox {
  @bindable name;
  @bindable label = '';
  @bindable value;
  @bindable checked = false;
  @bindable disabled = false;
  @bindable layout = 'default';

  bind() {
    this.checked = this.checked === 'true' || this.checked === 'checked';
    this.disabled = this.disabled === 'true' || this.disabled === 'disabled';
  }
}
