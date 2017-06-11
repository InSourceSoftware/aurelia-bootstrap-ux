define(['exports', 'aurelia-framework', './element-utils'], function (exports, _aureliaFramework, _elementUtils) {
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

    var div = _elementUtils.ElementUtils.createDiv(element);
    div.classList.add('form-group');
  }) || _class);
});