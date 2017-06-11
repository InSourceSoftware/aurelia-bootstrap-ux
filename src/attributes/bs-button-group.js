import {inject} from 'aurelia-framework';

@inject(Element)
export class BsButtonGroupCustomAttribute {
  value;

  constructor(element) {
    this.element = element;
  }

  bind() {
    this.element.classList.add('btn-group');
    this.element.setAttribute('role', 'group');

    if (this.value === 'justified') {
      this.element.classList.add('btn-group-justified');
    }
  }
}
