# Aurelia Bootstrap UX

Library of custom Bootstrap 3 components for Aurelia.

## What's this?

This library is a set of custom Bootstrap 3 components for Aurelia.
The primary purpose of this library is to provide high quality, simple, and easy-to-use components for working with Bootstrap 3.

Since Bootstrap 4 is right around the corner and there are many other alternatives to Bootstrap, you may be asking "Why Bootstrap 3?"
The real purpose behind this library is to practice building an Aurelia plugin, and learn to build Aurelia components.
Bootstrap is an easy UI framework to work with, since it's so prevalent and well documented.
It's a good launching point for applying this and other knowledge toward building more relevant plugins, libraries and frameworks as time permits.
Ultimately, my goal is to contribute to the official [Aurelia UX][1] project, but skill sharpening was needed, and so this project was born.

## Getting Started

Check out the [Documentation][2] for detailed usage information, or check out the [Live Demo][3] for a gallery of available components in action. Many more features and components will be coming to this library, so make sure to submit any issues or requests on the [Issues][4] page.

## Example Usage

Here is a large example of usage pulled directly from the [Aurelia Bootstrap UX Showcase][5].

**Javscript:**

```javascript
export class App {
  value = 'Change me';
  checked = false;

  constructor() {
    this.message = 'Aurelia Bootstrap UX Showcase';
  }

  onSubmit() {
    console.log('submitted');
  }

  onClick() {
    console.log('clicked');
  }
}
```

**HTML Template:**

```html
<template>
  <div class="container-fluid">
    <div class="row">
      <div bs-cols="lg-6 md-8 sm-10 xs-12">
        <div class="page-header">
          <h1>${message}</h1>
        </div>
        <form submit.trigger="onSubmit()">
          <fieldset>
            <legend>Log In</legend>
            <div bs-well bs-inline-form>
              <bs-input bs-form-group name="username" type="text" label="User Name" sr-only="true" placeholder="Username" value=""></bs-input>
              <bs-input bs-form-group name="password" type="password" label="Password" sr-only="true" placeholder="Password" value=""></bs-input>
              <bs-submit bs-form-group type="primary" block="true">Submit</bs-submit>
            </div>
          </fieldset>
          <fieldset>
            <legend>Form Components</legend>
            <div bs-well>
              <bs-input bs-form-group name="text1" type="text" label="Text 1" placeholder="Some text..." value.bind="value" size="lg"></bs-input>
              <span bs-form-group>${value}</span>
              <bs-input bs-form-group name="text2" type="text" label="Text 2" placeholder="Some text..." value="" disabled="disabled"></bs-input>
              <bs-input bs-form-group name="text3" type="text" label="Text 3" placeholder="Some text..." value="This input is readonly and small" size="sm" readonly="readonly"></bs-input>
              <bs-input bs-form-group name="text4" type="text" label="Text 4" placeholder="Some text..." value="" helptext="A block of help text."></bs-input>
              <bs-textarea bs-form-group name="textarea" label="Textarea" helptext="Please fill in this textarea." value="Some text..."></bs-textarea>
              <bs-select bs-form-group name="select1" label="Single Select" placeholder="Select one..." value="" options.bind="[1,2,3]"></bs-select>
              <bs-select bs-form-group name="select2" label="Multi Select" multiple="true" options.bind="[1,2,3]"></bs-select>
              <bs-checkbox bs-form-group name="checkbox1" label="Checkbox 1" value="1" checked.bind="checked"></bs-checkbox>
              <div bs-form-group>
                <span class="glyphicon glyphicon-${checked ? 'ok' : 'remove'}"></span> ${checked ? 'Checked' : 'Not Checked'}
              </div>
              <bs-checkbox bs-form-group name="checkbox1" label="Checkbox 2" helptext="A block of help text." value="2" checked="checked" disabled="disabled"></bs-checkbox>
              <div bs-form-group bs-inline-form>
                <bs-checkbox name="checkbox2" label="Checkbox 3" value="1"></bs-checkbox>
                <bs-checkbox name="checkbox2" label="Checkbox 4" value="2" checked="checked" disabled="disabled"></bs-checkbox>
              </div>
              <bs-radio bs-form-group name="radio1" label="Radio 1" model="1" value="1"></bs-radio>
              <bs-radio bs-form-group name="radio1" label="Radio 2" model="2" value="2" checked="checked"></bs-radio>
              <bs-radio bs-form-group name="radio1" label="Radio 3" model="3" value="3" disabled="disabled"></bs-radio>
              <div bs-form-group bs-inline-form>
                <bs-radio name="radio2" label="Radio 4" model="1" value="1"></bs-radio>
                <bs-radio name="radio2" label="Radio 5" model="2" value="2" checked="checked"></bs-radio>
                <bs-radio name="radio2" label="Radio 6" model="3" value="3" disabled="disabled"></bs-radio>
              </div>
            </div>
            <div bs-form-group bs-inline-form>
              <bs-button bs-form-group type="danger" block="true">Cancel</bs-button>
              <bs-submit bs-form-group type="primary" block="true">Submit</bs-submit>
            </div>
          </fieldset>
          <fieldset>
            <legend>Horizontal Forms</legend>
            <div bs-well bs-horizontal-form>
              <div bs-form-group>
                <label bs-cols="md-3" for="horz1">Horizontal 1</label>
                <bs-input bs-cols="md-9" name="horz1" type="text" placeholder="Some text..." value=""></bs-input>
              </div>
              <div bs-form-group>
                <label bs-cols="md-3">Horizontal 2</label>
                <div bs-cols="md-9" bs-inline-form>
                  <bs-checkbox name="horz2" label="Horizontal 2" value="1"></bs-checkbox>
                  <bs-checkbox name="horz2" label="Horizontal 3" value="2" checked="checked" disabled="disabled"></bs-checkbox>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Button Components</legend>
            <div bs-well bs-button-toolbar>
              <div bs-button-group>
                <bs-button icon="align-left"></bs-button>
                <bs-button icon="align-center"></bs-button>
                <bs-button icon="align-right"></bs-button>
                <bs-button icon="align-justify"></bs-button>
              </div>
              <div bs-button-group>
                <bs-button>1</bs-button>
                <bs-button>2</bs-button>
                <bs-button>3</bs-button>
                <bs-button>4</bs-button>
              </div>
            </div>
            <div bs-well bs-button-toolbar>
              <bs-button size="lg" type="default" click.trigger="onClick()">Large</bs-button>
              <bs-button size="md" type="default" click.trigger="onClick()">Medium</bs-button>
              <bs-button size="sm" type="default" click.trigger="onClick()">Small</bs-button>
              <bs-button size="xs" type="default" click.trigger="onClick()">Extra Small</bs-button>
            </div>
            <div bs-well bs-button-toolbar>
              <bs-button type="default" click.trigger="onClick()">Default</bs-button>
              <bs-button type="primary" click.trigger="onClick()">Primary</bs-button>
              <bs-button type="success" icon="ok-sign" click.trigger="onClick()">Success</bs-button>
              <bs-button type="info" icon="info-sign" click.trigger="onClick()">Info</bs-button>
              <bs-button type="warning" icon="exclamation-sign" click.trigger="onClick()">Warning</bs-button>
              <bs-button type="danger" icon="remove-sign" click.trigger="onClick()">Danger</bs-button>
              <bs-button type="link" icon="link" click.trigger="onClick()">Link</bs-button>
            </div>
            <div bs-well bs-button-toolbar>
              <div bs-button-group>
                <bs-button type="default" active="true" click.trigger="onClick()">Default</bs-button>
                <bs-button type="primary" disabled="disabled" click.trigger="onClick()">Primary</bs-button>
                <bs-button type="success" icon="ok-sign" click.trigger="onClick()">Success</bs-button>
                <bs-button type="info" icon="info-sign" click.trigger="onClick()">Info</bs-button>
                <bs-button type="warning" icon="exclamation-sign" click.trigger="onClick()">Warning</bs-button>
                <bs-button type="danger" icon="remove-sign" click.trigger="onClick()">Danger</bs-button>
              </div>
            </div>
            <div bs-well bs-button-toolbar>
              <div bs-button-group="justified">
                <bs-button type="default" active="true" click.trigger="onClick()">Default</bs-button>
                <bs-button type="primary" disabled="disabled" click.trigger="onClick()">Primary</bs-button>
                <bs-button type="success" icon="ok-sign" click.trigger="onClick()">Success</bs-button>
                <bs-button type="info" icon="info-sign" click.trigger="onClick()">Info</bs-button>
                <bs-button type="warning" icon="exclamation-sign" click.trigger="onClick()">Warning</bs-button>
                <bs-button type="danger" icon="remove-sign" click.trigger="onClick()">Danger</bs-button>
              </div>
            </div>
            <div bs-well bs-button-toolbar>
              <div bs-button-group>
                <bs-drop-button type="default" click.trigger="onClick()">Default</bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div bs-button-group>
                <bs-drop-button type="primary" click.trigger="onClick()">Primary</bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div bs-button-group>
                <bs-drop-button type="success" click.trigger="onClick()">Success</bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div bs-button-group>
                <bs-drop-button type="info" click.trigger="onClick()">Info</bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div bs-button-group>
                <bs-drop-button type="warning" click.trigger="onClick()">Warning</bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div bs-button-group>
                <bs-drop-button type="danger" click.trigger="onClick()">Danger</bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
            <div bs-well bs-button-toolbar>
              <div bs-button-group>
                <bs-button type="default" click.trigger="onClick()">Default</bs-button>
                <bs-drop-button type="default"></bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div bs-button-group>
                <bs-button type="primary" click.trigger="onClick()">Primary</bs-button>
                <bs-drop-button type="primary"></bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div bs-button-group>
                <bs-button type="success" click.trigger="onClick()">Success</bs-button>
                <bs-drop-button type="success"></bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div bs-button-group>
                <bs-button type="info" click.trigger="onClick()">Info</bs-button>
                <bs-drop-button type="info"></bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div bs-button-group>
                <bs-button type="warning" click.trigger="onClick()">Warning</bs-button>
                <bs-drop-button type="warning"></bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div bs-button-group>
                <bs-button type="danger" click.trigger="onClick()">Danger</bs-button>
                <bs-drop-button type="danger"></bs-drop-button>
                <ul bs-dropdown-menu>
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>
```

[1]: https://github.com/aurelia/ux
[2]: DOCUMANTATION.md
[3]: http://insource.io/aurelia-bootstrap-ux/
[4]: https://github.com/InSourceSoftware/aurelia-bootstrap-ux/issues
[5]: https://github.com/InSourceSoftware/aurelia-bootstrap-ux-showcase
