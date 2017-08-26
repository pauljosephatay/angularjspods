class ResourcesController {
  closePod() {
    this.parentCtrl.removePod(this.resources.id);
  }

}

export const resources = {
  template: require('./resources.html'),
  bindings: {
    resources: '<',
    close: '&',
    rank: '<'
  },
  controller: ResourcesController,
  require: {
    parentCtrl: '^pods'
  }
};
