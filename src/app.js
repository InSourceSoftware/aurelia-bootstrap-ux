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
