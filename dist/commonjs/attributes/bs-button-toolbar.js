'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BsButtonToolbarCustomAttribute = undefined;

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BsButtonToolbarCustomAttribute = exports.BsButtonToolbarCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsButtonToolbarCustomAttribute(element) {
  _classCallCheck(this, BsButtonToolbarCustomAttribute);

  element.classList.add('btn-toolbar');
  element.setAttribute('role', 'toolbar');
}) || _class);