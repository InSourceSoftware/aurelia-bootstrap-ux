export class ElementUtils {
  /**
   * Create a div containing the given element and insert into the DOM in the
   * given element's position. Returns the given element, if already a div.
   *
   * @param element An Element to be wrapped in a div
   * @returns {Element} The element if already a div, or a new div containing the element
   */
  static createDiv(element) {
    let div = element;
    if (div.tagName.toLowerCase() !== 'div') {
      let parent = element.parentNode;
      let sibling = element.nextSibling;
      parent.removeChild(element);
      div = document.createElement('div');
      div.appendChild(element);
      if (sibling !== null) {
        parent.insertBefore(div, sibling);
      } else {
        parent.appendChild(div);
      }
    }

    return div;
  }

  static addIcon(element, icon, iconPos) {
    let span = document.createElement('span');
    span.classList.add('glyphicon');
    span.classList.add(`glyphicon-${icon}`);
    span.setAttribute('aria-hidden', 'true');
    if (iconPos === 'left') {
      element.insertBefore(span, element.hasChildNodes() > 0 ? element.childNodes[0] : null);
    } else {
      element.appendChild(span);
    }
  }
}