import {bindable} from 'aurelia-framework';

export class BsRadio {
  @bindable name;
  @bindable label = '';
  @bindable value;
  @bindable model;
  @bindable checked = false;
  @bindable disabled = false;
  @bindable layout = 'default';

  bind() {
    this.checked = this.checked === 'true' || this.checked === 'checked';
    this.disabled = this.disabled === 'true' || this.disabled === 'disabled';
    if (!this.model) {
      this.model = this.value;
    }
  }
}
