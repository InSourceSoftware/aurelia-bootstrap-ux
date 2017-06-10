'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BsFormGroupCustomAttribute = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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