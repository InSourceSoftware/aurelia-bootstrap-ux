define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BsInputGroupCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BsInputGroupCustomAttribute = exports.BsInputGroupCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsInputGroupCustomAttribute(element) {
    _classCallCheck(this, BsInputGroupCustomAttribute);

    if (element.tagName.toLowerCase() === 'div') {
      element.classList.add('input-group');
    } else {
      var div = document.createElement('div');
      div.className = 'input-group';

      var parent = element.parentNode;
      var sibling = element.nextSibling;
      parent.removeChild(element);
      div.appendChild(element);
      if (sibling) {
        parent.insertBefore(div, sibling);
      } else {
        parent.appendChild(div);
      }
    }
  }) || _class);
});