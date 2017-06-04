import {bindable, bindingMode} from 'aurelia-framework';

export class BsRadio {
  @bindable name;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable({ defaultBindingMode: bindingMode.twoWay}) checked = false;
  @bindable model;
  @bindable label = '';
  @bindable disabled = false;
  @bindable inline = false;

  bind() {
    if (!this.model) {
      this.model = this.value;
    }
  }

  attached() {
    if (this.inline) {
      this.lbl.classList.add('radio-inline');
    } else {
      this.template.classList.add('radio');
    }
    if (this.disabled) {
      this.template.classList.add('disabled');
      this.lbl.classList.add('disabled');
    }
  }
}
