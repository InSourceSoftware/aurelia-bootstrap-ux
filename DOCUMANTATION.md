# Documentation

## Custom Attributes

Most elements can utilize any of the following custom attributes which add CSS classes and render the element they are applied to in a `<div>` if needed:

* `bs-button-group`
* `bs-button-toolbar`
* `bs-cols`
* `bs-dropdown-menu`
* `bs-form-group`
* `bs-horizontal-form`
* `bs-inline-form`
* `bs-input-group`
* `bs-well`

### `bs-button-group`

The `bs-button-group` attribute adds a CSS class to the element it is applied to in order to render it as a button group. The attribute can be added without a value, or a value can be added to further customize the generated button group.

Available values:
* `justified` - Adds an additional CSS class to render the button group as a set of justified buttons

For example:

```html
<div bs-button-group="justified">
  ...
</div>
```

Which produces:

```html
<div class="btn-group btn-group-justified">
  ...
</div>
```

### `bs-button-toolbar`

The `bs-button-toolbar` attribute adds a CSS class to the element it is applied to in order to render it as a button toolbar.

### `bs-cols`

The `bs-cols` attribute adds one or more CSS classes to the element it is applied to in order to render it as a columnar grid. The attribute accepts a value with column specifications similar to Bootstrap's grid system.

For example, the following builds a 3-column responsive grid that breaks on medium sized screens into 3 stacked vertical sections:

```html
<div bs-cols="md-4">
  ...
</div>
<div bs-cols="md-4">
  ...
</div>
<div bs-cols="md-4">
  ...
</div>
```

Unlike Bootstrap 3 grids, the `bs-cols` attribute can be applied to any element. If the element is a `<label>` or `<div>`, the CSS class(es) are added directly. For other elements, the element is rendered inside a `<div>` with the class(es) applied.

The attribute accepts a space-delimited list of column specifications just as CSS classes do. For more information on Bootstrap grids, see the [Bootstrap 3 documentation][1].

[1]: http://getbootstrap.com/css/#grid

### `bs-dropdown-menu`

The `bs-dropdown-menu` attribute adds a CSS class to the element it is applied to in order to render it as a dropdown menu.

Unlike other custom attributes, this attribute does not seek to conditionally render the element inside a `<div>`, as dropdown menus are typically applied directly to `<ul>` elements.

### `bs-form-group`

The `bs-form-group` attribute adds a CSS class to the element it is applied to in order to render it as a form group.

For example, when adding the `bs-form-group` custom attribute to an `<input>`, the element is rendered inside a `<div class="form-group">`.

```html
<input bs-form-group type="..." />
```

Which produces:

```html
<div class="form-group">
  <input type="..." />
</div>
```

However, when adding the `bs-form-group` custom attribute to an existing `<div>`, the CSS class is automatically added to the element.

```html
<div bs-form-group>
  ...
</div>
```

Which produces:

```html
<div class="form-group">
  ...
</div>
```

### `bs-horizontal-form`

The `bs-horizontal-form` attribute adds a CSS class to the element it is applied to in order to render it as a horizontal form. Further use of `bs-cols` is required to add columns to labels and form elements.

### `bs-inline-form`

The `bs-inline-form` attribute adds a CSS class to the element it is applied to in order to render it as an inline form.

### `bs-input-group`

The `bs-input-group` attribute adds a CSS class to the element it is applied to in order to render it as an input group.

### `bs-well`

The `bs-well` attribute adds a CSS class to the element it is applied to in order to render it as a well.

Unlike other custom attributes, this attribute does not seek to conditionally render the element inside a `<div>`, so applying it to an existing `<div>` is the only option, as wells are not typically wrapped around single elements.

## Custom Elements

### `bs-input`

The `<bs-input>` element renders an html `<label>` (optional) and `<input>` pair.

The following renders a form-group with a label and text input:

```html
<bs-input bs-form-group name="text1" type="text" label="Text 1" placeholder="Some text..." value.bind="value"></bs-input>
```

Available attributes:
* `name` - Generates an `<input id="name">` without duplicating the id property in the final markup
* `type` - Accepts any valid html `<input>` type, e.g. `text`, `password`, etc.
* `label` - Generates a `<label for="name">`
* `placeholder` - Placeholder text
* `value` - Two-way bindable value
* `helptext` - Generates a `<span class="help-text">` and links it to the input with `aria-describedby`
* `size` - Adds a CSS class to the input to modify the size, accepts `xs`, `sm`, `md`, `lg`
* `readonly` - Similar to HTML `readonly` but also adds a CSS class
* `disabled` - Similar to HTML `disabled` but also adds a CSS class
* `sr-only` - Adds a CSS class to the `<label>` to hide by default

### `bs-checkbox`

The `<bs-checkbox>` element renders an html `<label>` (optional) and `<input type="checkbox">` pair.

The following renders a form-group with a pair of inline checkboxes:

```html
<div bs-form-group bs-inline-form>
  <bs-checkbox name="checkbox2" label="Checkbox 3" value="1"></bs-checkbox>
  <bs-checkbox name="checkbox2" label="Checkbox 4" value="2" checked="checked" disabled="disabled"></bs-checkbox>
</div>
```

Available attributes:
* `name` - Generates an `<input id="name">` without duplicating the id property in the final markup
* `label` - Generates a `<label for="name">`
* `value` - Two-way bindable value for `string` properties
* `checked` - Two-way bindable checked property which can be bound to `boolean` or `array` properties
* `model` - One-way bindable value for non-`string` properties
* `helptext` - Generates a `<span class="help-text">` and links it to the input with `aria-describedby`
* `disabled` - Similar to HTML `disabled` but also adds a CSS class
* `inline` - Adds a CSS class to render the element inline in an existing form-group

### `bs-radio`

The `<bs-radio>` element renders an html `<label>` (optional) and `<input type="radio">` pair.

The following renders a form-group with a pair of inline radio buttons:

```html
<div bs-form-group bs-inline-form>
  <bs-checkbox name="checkbox2" label="Checkbox 3" value="1"></bs-checkbox>
  <bs-checkbox name="checkbox2" label="Checkbox 4" value="2" checked="checked" disabled="disabled"></bs-checkbox>
</div>
```

Available attributes:
* `name` - Generates an `<input id="name">` without duplicating the id property in the final markup
* `label` - Generates a `<label for="name">`
* `value` - Two-way bindable value for `string` properties
* `checked` - Two-way bindable checked property which can be bound to `boolean` or `array` properties
* `model` - One-way bindable value for non-`string` properties
* `helptext` - Generates a `<span class="help-text">` and links it to the input with `aria-describedby`
* `disabled` - Similar to HTML `disabled` but also adds a CSS class
* `inline` - Adds a CSS class to render the element inline in an existing form-group

### `bs-select`

The `<bs-select>` element renders an html `<label>` (optional) and `<select>` pair.

The following renders a form-group with a label and select drop-down:

```html
<bs-select bs-form-group name="select1" label="Single Select" placeholder="Select one..." value="" options.bind="[1,2,3]"></bs-select>
```

Available attributes:
* `name` - Generates an `<input id="name">` without duplicating the id property in the final markup
* `label` - Generates a `<label for="name">`
* `placeholder` - Placeholder text in an `<option>` with an empty value
* `value` - Two-way bindable value accepts an array of values (TODO: Add additional ways to specify values)
* `helptext` - Generates a `<span class="help-text">` and links it to the input with `aria-describedby`
* `size` - Adds a CSS class to the input to modify the size, accepts `xs`, `sm`, `md`, `lg`
* `multiple` - Similar to HTML `multiple` which allows multi-select capabilities
* `readonly` - Similar to HTML `readonly` but also adds a CSS class
* `disabled` - Similar to HTML `disabled` but also adds a CSS class
* `sr-only` - Adds a CSS class to the `<label>` to hide by default

### `bs-textarea`

The `<bs-textarea>` element renders an html `<label>` (optional) and `<textarea>` pair.

The following renders a textarea with help text shown below.

```html
<bs-textarea bs-form-group name="textarea" label="Textarea" helptext="Please fill in this textarea." value="Some text..."></bs-textarea>
```

Available attributes:
* `name` - Generates an `<input id="name">` without duplicating the id property in the final markup
* `label` - Generates a `<label for="name">`
* `value` - Two-way bindable value for `string` properties
* `checked` - Two-way bindable checked property which can be bound to `boolean` or `array` properties
* `model` - One-way bindable value for non-`string` properties
* `helptext` - Generates a `<span class="help-text">` and links it to the input with `aria-describedby`
* `disabled` - Similar to HTML `disabled` but also adds a CSS class
* `inline` - Adds a CSS class to render the element inline in an existing form-group

### `bs-button`

The `<bs-button>` element renders an html `<input type="button">` button.

The following renders a form-group which is also an inline-form containing two buttons, which render as block buttons in responsive mode:

```html
<div bs-form-group bs-inline-form>
  <bs-button type="danger" icon="remove-sign" block="true" click.trigger="cancel()">Cancel</bs-button>
  <bs-button type="success" icon="ok-sign" block="true" click.trigger="accept()">Accept</bs-button>
</div>
```

The following renders a button-toolbar styled as a well, containing a button-group with six buttons:

```html
<div bs-well bs-button-toolbar>
  <div bs-button-group>
    <bs-button type="default" active="true">Default</bs-button>
    <bs-button type="primary" disabled="disabled">Primary</bs-button>
    <bs-button type="success" icon="ok-sign">Success</bs-button>
    <bs-button type="info" icon="info-sign">Info</bs-button>
    <bs-button type="warning" icon="exclamation-sign">Warning</bs-button>
    <bs-button type="danger" icon="remove-sign">Danger</bs-button>
  </div>
</div>
```

The following renders a button with a link icon, styled as a hyperlink:

```html
<bs-button type="link" icon="link" click.trigger="navigate('somewhere')">Link</bs-button>
```

Available attributes:
* `size` - Adds a CSS class to the input to modify the size, accepts `xs`, `sm`, `md`, `lg`
* `type` - Adds a CSS class to the input to modify the button style (color), accepts `default`, `primary`, `success`, `info`, `warning`, `danger` and `link`
* `block` - Adds a CSS class to the button to make it a full-width block in responsive mode
* `active` - Adds a CSS class to the button to style it as active
* `disabled` - Adds a CSS class to the button to style it as disabled
* `icon` - Adds a glyphicon to the left-hand side of the button

### `bs-submit`

The `<bs-submit>` element renders an html `<submit>` button.

The following renders an inline-form decorated as a well, containing two inputs and a submit button in form-groups:

```html
<form bs-well bs-inline-form submit.trigger="submit()">
  <bs-input bs-form-group name="username" type="text" label="User Name" sr-only="true" placeholder="Username" value=""></bs-input>
  <bs-input bs-form-group name="password" type="password" label="Password" sr-only="true" placeholder="Password" value=""></bs-input>
  <bs-submit bs-form-group type="primary" block="true">Submit</bs-submit>
</form>
```

Available attributes:
* `size` - Adds a CSS class to the input to modify the size, accepts `xs`, `sm`, `md`, `lg`
* `type` - Adds a CSS class to the input to modify the button style (color), accepts `default`, `primary`, `success`, `info`, `warning`, `danger` and `link`
* `block` - Adds a CSS class to the button to make it a full-width block in responsive mode
* `active` - Adds a CSS class to the button to style it as active
* `disabled` - Adds a CSS class to the button to style it as disabled
* `icon` - Adds a glyphicon to the left-hand side of the button

### `bs-icon`

The `<bs-icon>` element renders a glyphicon.

The following renders a dynamic icon based on a `checked` property:

```html
<bs-icon icon="${checked ? 'ok' : 'remove'}"></bs-icon> ${checked ? 'Checked' : 'Not Checked'}
```

### `bs-drop-button`

The `<bs-drop-button>` element renders an html `<button>` with a drop-down menu attached to it. This requires the Bootstrap javascript library to be available globally on the page.

The following renders a button-group containing a split button with a drop-down:

```html
<div bs-button-group>
  <bs-button type="primary" click.trigger="send()">Send</bs-button>
  <bs-drop-button type="primary"></bs-drop-button>
  <ul bs-dropdown-menu>
    <li><a href="#">Action</a></li>
    <li><a href="#">Another action</a></li>
    <li><a href="#">Something else here</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Separated link</a></li>
  </ul>
</div>
```

Available attributes:
* `size` - Adds a CSS class to the input to modify the size, accepts `xs`, `sm`, `md`, `lg`
* `type` - Adds a CSS class to the input to modify the button style (color), accepts `default`, `primary`, `success`, `info`, `warning`, `danger` and `link`
* `block` - Adds a CSS class to the button to make it a full-width block in responsive mode
* `active` - Adds a CSS class to the button to style it as active
* `disabled` - Adds a CSS class to the button to style it as disabled
* `icon` - Adds a glyphicon to the left-hand side of the button
