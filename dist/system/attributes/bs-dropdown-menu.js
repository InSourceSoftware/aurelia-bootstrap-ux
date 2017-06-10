'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, _dec, _class, BsDropdownMenuCustomAttribute;

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
      _export('BsDropdownMenuCustomAttribute', BsDropdownMenuCustomAttribute = (_dec = inject(Element), _dec(_class = function BsDropdownMenuCustomAttribute(element) {
        _classCallCheck(this, BsDropdownMenuCustomAttribute);

        element.classList.add('dropdown-menu');
      }) || _class));

      _export('BsDropdownMenuCustomAttribute', BsDropdownMenuCustomAttribute);
    }
  };
});