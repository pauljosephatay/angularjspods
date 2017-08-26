class GraphController {

  constructor() {
    this.x = 0;
  }

  $onInit() {
    this.data = [
      {key: 'cpu', values: [{x: this.x, y: this.value}], color: '#056ba6', area: true}
    ];
    this.chartOptions = {chart: {
      type: 'lineChart',
      height: 150,
      margin: {top: 0, right: 0, bottom: 0, left: 0},
      x: d => d.x,
      y: d => d.y,
      showLabels: false,
      showLegend: false,
      labelType: 'percent',
      tooltip: {enabled: false}
    }};
  }

  $onChanges(changesObj) {
    if (this.data && changesObj.value) {
      this.data[0].values.push({x: this.x, y: changesObj.value.currentValue});
      if (this.data[0].values.length > 20) {
        this.data[0].values.shift();
      }
      this.x++;
    }
  }

}

export const graphValue = {
  template: require('./graph.html'),
  bindings: {
    value: '<'
  },
  controller: GraphController
};
