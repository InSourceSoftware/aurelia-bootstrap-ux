'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElementUtils = exports.ElementUtils = function () {
  function ElementUtils() {
    _classCallCheck(this, ElementUtils);
  }

  ElementUtils.createDiv = function createDiv(element) {
    var div = element;
    if (div.tagName.toLowerCase() !== 'div') {
      var parent = element.parentNode;
      var sibling = element.nextSibling;
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
  };

  ElementUtils.addIcon = function addIcon(element, icon, iconPos) {
    var span = document.createElement('span');
    span.classList.add('glyphicon');
    span.classList.add('glyphicon-' + icon);
    span.setAttribute('aria-hidden', 'true');
    if (iconPos === 'left') {
      element.insertBefore(span, element.hasChildNodes() > 0 ? element.childNodes[0] : null);
    } else {
      element.appendChild(span);
    }
  };

  return ElementUtils;
}();