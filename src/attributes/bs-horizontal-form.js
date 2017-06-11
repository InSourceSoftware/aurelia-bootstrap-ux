import {inject} from 'aurelia-framework';

@inject(Element)
export class BsHorizontalFormCustomAttribute {
  constructor(element) {
    element.classList.add('form-horizontal');
  }
}
