import {bindable, bindingMode} from 'aurelia-framework';
import {ElementUtils} from "../element-utils";

export class BsButton {
  @bindable size = 'md';
  @bindable type = 'default';
  @bindable block = false;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) active = false;
  @bindable disabled = false;
  @bindable toggle = false;
  @bindable({ defaultBindingMode: bindingMode.oneWay }) icon;
  @bindable iconPos = 'left';

  bind() {
    if (this.icon) {
      ElementUtils.addIcon(this.button, this.icon, this.iconPos);
    }
  }
}
