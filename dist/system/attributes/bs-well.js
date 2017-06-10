'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, _dec, _class, BsWellCustomAttribute;

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
      _export('BsWellCustomAttribute', BsWellCustomAttribute = (_dec = inject(Element), _dec(_class = function BsWellCustomAttribute(element) {
        _classCallCheck(this, BsWellCustomAttribute);

        element.classList.add('well');
      }) || _class));

      _export('BsWellCustomAttribute', BsWellCustomAttribute);
    }
  };
});