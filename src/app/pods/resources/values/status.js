class StatusController {

  $onInit() {
    this.style = this.isOn() ? 'status-on' : 'status-off';
  }

  isOn() {
    return this.value === 'On';
  }

}

export const status = {
  template: require('./status.html'),
  bindings: {
    value: '<'
  },
  controller: StatusController
};
