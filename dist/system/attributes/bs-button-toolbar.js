'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, _dec, _class, BsButtonToolbarCustomAttribute;

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
      _export('BsButtonToolbarCustomAttribute', BsButtonToolbarCustomAttribute = (_dec = inject(Element), _dec(_class = function BsButtonToolbarCustomAttribute(element) {
        _classCallCheck(this, BsButtonToolbarCustomAttribute);

        element.classList.add('btn-toolbar');
        element.setAttribute('role', 'toolbar');
      }) || _class));

      _export('BsButtonToolbarCustomAttribute', BsButtonToolbarCustomAttribute);
    }
  };
});