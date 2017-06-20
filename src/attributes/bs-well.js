import {inject} from 'aurelia-framework';

@inject(Element)
export class BsWellCustomAttribute {
  constructor(element) {
    element.classList.add('well');
    if (this.value) {
      this.element.classList.add(`well-${this.value}`);
    }
  }
}
