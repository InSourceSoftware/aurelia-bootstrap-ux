'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BsFormGroupCustomAttribute = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

var _elementUtils = require('./element-utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BsFormGroupCustomAttribute = exports.BsFormGroupCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsFormGroupCustomAttribute(element) {
  _classCallCheck(this, BsFormGroupCustomAttribute);

  var div = _elementUtils.ElementUtils.createDiv(element);
  element.classList.add('form-group');
}) || _class);