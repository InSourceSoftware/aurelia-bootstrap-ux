import {inject} from 'aurelia-framework';
import {ElementUtils} from "../element-utils";

@inject(Element)
export class BsInlineFormCustomAttribute {
  constructor(element) {
    let div = ElementUtils.createDiv(element);
    div.classList.add('form-inline');
  }
}
