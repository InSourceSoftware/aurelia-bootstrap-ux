define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BsDropdownMenuCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var BsDropdownMenuCustomAttribute = exports.BsDropdownMenuCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function BsDropdownMenuCustomAttribute(element) {
    _classCallCheck(this, BsDropdownMenuCustomAttribute);

    element.classList.add('dropdown-menu');
  }) || _class);
});