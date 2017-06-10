import {inject} from 'aurelia-framework';

@inject(Element)
export class BsButtonGroupCustomAttribute {
  constructor(element) {
    element.classList.add('btn-group');
    element.setAttribute('role', 'group');
  }
}
