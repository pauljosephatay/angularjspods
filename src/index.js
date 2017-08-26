import angular from 'angular';

import {podsModule} from './app/pods/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {main} from './app/main';
import {header} from './app/header';
import {footer} from './app/footer';

import './index.less';

angular
  .module('app', [podsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .component('fountainHeader', header)
  .component('fountainFooter', footer);
