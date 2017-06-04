import {inject} from 'aurelia-framework';

@inject(Element)
export class BsButtonGroupCustomAttribute {
  constructor(element) {
    let div = document.createElement('div');
    div.className = 'btn-group';
    div.role = 'group';

    let parent = element.parentNode;
    let sibling = element.nextSibling;
    parent.removeChild(element);
    div.appendChild(element);
    parent.insertBefore(div, sibling);
  }
}

