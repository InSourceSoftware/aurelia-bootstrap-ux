'use strict';

System.register(['aurelia-framework', '../element-utils'], function (_export, _context) {
  "use strict";

  var bindable, ElementUtils, _createClass, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, BsSubmit;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
    }, function (_elementUtils) {
      ElementUtils = _elementUtils.ElementUtils;
    }],
    execute: function () {
      _createClass = function () {
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

      _export('BsSubmit', BsSubmit = (_class = function () {
        function BsSubmit() {
          _classCallCheck(this, BsSubmit);

          _initDefineProp(this, 'size', _descriptor, this);

          _initDefineProp(this, 'type', _descriptor2, this);

          _initDefineProp(this, 'block', _descriptor3, this);

          _initDefineProp(this, 'active', _descriptor4, this);

          _initDefineProp(this, 'disabled', _descriptor5, this);

          _initDefineProp(this, 'icon', _descriptor6, this);

          _initDefineProp(this, 'iconPos', _descriptor7, this);
        }

        _createClass(BsSubmit, [{
          key: 'bind',
          value: function bind() {
            this.block = !!this.block;
            this.active = !!this.active;
            this.disabled = !!this.disabled;
          }
        }, {
          key: 'attached',
          value: function attached() {
            if (this.block) {
              this.button.classList.add('btn-block');
            }
            if (this.active) {
              this.button.classList.add('active');
            }
            if (this.disabled) {
              this.button.classList.add('disabled');
            }
            if (this.icon) {
              ElementUtils.addIcon(this.button, this.icon, this.iconPos);
            }
          }
        }]);

        return BsSubmit;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'size', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'md';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'type', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'default';
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'block', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'active', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'disabled', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'icon', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'iconPos', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return 'left';
        }
      })), _class));

      _export('BsSubmit', BsSubmit);
    }
  };
});