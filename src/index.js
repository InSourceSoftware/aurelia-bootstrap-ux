export { BsButtonGroupCustomAttribute } from './attributes/bs-button-group';
export { BsButtonToolbarCustomAttribute } from './attributes/bs-button-toolbar';
export { BsColsCustomAttribute } from './attributes/bs-cols';
export { BsDropdownMenuCustomAttribute } from './attributes/bs-dropdown-menu';
export { BsFormGroupCustomAttribute } from './attributes/bs-form-group';
export { BsHorizontalFormCustomAttribute } from './attributes/bs-horizontal-form';
export { BsInlineFormCustomAttribute } from './attributes/bs-inline-form';
export { BsInputGroupCustomAttribute } from './attributes/bs-input-group';
export { BsWellCustomAttribute } from './attributes/bs-well';

export { BsButton } from './button/bs-button';
export { BsCheckbox } from './checkbox/bs-checkbox';
export { BsDropButton } from './drop-button/bs-drop-button';
export { BsFooter } from './footer/bs-footer';
export { BsHeader } from './header/bs-header';
export { BsIcon } from './icon/bs-icon';
export { BsInput } from './input/bs-input';
export { BsNav } from './nav/bs-nav';
export { BsNavbar } from './navbar/bs-navbar';
export { BsRadio } from './radio/bs-radio';
export { BsSplitButton } from './split-button/bs-split-button';
export { BsSelect } from './select/bs-select';
export { BsSubmit } from './submit/bs-submit';
export { BsTextarea } from './textarea/bs-textarea';

export function configure(config) {
  config.globalResources([
    './attributes/bs-button-group',
    './attributes/bs-button-toolbar',
    './attributes/bs-cols',
    './attributes/bs-dropdown-menu',
    './attributes/bs-form-group',
    './attributes/bs-horizontal-form',
    './attributes/bs-inline-form',
    './attributes/bs-input-group',
    './attributes/bs-well'
  ]);
  config.globalResources([
    './button/bs-button',
    './checkbox/bs-checkbox',
    './drop-button/bs-drop-button',
    './footer/bs-footer',
    './header/bs-header',
    './icon/bs-icon',
    './input/bs-input',
    './nav/bs-nav',
    './navbar/bs-navbar',
    './radio/bs-radio',
    './select/bs-select',
    './split-button/bs-split-button',
    './submit/bs-submit',
    './textarea/bs-textarea'
  ]);
}
