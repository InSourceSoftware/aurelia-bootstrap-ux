define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BsButtonToolbarCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BsButtonToolbarCustomAttribute = exports.BsButtonToolbarCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsButtonToolbarCustomAttribute(element) {
    _classCallCheck(this, BsButtonToolbarCustomAttribute);

    element.classList.add('btn-toolbar');
    element.setAttribute('role', 'toolbar');
  }) || _class);
});