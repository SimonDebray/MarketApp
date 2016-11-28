import angular from 'angular';
import angularMeteor from 'angular-meteor';
import Product from '../../../api/products';

import template from './market.html';
import { name as ProductList } from '../productList/productList';

class Market {}

const name = 'market';

// create a module
export default angular.module(name, [
  angularMeteor,
  ProductList
]).component(name, {
  template,
  controllerAs: name,
  controller: Market
});
