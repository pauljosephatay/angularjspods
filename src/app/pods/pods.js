class PodsController {
  /** @ngInject */
  constructor($http, $interval, $filter) {
    'ngInject';
    $http
      .get('app/pods/pods.json')
      .then(response => {
        const allPods = response.data;
        this.activePods = allPods.slice(0, 2);
        this.availablePods = allPods.slice(2);
      });

    this.alerts = [];
    this.interval = $interval;
    this.timeInterval = 4000;
    this.timer = null;
    this.filter = $filter;
    this.initDataWorker();
  }

  removePod(id) {
    this.activePods = this.activePods.filter(el => {
      if (el.resources.id === id) {
        this.availablePods.push(Object.assign({}, el));
      }
      return el.resources.id !== id;
    });
  }

  addPod() {
    if (this.isAvailablePodsEmpty()) {
      const msg = {id: this.alerts.length, msg: 'Sorry, no more pods available to add.'};
      this.alerts.push(msg);
      return;
    }

    this.activePods.unshift(this.availablePods.shift());
  }

  isAvailablePodsEmpty() {
    return !this.availablePods.length;
  }

  removeAlert(id) {
    this.alerts = this.alerts.filter(el => el.id !== id);
  }

  getNewMemoryValue(memory) {
    let newMemoryValue = (Math.random() * (memory.capacity - 1)) + 1;
    newMemoryValue = this.filter('number')(newMemoryValue, 0);
    newMemoryValue = parseInt(newMemoryValue, 10);
    return Object.assign({}, memory, {usage: newMemoryValue});
  }

  dataWorkOnPod(pod) {
    const resources = pod.resources;
    const newCPUValue = this.filter('number')((Math.random() * 99) + 1, 0);
    const newMemoryValue = this.getNewMemoryValue(resources.memory);
    const newUpTimeValue = resources.upTime + (this.timeInterval / 1000);
    return Object.assign({}, resources,
      {cpu: newCPUValue,
        upTime: newUpTimeValue,
        memory: newMemoryValue});
  }

  initDataWorker() {
    this.timer = this.interval(() => {
      this.activePods.forEach(el => {
        el.resources = this.dataWorkOnPod(el);
      });
    }, this.timeInterval);
  }
}

export const pods = {
  template: require('./pods.html'),
  controller: PodsController
};
