import {inject} from 'aurelia-framework';

@inject(Element)
export class BsInputGroupCustomAttribute {
  constructor(element) {
    if (element.tagName.toLowerCase() === 'div') {
      element.classList.add('input-group');
    } else {
      let div = document.createElement('div');
      div.className = 'input-group';

      let parent = element.parentNode;
      let sibling = element.nextSibling;
      parent.removeChild(element);
      div.appendChild(element);
      if (sibling) {
        parent.insertBefore(div, sibling);
      } else {
        parent.appendChild(div);
      }
    }
  }
}
