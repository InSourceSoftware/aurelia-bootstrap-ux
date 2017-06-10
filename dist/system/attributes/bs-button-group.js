'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, _dec, _class, BsButtonGroupCustomAttribute;

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
      _export('BsButtonGroupCustomAttribute', BsButtonGroupCustomAttribute = (_dec = inject(Element), _dec(_class = function BsButtonGroupCustomAttribute(element) {
        _classCallCheck(this, BsButtonGroupCustomAttribute);

        element.classList.add('btn-group');
        element.setAttribute('role', 'group');
      }) || _class));

      _export('BsButtonGroupCustomAttribute', BsButtonGroupCustomAttribute);
    }
  };
});