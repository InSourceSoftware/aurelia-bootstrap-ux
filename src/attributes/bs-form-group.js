import {inject} from 'aurelia-framework';

@inject(Element)
export class BsFormGroupCustomAttribute {
  constructor(element) {
    if (element.tagName.toLowerCase() === 'div') {
      element.classList.add('form-group');
    } else {
      let div = document.createElement('div');
      div.className = 'form-group';

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
