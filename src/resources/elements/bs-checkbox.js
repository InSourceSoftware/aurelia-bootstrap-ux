import {bindable, bindingMode} from 'aurelia-framework';

export class BsCheckbox {
  @bindable name;
  @bindable({ defaultBindingMode: bindingMode.twoWay}) value;
  @bindable({ defaultBindingMode: bindingMode.twoWay}) checked = false;
  @bindable model;
  @bindable label = '';
  @bindable disabled = false;
  @bindable inline = false;

  bind() {
    this.checked = this.checked === 'true' || this.checked === 'checked';
    if (!this.model) {
      this.model = this.value;
    }
  }

  attached() {
    if (this.inline) {
      this.lbl.classList.add('checkbox-inline');
    } else {
      this.template.classList.add('checkbox');
    }
    if (this.disabled) {
      this.template.classList.add('disabled');
      this.lbl.classList.add('disabled');
    }
  }
}
