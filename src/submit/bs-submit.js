import {bindable} from 'aurelia-framework';
import {ElementUtils} from "../element-utils";

export class BsSubmit {
  @bindable size = 'md';
  @bindable type = 'default';
  @bindable block = false;
  @bindable active = false;
  @bindable disabled = false;
  @bindable icon = '';
  @bindable iconPos = 'left';

  bind() {
    this.block = !!this.block;
    this.active = !!this.active;
    this.disabled = !!this.disabled;
  }

  attached() {
    if (this.block) {
      this.button.classList.add('btn-block');
    }
    if (this.active) {
      this.button.classList.add('active');
    }
    if (this.disabled) {
      this.button.classList.add('disabled');
    }
    if (this.icon) {
      ElementUtils.addIcon(this.button, this.icon, this.iconPos);
    }
  }
}
