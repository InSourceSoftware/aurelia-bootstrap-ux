import {inject} from 'aurelia-framework';
import {ElementUtils} from './element-utils';

@inject(Element)
export class BsColsCustomAttribute {
  value;

  constructor(element) {
    this.element = element;
  }

  bind() {
    let container = this.element;
    if (container.tagName.toLowerCase() !== 'label') {
      container = ElementUtils.createDiv(this.element);
    }

    let classList = this.value.split(' ');
    classList.forEach(clazz => container.classList.add(`col-${clazz}`));
  }
}
