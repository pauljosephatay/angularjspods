import angular from 'angular';
import nvd3Module from 'angular-nvd3';
import 'angular-ui-bootstrap';
import ngSanitize from 'angular-sanitize';

import {resource} from './resource';
import {resources} from './resources';

import {status} from './values/status';
import {instances} from './values/instances';
import {memoryValue} from './values/memory';
import {uptimeValue} from './values/uptime';
import {restartValue} from './values/restart';
import {cpuValue} from './values/cpu';
import {graphValue} from './values/graph';

import * as filters from './filters';

export const resourcesModule = 'resources';

angular
  .module(resourcesModule, [nvd3Module, 'ui.bootstrap', ngSanitize])
  .component('podResource', resource)
  .component('podResources', resources)
  .component('statusValue', status)
  .component('instancesValue', instances)
  .component('memoryValue', memoryValue)
  .component('uptimeValue', uptimeValue)
  .component('restartValue', restartValue)
  .component('cpuValue', cpuValue)
  .component('graphValue', graphValue)
  .filter('secondsToTime', [filters.secondsToTime]);
