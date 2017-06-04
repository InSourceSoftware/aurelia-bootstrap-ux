import {inject} from 'aurelia-framework';

@inject(Element)
export class BsButtonToolbarCustomAttribute {
  constructor(element) {
    element.classList.add('btn-toolbar');
    element.setAttribute('role', 'toolbar');
  }
}
