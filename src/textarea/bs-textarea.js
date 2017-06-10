import {bindable, bindingMode} from 'aurelia-framework';

export class BsTextarea {
  @bindable name;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
  @bindable rows = 3;
  @bindable label = '';
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
