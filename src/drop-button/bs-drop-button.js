import {bindable} from 'aurelia-framework';
import {ElementUtils} from "../element-utils";

export class BsDropButton {
  @bindable size = 'md';
  @bindable type = 'default';
  @bindable block = false;
  @bindable active = false;
  @bindable disabled = false;
  @bindable icon;

  attached() {
    if (this.icon) {
      ElementUtils.addIcon(this.button, this.icon);
    }
  }
}
