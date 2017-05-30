import {bindable} from 'aurelia-framework';

export class BsButton {
  @bindable size = 'md';
  @bindable kind = 'default';
  @bindable type = 'button';
  @bindable structure = 'default';
  @bindable icon = '';
}

