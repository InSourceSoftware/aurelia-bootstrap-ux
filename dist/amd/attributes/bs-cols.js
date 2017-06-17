define(['exports', 'aurelia-framework', '../element-utils'], function (exports, _aureliaFramework, _elementUtils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.BsColsCustomAttribute = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var BsColsCustomAttribute = exports.BsColsCustomAttribute = (_dec = (0, _aureliaFramework.inject)(Element), _dec(_class = function () {
    function BsColsCustomAttribute(element) {
      _classCallCheck(this, BsColsCustomAttribute);

      this.element = element;
    }

    _createClass(BsColsCustomAttribute, [{
      key: 'bind',
      value: function bind() {
        var container = this.element;
        if (container.tagName.toLowerCase() !== 'label') {
          container = _elementUtils.ElementUtils.createDiv(this.element);
        }

        var classList = this.value.split(' ');
        classList.forEach(function (clazz) {
          return container.classList.add('col-' + clazz);
        });
      }
    }]);

    return BsColsCustomAttribute;
  }()) || _class);
});