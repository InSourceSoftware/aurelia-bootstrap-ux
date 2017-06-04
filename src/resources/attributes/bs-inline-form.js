import {inject} from 'aurelia-framework';

@inject(Element)
export class BsInlineFormCustomAttribute {
  constructor(element) {
    element.classList.add('form-inline');
  }
}
