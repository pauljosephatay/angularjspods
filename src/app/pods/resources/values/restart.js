class RestartsController {

  constructor($sanitize) {
    this.sanitize = $sanitize;
  }

  $onInit() {
    const markup = this.value.map(el => `<li>${this.sanitize(el)}</li>`);
    this.popup = markup.join('');
  }

  hasRestarts() {
    return this.value.length;
  }

}
export const restartValue = {
  template: require('./restart.html'),
  bindings: {
    value: '<',
    id: '<'
  },
  controller: RestartsController
};
