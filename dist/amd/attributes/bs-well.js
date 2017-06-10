define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BsWellCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BsWellCustomAttribute = exports.BsWellCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsWellCustomAttribute(element) {
    _classCallCheck(this, BsWellCustomAttribute);

    element.classList.add('well');
  }) || _class);
});