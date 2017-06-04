import {inject} from 'aurelia-framework';

@inject(Element)
export class BsFormGroupCustomAttribute {
  constructor(element) {
    let div = document.createElement('div');
    div.className = 'form-group';

    let parent = element.parentNode;
    let sibling = element.nextSibling;
    parent.removeChild(element);
    div.appendChild(element);
    parent.insertBefore(div, sibling);
  }
}

