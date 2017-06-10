import {bindable, bindingMode} from 'aurelia-framework';

export class BsInput {
  @bindable name;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable type = 'text';
  @bindable size = 'md';
  @bindable label = '';
  @bindable placeholder = '';
  @bindable helptext = '';
  @bindable disabled = false;
  @bindable readonly = false;
  @bindable srOnly = false;

  attached() {
    if (this.label && this.srOnly) {
      this.lbl.classList.add('sr-only');
    }
    if (this.disabled) {
      this.input.classList.add('disabled');
    }
    if (this.readonly) {
      this.input.classList.add('readonly');
    }
    if (this.helptext) {
      this.input.setAttribute('aria-describedby', `${this.name}-help`);
    }
  }
}
