'use strict';

System.register(['aurelia-framework', '../element-utils'], function (_export, _context) {
  "use strict";

  var inject, ElementUtils, _dec, _class, BsFormGroupCustomAttribute;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_elementUtils) {
      ElementUtils = _elementUtils.ElementUtils;
    }],
    execute: function () {
      _export('BsFormGroupCustomAttribute', BsFormGroupCustomAttribute = (_dec = inject(Element), _dec(_class = function BsFormGroupCustomAttribute(element) {
        _classCallCheck(this, BsFormGroupCustomAttribute);

        var div = ElementUtils.createDiv(element);
        div.classList.add('form-group');
      }) || _class));

      _export('BsFormGroupCustomAttribute', BsFormGroupCustomAttribute);
    }
  };
});