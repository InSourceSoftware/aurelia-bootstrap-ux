'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
  "use strict";

  var inject, _dec, _class, BsInputGroupCustomAttribute;

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
      _export('BsInputGroupCustomAttribute', BsInputGroupCustomAttribute = (_dec = inject(Element), _dec(_class = function BsInputGroupCustomAttribute(element) {
        _classCallCheck(this, BsInputGroupCustomAttribute);

        if (element.tagName.toLowerCase() === 'div') {
          element.classList.add('input-group');
        } else {
          var div = document.createElement('div');
          div.className = 'input-group';

          var parent = element.parentNode;
          var sibling = element.nextSibling;
          parent.removeChild(element);
          div.appendChild(element);
          if (sibling) {
            parent.insertBefore(div, sibling);
          } else {
            parent.appendChild(div);
          }
        }
      }) || _class));

      _export('BsInputGroupCustomAttribute', BsInputGroupCustomAttribute);
    }
  };
});