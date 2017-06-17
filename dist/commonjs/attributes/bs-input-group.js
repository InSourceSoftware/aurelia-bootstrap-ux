'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BsInputGroupCustomAttribute = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

var _elementUtils = require('../element-utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BsInputGroupCustomAttribute = exports.BsInputGroupCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsInputGroupCustomAttribute(element) {
  _classCallCheck(this, BsInputGroupCustomAttribute);

  var div = _elementUtils.ElementUtils.createDiv(element);
  div.classList.add('input-group');
}) || _class);