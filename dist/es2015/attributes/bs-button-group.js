'use strict';

exports.__esModule = true;
exports.BsButtonGroupCustomAttribute = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BsButtonGroupCustomAttribute = exports.BsButtonGroupCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
  function BsButtonGroupCustomAttribute(element) {
    _classCallCheck(this, BsButtonGroupCustomAttribute);

    this.element = element;
  }

  BsButtonGroupCustomAttribute.prototype.bind = function bind() {
    this.element.classList.add('btn-group');
    this.element.setAttribute('role', 'group');

    if (this.value === 'justified') {
      this.element.classList.add('btn-group-justified');
    }
  };

  return BsButtonGroupCustomAttribute;
}()) || _class);