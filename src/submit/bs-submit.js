import {bindable} from 'aurelia-framework';
import {ElementUtils} from "../element-utils";

export class BsSubmit {
  @bindable size = 'md';
  @bindable type = 'default';
  @bindable block = false;
  @bindable active = false;
  @bindable disabled = false;
  @bindable icon;
  @bindable iconPos = 'left';

  attached() {
    if (this.icon) {
      ElementUtils.addIcon(this.button, this.icon, this.iconPos);
    }
  }
}
