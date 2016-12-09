import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './market.html';
import { name as ProductList } from '../productList/productList';
import { name as ProductDetails } from '../productDetails/productDetails';
import { name as Navigation } from '../navigation/navigation';
import { name as Home } from '../home/home';
import { name as Register } from '../register/register';

class Market {}

const name = 'market';

// create a module
export default angular.module(name, [
    angularMeteor,
    uiRouter,
    ProductList,
    ProductDetails,
    Navigation,
    Home,
    Register
]).component(name, {
        template,
        controllerAs: name,
        controller: Market
    })
    .config(config)
    .run(run);

function config($locationProvider, $urlRouterProvider) {
    'ngInject';

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
}

function run($rootScope, $state) {
    'ngInject';

    $rootScope.$on('$stateChangeError',
        (event, toState, toParams, fromState, fromParams, error) => {
            if (error === 'AUTH_REQUIRED') {
                $state.go('home');
            }
        }
    );
}
