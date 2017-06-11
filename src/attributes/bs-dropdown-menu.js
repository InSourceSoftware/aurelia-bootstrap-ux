import {inject} from 'aurelia-framework';
import {ElementUtils} from "./element-utils";

@inject(Element)
export class BsDropdownMenuCustomAttribute {
  constructor(element) {
    element.classList.add('dropdown-menu');
  }
}
