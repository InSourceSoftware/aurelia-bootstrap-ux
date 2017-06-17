'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ElementUtils = exports.ElementUtils = function () {
  function ElementUtils() {
    _classCallCheck(this, ElementUtils);
  }

  _createClass(ElementUtils, null, [{
    key: 'createDiv',
    value: function createDiv(element) {
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
    }
  }, {
    key: 'addIcon',
    value: function addIcon(element, icon, iconPos) {
      var span = document.createElement('span');
      span.classList.add('glyphicon');
      span.classList.add('glyphicon-' + icon);
      span.setAttribute('aria-hidden', 'true');
      if (iconPos === 'left') {
        element.insertBefore(span, element.hasChildNodes() > 0 ? element.childNodes[0] : null);
      } else {
        element.appendChild(span);
      }
    }
  }]);

  return ElementUtils;
}();