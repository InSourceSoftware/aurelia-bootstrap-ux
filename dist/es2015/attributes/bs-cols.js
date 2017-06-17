'use strict';

exports.__esModule = true;
exports.BsColsCustomAttribute = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

var _elementUtils = require('../element-utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BsColsCustomAttribute = exports.BsColsCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
  function BsColsCustomAttribute(element) {
    _classCallCheck(this, BsColsCustomAttribute);

    this.element = element;
  }

  BsColsCustomAttribute.prototype.bind = function bind() {
    var container = this.element;
    if (container.tagName.toLowerCase() !== 'label') {
      container = _elementUtils.ElementUtils.createDiv(this.element);
    }

    var classList = this.value.split(' ');
    classList.forEach(function (clazz) {
      return container.classList.add('col-' + clazz);
    });
  };

  return BsColsCustomAttribute;
}()) || _class);