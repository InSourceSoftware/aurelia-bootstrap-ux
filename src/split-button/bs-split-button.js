import {bindable} from 'aurelia-framework';
import {ElementUtils} from "../element-utils";

export class BsSplitButton {
  @bindable label;
  @bindable size = 'md';
  @bindable type = 'default';
  @bindable active = false;
  @bindable disabled = false;
  @bindable icon = '';

  attached() {
    if (this.active) {
      this.button.classList.add('active');
      this.drop.classList.add('active');
    }
    if (this.disabled) {
      this.button.classList.add('disabled');
      this.drop.classList.add('disabled');
    }
    if (this.icon) {
      ElementUtils.addIcon(this.button, this.icon, 'left');
    }
  }
}
