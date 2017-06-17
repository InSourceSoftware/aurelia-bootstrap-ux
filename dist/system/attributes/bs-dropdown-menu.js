'use strict';

System.register(['aurelia-framework', '../element-utils'], function (_export, _context) {
  "use strict";

  var inject, ElementUtils, _dec, _class, BsDropdownMenuCustomAttribute;

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
      _export('BsDropdownMenuCustomAttribute', BsDropdownMenuCustomAttribute = (_dec = inject(Element), _dec(_class = function BsDropdownMenuCustomAttribute(element) {
        _classCallCheck(this, BsDropdownMenuCustomAttribute);

        element.classList.add('dropdown-menu');
      }) || _class));

      _export('BsDropdownMenuCustomAttribute', BsDropdownMenuCustomAttribute);
    }
  };
});