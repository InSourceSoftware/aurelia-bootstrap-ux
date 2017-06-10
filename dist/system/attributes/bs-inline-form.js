'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, _dec, _class, BsInlineFormCustomAttribute;

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
      _export('BsInlineFormCustomAttribute', BsInlineFormCustomAttribute = (_dec = inject(Element), _dec(_class = function BsInlineFormCustomAttribute(element) {
        _classCallCheck(this, BsInlineFormCustomAttribute);

        element.classList.add('form-inline');
      }) || _class));

      _export('BsInlineFormCustomAttribute', BsInlineFormCustomAttribute);
    }
  };
});