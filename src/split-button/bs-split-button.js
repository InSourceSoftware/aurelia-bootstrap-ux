import {bindable} from 'aurelia-framework';
import {ElementUtils} from "../element-utils";

export class BsSplitButton {
  @bindable label;
  @bindable size = 'md';
  @bindable type = 'default';
  @bindable active = false;
  @bindable disabled = false;
  @bindable icon;

  attached() {
    if (this.icon) {
      ElementUtils.addIcon(this.button, this.icon);
    }
  }
}
