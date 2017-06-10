define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BsButtonGroupCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BsButtonGroupCustomAttribute = exports.BsButtonGroupCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsButtonGroupCustomAttribute(element) {
    _classCallCheck(this, BsButtonGroupCustomAttribute);

    element.classList.add('btn-group');
    element.setAttribute('role', 'group');
  }) || _class);
});