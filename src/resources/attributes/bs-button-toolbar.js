import {inject} from 'aurelia-framework';

@inject(Element)
export class BsButtonToolbarCustomAttribute {
  constructor(element) {
    let div = document.createElement('div');
    div.className = 'btn-toolbar';
    div.role = 'toolbar';

    let parent = element.parentNode;
    let sibling = element.nextSibling;
    parent.removeChild(element);
    div.appendChild(element);
    parent.insertBefore(div, sibling);
  }
}

