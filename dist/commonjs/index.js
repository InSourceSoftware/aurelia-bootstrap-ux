'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _bsButtonGroup = require('./attributes/bs-button-group');

Object.defineProperty(exports, 'BsButtonGroupCustomAttribute', {
  enumerable: true,
  get: function get() {
    return _bsButtonGroup.BsButtonGroupCustomAttribute;
  }
});

var _bsButtonToolbar = require('./attributes/bs-button-toolbar');

Object.defineProperty(exports, 'BsButtonToolbarCustomAttribute', {
  enumerable: true,
  get: function get() {
    return _bsButtonToolbar.BsButtonToolbarCustomAttribute;
  }
});

var _bsDropdownMenu = require('./attributes/bs-dropdown-menu');

Object.defineProperty(exports, 'BsDropdownMenuCustomAttribute', {
  enumerable: true,
  get: function get() {
    return _bsDropdownMenu.BsDropdownMenuCustomAttribute;
  }
});

var _bsFormGroup = require('./attributes/bs-form-group');

Object.defineProperty(exports, 'BsFormGroupCustomAttribute', {
  enumerable: true,
  get: function get() {
    return _bsFormGroup.BsFormGroupCustomAttribute;
  }
});

var _bsInlineForm = require('./attributes/bs-inline-form');

Object.defineProperty(exports, 'BsInlineFormCustomAttribute', {
  enumerable: true,
  get: function get() {
    return _bsInlineForm.BsInlineFormCustomAttribute;
  }
});

var _bsInputGroup = require('./attributes/bs-input-group');

Object.defineProperty(exports, 'BsInputGroupCustomAttribute', {
  enumerable: true,
  get: function get() {
    return _bsInputGroup.BsInputGroupCustomAttribute;
  }
});

var _bsWell = require('./attributes/bs-well');

Object.defineProperty(exports, 'BsWellCustomAttribute', {
  enumerable: true,
  get: function get() {
    return _bsWell.BsWellCustomAttribute;
  }
});

var _bsButton = require('./button/bs-button');

Object.defineProperty(exports, 'BsButton', {
  enumerable: true,
  get: function get() {
    return _bsButton.BsButton;
  }
});

var _bsCheckbox = require('./checkbox/bs-checkbox');

Object.defineProperty(exports, 'BsCheckbox', {
  enumerable: true,
  get: function get() {
    return _bsCheckbox.BsCheckbox;
  }
});

var _bsDropButton = require('./drop-button/bs-drop-button');

Object.defineProperty(exports, 'BsDropButton', {
  enumerable: true,
  get: function get() {
    return _bsDropButton.BsDropButton;
  }
});

var _bsFooter = require('./footer/bs-footer');

Object.defineProperty(exports, 'BsFooter', {
  enumerable: true,
  get: function get() {
    return _bsFooter.BsFooter;
  }
});

var _bsHeader = require('./header/bs-header');

Object.defineProperty(exports, 'BsHeader', {
  enumerable: true,
  get: function get() {
    return _bsHeader.BsHeader;
  }
});

var _bsIcon = require('./icon/bs-icon');

Object.defineProperty(exports, 'BsIcon', {
  enumerable: true,
  get: function get() {
    return _bsIcon.BsIcon;
  }
});

var _bsInput = require('./input/bs-input');

Object.defineProperty(exports, 'BsInput', {
  enumerable: true,
  get: function get() {
    return _bsInput.BsInput;
  }
});

var _bsNav = require('./nav/bs-nav');

Object.defineProperty(exports, 'BsNav', {
  enumerable: true,
  get: function get() {
    return _bsNav.BsNav;
  }
});

var _bsNavbar = require('./navbar/bs-navbar');

Object.defineProperty(exports, 'BsNavbar', {
  enumerable: true,
  get: function get() {
    return _bsNavbar.BsNavbar;
  }
});

var _bsRadio = require('./radio/bs-radio');

Object.defineProperty(exports, 'BsRadio', {
  enumerable: true,
  get: function get() {
    return _bsRadio.BsRadio;
  }
});

var _bsSelect = require('./select/bs-select');

Object.defineProperty(exports, 'BsSelect', {
  enumerable: true,
  get: function get() {
    return _bsSelect.BsSelect;
  }
});

var _bsSubmit = require('./submit/bs-submit');

Object.defineProperty(exports, 'BsSubmit', {
  enumerable: true,
  get: function get() {
    return _bsSubmit.BsSubmit;
  }
});

var _bsTextarea = require('./textarea/bs-textarea');

Object.defineProperty(exports, 'BsTextarea', {
  enumerable: true,
  get: function get() {
    return _bsTextarea.BsTextarea;
  }
});
exports.configure = configure;
function configure(config) {
  config.globalResources(['./attributes/bs-button-group', './attributes/bs-button-toolbar', './attributes/bs-dropdown-menu', './attributes/bs-form-group', './attributes/bs-inline-form', './attributes/bs-input-group', './attributes/bs-well']);
  config.globalResources(['./button/bs-button', './checkbox/bs-checkbox', './drop-button/bs-drop-button', './footer/bs-footer', './header/bs-header', './icon/bs-icon', './input/bs-input', './nav/bs-nav', './navbar/bs-navbar', './radio/bs-radio', './select/bs-select', './submit/bs-submit', './textarea/bs-textarea']);
}