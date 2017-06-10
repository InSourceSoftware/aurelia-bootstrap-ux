define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BsInlineFormCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BsInlineFormCustomAttribute = exports.BsInlineFormCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsInlineFormCustomAttribute(element) {
    _classCallCheck(this, BsInlineFormCustomAttribute);

    element.classList.add('form-inline');
  }) || _class);
});