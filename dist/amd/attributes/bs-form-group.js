define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BsFormGroupCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BsFormGroupCustomAttribute = exports.BsFormGroupCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsFormGroupCustomAttribute(element) {
    _classCallCheck(this, BsFormGroupCustomAttribute);

    if (element.tagName.toLowerCase() === 'div') {
      element.classList.add('form-group');
    } else {
      var div = document.createElement('div');
      div.className = 'form-group';

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