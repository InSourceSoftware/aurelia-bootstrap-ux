define(['exports', './attributes/bs-button-group', './attributes/bs-button-toolbar', './attributes/bs-dropdown-menu', './attributes/bs-form-group', './attributes/bs-inline-form', './attributes/bs-input-group', './attributes/bs-well', './button/bs-button', './checkbox/bs-checkbox', './drop-button/bs-drop-button', './footer/bs-footer', './header/bs-header', './icon/bs-icon', './input/bs-input', './nav/bs-nav', './navbar/bs-navbar', './radio/bs-radio', './select/bs-select', './submit/bs-submit', './textarea/bs-textarea'], function (exports, _bsButtonGroup, _bsButtonToolbar, _bsDropdownMenu, _bsFormGroup, _bsInlineForm, _bsInputGroup, _bsWell, _bsButton, _bsCheckbox, _bsDropButton, _bsFooter, _bsHeader, _bsIcon, _bsInput, _bsNav, _bsNavbar, _bsRadio, _bsSelect, _bsSubmit, _bsTextarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'BsButtonGroupCustomAttribute', {
    enumerable: true,
    get: function () {
      return _bsButtonGroup.BsButtonGroupCustomAttribute;
    }
  });
  Object.defineProperty(exports, 'BsButtonToolbarCustomAttribute', {
    enumerable: true,
    get: function () {
      return _bsButtonToolbar.BsButtonToolbarCustomAttribute;
    }
  });
  Object.defineProperty(exports, 'BsDropdownMenuCustomAttribute', {
    enumerable: true,
    get: function () {
      return _bsDropdownMenu.BsDropdownMenuCustomAttribute;
    }
  });
  Object.defineProperty(exports, 'BsFormGroupCustomAttribute', {
    enumerable: true,
    get: function () {
      return _bsFormGroup.BsFormGroupCustomAttribute;
    }
  });
  Object.defineProperty(exports, 'BsInlineFormCustomAttribute', {
    enumerable: true,
    get: function () {
      return _bsInlineForm.BsInlineFormCustomAttribute;
    }
  });
  Object.defineProperty(exports, 'BsInputGroupCustomAttribute', {
    enumerable: true,
    get: function () {
      return _bsInputGroup.BsInputGroupCustomAttribute;
    }
  });
  Object.defineProperty(exports, 'BsWellCustomAttribute', {
    enumerable: true,
    get: function () {
      return _bsWell.BsWellCustomAttribute;
    }
  });
  Object.defineProperty(exports, 'BsButton', {
    enumerable: true,
    get: function () {
      return _bsButton.BsButton;
    }
  });
  Object.defineProperty(exports, 'BsCheckbox', {
    enumerable: true,
    get: function () {
      return _bsCheckbox.BsCheckbox;
    }
  });
  Object.defineProperty(exports, 'BsDropButton', {
    enumerable: true,
    get: function () {
      return _bsDropButton.BsDropButton;
    }
  });
  Object.defineProperty(exports, 'BsFooter', {
    enumerable: true,
    get: function () {
      return _bsFooter.BsFooter;
    }
  });
  Object.defineProperty(exports, 'BsHeader', {
    enumerable: true,
    get: function () {
      return _bsHeader.BsHeader;
    }
  });
  Object.defineProperty(exports, 'BsIcon', {
    enumerable: true,
    get: function () {
      return _bsIcon.BsIcon;
    }
  });
  Object.defineProperty(exports, 'BsInput', {
    enumerable: true,
    get: function () {
      return _bsInput.BsInput;
    }
  });
  Object.defineProperty(exports, 'BsNav', {
    enumerable: true,
    get: function () {
      return _bsNav.BsNav;
    }
  });
  Object.defineProperty(exports, 'BsNavbar', {
    enumerable: true,
    get: function () {
      return _bsNavbar.BsNavbar;
    }
  });
  Object.defineProperty(exports, 'BsRadio', {
    enumerable: true,
    get: function () {
      return _bsRadio.BsRadio;
    }
  });
  Object.defineProperty(exports, 'BsSelect', {
    enumerable: true,
    get: function () {
      return _bsSelect.BsSelect;
    }
  });
  Object.defineProperty(exports, 'BsSubmit', {
    enumerable: true,
    get: function () {
      return _bsSubmit.BsSubmit;
    }
  });
  Object.defineProperty(exports, 'BsTextarea', {
    enumerable: true,
    get: function () {
      return _bsTextarea.BsTextarea;
    }
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./attributes/bs-button-group', './attributes/bs-button-toolbar', './attributes/bs-dropdown-menu', './attributes/bs-form-group', './attributes/bs-inline-form', './attributes/bs-input-group', './attributes/bs-well']);
    config.globalResources(['./button/bs-button', './checkbox/bs-checkbox', './drop-button/bs-drop-button', './footer/bs-footer', './header/bs-header', './icon/bs-icon', './input/bs-input', './nav/bs-nav', './navbar/bs-navbar', './radio/bs-radio', './select/bs-select', './submit/bs-submit', './textarea/bs-textarea']);
  }
});