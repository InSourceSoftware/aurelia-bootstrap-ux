'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, _createClass, _dec, _class, BsButtonGroupCustomAttribute;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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

      _export('BsButtonGroupCustomAttribute', BsButtonGroupCustomAttribute = (_dec = inject(Element), _dec(_class = function () {
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
      }()) || _class));

      _export('BsButtonGroupCustomAttribute', BsButtonGroupCustomAttribute);
    }
  };
});