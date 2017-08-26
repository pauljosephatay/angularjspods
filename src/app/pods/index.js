import angular from 'angular';
import ngAnimate from 'angular-animate';
import '../../js/angular-dymanic-layout-directive';
import '../../js/dynamic-layout-item.directive';

import {resourcesModule} from './resources/index';
import {pods} from './pods';
import {aestheticWell} from './aesthetics-wells';

export const podsModule = 'pods';

angular
  .module(podsModule, [resourcesModule, ngAnimate, 'dynamicLayout'])
  .component('pods', pods)
  .component('aestheticWell', aestheticWell);
