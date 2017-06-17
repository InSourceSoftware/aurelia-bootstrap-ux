'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BsButtonGroupCustomAttribute = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BsButtonGroupCustomAttribute = exports.BsButtonGroupCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
  function BsButtonGroupCustomAttribute(element) {
    _classCallCheck(this, BsButtonGroupCustomAttribute);

    this.element = element;
  }

  _createClass(BsButtonGroupCustomAttribute, [{
    key: 'bind',
    value: function bind() {
      this.element.classList.add('btn-group');
      this.element.setAttribute('role', 'group');

      if (this.value === 'justified') {
        this.element.classList.add('btn-group-justified');
      }
    }
  }]);

  return BsButtonGroupCustomAttribute;
}()) || _class);