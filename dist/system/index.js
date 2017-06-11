'use strict';

System.register(['./attributes/bs-button-group', './attributes/bs-button-toolbar', './attributes/bs-cols', './attributes/bs-dropdown-menu', './attributes/bs-form-group', './attributes/bs-inline-form', './attributes/bs-input-group', './attributes/bs-well', './button/bs-button', './checkbox/bs-checkbox', './drop-button/bs-drop-button', './footer/bs-footer', './header/bs-header', './icon/bs-icon', './input/bs-input', './nav/bs-nav', './navbar/bs-navbar', './radio/bs-radio', './select/bs-select', './submit/bs-submit', './textarea/bs-textarea'], function (_export, _context) {
  "use strict";

  function configure(config) {
    config.globalResources(['./attributes/bs-button-group', './attributes/bs-button-toolbar', './attributes/bs-cols', './attributes/bs-dropdown-menu', './attributes/bs-form-group', './attributes/bs-inline-form', './attributes/bs-input-group', './attributes/bs-well']);
    config.globalResources(['./button/bs-button', './checkbox/bs-checkbox', './drop-button/bs-drop-button', './footer/bs-footer', './header/bs-header', './icon/bs-icon', './input/bs-input', './nav/bs-nav', './navbar/bs-navbar', './radio/bs-radio', './select/bs-select', './submit/bs-submit', './textarea/bs-textarea']);
  }

  _export('configure', configure);

  return {
    setters: [function (_attributesBsButtonGroup) {
      var _exportObj = {};
      _exportObj.BsButtonGroupCustomAttribute = _attributesBsButtonGroup.BsButtonGroupCustomAttribute;

      _export(_exportObj);
    }, function (_attributesBsButtonToolbar) {
      var _exportObj2 = {};
      _exportObj2.BsButtonToolbarCustomAttribute = _attributesBsButtonToolbar.BsButtonToolbarCustomAttribute;

      _export(_exportObj2);
    }, function (_attributesBsCols) {
      var _exportObj3 = {};
      _exportObj3.BsColsCustomAttribute = _attributesBsCols.BsColsCustomAttribute;

      _export(_exportObj3);
    }, function (_attributesBsDropdownMenu) {
      var _exportObj4 = {};
      _exportObj4.BsDropdownMenuCustomAttribute = _attributesBsDropdownMenu.BsDropdownMenuCustomAttribute;

      _export(_exportObj4);
    }, function (_attributesBsFormGroup) {
      var _exportObj5 = {};
      _exportObj5.BsFormGroupCustomAttribute = _attributesBsFormGroup.BsFormGroupCustomAttribute;

      _export(_exportObj5);
    }, function (_attributesBsInlineForm) {
      var _exportObj6 = {};
      _exportObj6.BsInlineFormCustomAttribute = _attributesBsInlineForm.BsInlineFormCustomAttribute;

      _export(_exportObj6);
    }, function (_attributesBsInputGroup) {
      var _exportObj7 = {};
      _exportObj7.BsInputGroupCustomAttribute = _attributesBsInputGroup.BsInputGroupCustomAttribute;

      _export(_exportObj7);
    }, function (_attributesBsWell) {
      var _exportObj8 = {};
      _exportObj8.BsWellCustomAttribute = _attributesBsWell.BsWellCustomAttribute;

      _export(_exportObj8);
    }, function (_buttonBsButton) {
      var _exportObj9 = {};
      _exportObj9.BsButton = _buttonBsButton.BsButton;

      _export(_exportObj9);
    }, function (_checkboxBsCheckbox) {
      var _exportObj10 = {};
      _exportObj10.BsCheckbox = _checkboxBsCheckbox.BsCheckbox;

      _export(_exportObj10);
    }, function (_dropButtonBsDropButton) {
      var _exportObj11 = {};
      _exportObj11.BsDropButton = _dropButtonBsDropButton.BsDropButton;

      _export(_exportObj11);
    }, function (_footerBsFooter) {
      var _exportObj12 = {};
      _exportObj12.BsFooter = _footerBsFooter.BsFooter;

      _export(_exportObj12);
    }, function (_headerBsHeader) {
      var _exportObj13 = {};
      _exportObj13.BsHeader = _headerBsHeader.BsHeader;

      _export(_exportObj13);
    }, function (_iconBsIcon) {
      var _exportObj14 = {};
      _exportObj14.BsIcon = _iconBsIcon.BsIcon;

      _export(_exportObj14);
    }, function (_inputBsInput) {
      var _exportObj15 = {};
      _exportObj15.BsInput = _inputBsInput.BsInput;

      _export(_exportObj15);
    }, function (_navBsNav) {
      var _exportObj16 = {};
      _exportObj16.BsNav = _navBsNav.BsNav;

      _export(_exportObj16);
    }, function (_navbarBsNavbar) {
      var _exportObj17 = {};
      _exportObj17.BsNavbar = _navbarBsNavbar.BsNavbar;

      _export(_exportObj17);
    }, function (_radioBsRadio) {
      var _exportObj18 = {};
      _exportObj18.BsRadio = _radioBsRadio.BsRadio;

      _export(_exportObj18);
    }, function (_selectBsSelect) {
      var _exportObj19 = {};
      _exportObj19.BsSelect = _selectBsSelect.BsSelect;

      _export(_exportObj19);
    }, function (_submitBsSubmit) {
      var _exportObj20 = {};
      _exportObj20.BsSubmit = _submitBsSubmit.BsSubmit;

      _export(_exportObj20);
    }, function (_textareaBsTextarea) {
      var _exportObj21 = {};
      _exportObj21.BsTextarea = _textareaBsTextarea.BsTextarea;

      _export(_exportObj21);
    }],
    execute: function () {}
  };
});