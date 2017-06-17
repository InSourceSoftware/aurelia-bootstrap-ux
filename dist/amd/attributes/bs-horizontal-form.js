define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BsHorizontalFormCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BsHorizontalFormCustomAttribute = exports.BsHorizontalFormCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsHorizontalFormCustomAttribute(element) {
    _classCallCheck(this, BsHorizontalFormCustomAttribute);

    element.classList.add('form-horizontal');
  }) || _class);
});