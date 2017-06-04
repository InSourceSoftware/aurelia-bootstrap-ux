import {inject} from 'aurelia-framework';

@inject(Element)
export class BsInputGroupCustomAttribute {
  constructor(element) {
    let div = document.createElement('div');
    div.className = 'input-group';

    let parent = element.parentNode;
    let sibling = element.nextSibling;
    parent.removeChild(element);
    div.appendChild(element);
    parent.insertBefore(div, sibling);
  }
}

