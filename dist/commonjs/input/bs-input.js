'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BsInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10;

var _aureliaFramework = require('aurelia-framework');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var BsInput = exports.BsInput = (_dec = (0, _aureliaFramework.bindable)({ defaultBindingMode: _aureliaFramework.bindingMode.twoWay }), (_class = function () {
  function BsInput() {
    _classCallCheck(this, BsInput);

    _initDefineProp(this, 'name', _descriptor, this);

    _initDefineProp(this, 'value', _descriptor2, this);

    _initDefineProp(this, 'type', _descriptor3, this);

    _initDefineProp(this, 'size', _descriptor4, this);

    _initDefineProp(this, 'label', _descriptor5, this);

    _initDefineProp(this, 'placeholder', _descriptor6, this);

    _initDefineProp(this, 'helptext', _descriptor7, this);

    _initDefineProp(this, 'disabled', _descriptor8, this);

    _initDefineProp(this, 'readonly', _descriptor9, this);

    _initDefineProp(this, 'srOnly', _descriptor10, this);
  }

  _createClass(BsInput, [{
    key: 'attached',
    value: function attached() {
      if (this.label && this.srOnly) {
        this.lbl.classList.add('sr-only');
      }
      if (this.disabled) {
        this.input.classList.add('disabled');
      }
      if (this.readonly) {
        this.input.classList.add('readonly');
      }
      if (this.helptext) {
        this.input.setAttribute('aria-describedby', this.name + '-help');
      }
    }
  }]);

  return BsInput;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'name', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'value', [_dec], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'type', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'text';
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'size', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return 'md';
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'label', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'placeholder', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'helptext', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'disabled', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, 'readonly', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, 'srOnly', [_aureliaFramework.bindable], {
  enumerable: true,
  initializer: function initializer() {
    return false;
  }
})), _class));