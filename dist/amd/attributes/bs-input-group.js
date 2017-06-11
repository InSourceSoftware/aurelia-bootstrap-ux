define(['exports', 'aurelia-framework', './element-utils'], function (exports, _aureliaFramework, _elementUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BsInputGroupCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BsInputGroupCustomAttribute = exports.BsInputGroupCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsInputGroupCustomAttribute(element) {
    _classCallCheck(this, BsInputGroupCustomAttribute);

    var div = _elementUtils.ElementUtils.createDiv(element);
    div.classList.add('input-group');
  }) || _class);
});