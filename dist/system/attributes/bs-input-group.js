'use strict';

System.register(['aurelia-framework', './element-utils'], function (_export, _context) {
  "use strict";

  var inject, ElementUtils, _dec, _class, BsInputGroupCustomAttribute;

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
      _export('BsInputGroupCustomAttribute', BsInputGroupCustomAttribute = (_dec = inject(Element), _dec(_class = function BsInputGroupCustomAttribute(element) {
        _classCallCheck(this, BsInputGroupCustomAttribute);

        var div = ElementUtils.createDiv(element);
        element.classList.add('input-group');
      }) || _class));

      _export('BsInputGroupCustomAttribute', BsInputGroupCustomAttribute);
    }
  };
});