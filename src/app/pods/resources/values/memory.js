class MemoryController {

  $onInit() {
    this.data = [
      {key: 'usage', y: this.value.usage / this.value.capacity, color: '#056ba6'},
      {key: 'capacity', y: (this.value.capacity - this.value.usage) / this.value.capacity, color: 'white'}
    ];
    this.chartOptions = {chart: {
      type: 'pieChart',
      height: 120,
      width: 100,
      margin: {top: 10, right: 10, bottom: 10, left: 10},
      donut: true,
      x: d => d.key,
      y: d => d.y,
      showLabels: false,
      showLegend: false,
      labelType: 'percent',
      donutRatio: 0.7,
      pie: {
        startAngle: d => d.startAngle,
        endAngle: d => d.endAngle,
        title: true
      },
      duration: 500,
      title: this.value.usage,
      tooltip: {enabled: false}
    }};
  }

  getNewValue(memory) {
    return memory.usage / memory.capacity;
  }

  $onChanges(changesObj) {
    if (this.data && changesObj.value) {
      const currentValue = changesObj.value.currentValue;
      const newMemoryValue = this.getNewValue(currentValue);
      const newTitle = currentValue.usage;
      this.data[0].y = newMemoryValue;
      this.chartOptions.chart.title = newTitle;
    }
  }
}

export const memoryValue = {
  template: require('./memory.html'),
  bindings: {
    value: '<'
  },
  controller: MemoryController
};
