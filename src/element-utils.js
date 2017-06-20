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

  /**
   * Add a span containing a glyphicon to the given element's list of children.
   * <p>
   * The <code>iconPos</code> param determines if it is at the beginning (left)
   * or the end (right) of the list.
   *
   * @param element The target Element
   * @param icon The name of a glyphicon
   * @param iconPos The position of the icon, either left or right
   */
  static addIcon(element, icon, iconPos = 'left') {
    let span = document.createElement('span');
    span.classList.add('glyphicon');
    span.classList.add(`glyphicon-${icon}`);
    span.setAttribute('aria-hidden', 'true');
    if (iconPos === 'left' && element.hasChildNodes()) {
      element.insertBefore(span, element.childNodes[0]);
    } else {
      element.appendChild(span);
    }
  }
}