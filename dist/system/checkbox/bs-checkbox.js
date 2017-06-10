'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var bindable, bindingMode, _createClass, _dec, _dec2, _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, BsCheckbox;

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
      bindingMode = _aureliaFramework.bindingMode;
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

      _export('BsCheckbox', BsCheckbox = (_dec = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec2 = bindable({ defaultBindingMode: bindingMode.twoWay }), (_class = function () {
        function BsCheckbox() {
          _classCallCheck(this, BsCheckbox);

          _initDefineProp(this, 'name', _descriptor, this);

          _initDefineProp(this, 'value', _descriptor2, this);

          _initDefineProp(this, 'checked', _descriptor3, this);

          _initDefineProp(this, 'model', _descriptor4, this);

          _initDefineProp(this, 'label', _descriptor5, this);

          _initDefineProp(this, 'helptext', _descriptor6, this);

          _initDefineProp(this, 'disabled', _descriptor7, this);

          _initDefineProp(this, 'inline', _descriptor8, this);
        }

        _createClass(BsCheckbox, [{
          key: 'bind',
          value: function bind() {
            if (this.checked === 'true' || this.checked === 'checked') {
              this.checked = true;
            }
            if (!this.model) {
              this.model = this.value;
            }
          }
        }, {
          key: 'attached',
          value: function attached() {
            if (this.inline) {
              this.lbl.classList.add('checkbox-inline');
            } else {
              this.template.classList.add('checkbox');
            }
            if (this.disabled) {
              this.template.classList.add('disabled');
              this.lbl.classList.add('disabled');
            }
            if (this.helptext) {
              this.input.setAttribute('aria-describedby', this.name + '-help');
            }
          }
        }]);

        return BsCheckbox;
      }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'name', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'value', [_dec], {
        enumerable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'checked', [_dec2], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'model', [bindable], {
        enumerable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'label', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'helptext', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return '';
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'disabled', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, 'inline', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class)));

      _export('BsCheckbox', BsCheckbox);
    }
  };
});