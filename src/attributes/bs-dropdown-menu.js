import {inject} from 'aurelia-framework';

@inject(Element)
export class BsDropdownMenuCustomAttribute {
  constructor(element) {
    element.classList.add('dropdown-menu');
  }
}

