import angular from 'angular';
import angularMeteor from 'angular-meteor';
import Products from '../../../api/products';
import { name as ProductAdd } from '../productAdd/productAdd';

import template from './productList.html';

class ProductList {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      products() {
        return Products.find({});
      }
    });
  }
}

const name = 'productList';

// create a module
export default angular.module(name, [
  angularMeteor,
  ProductAdd
]).component(name, {
  template,
  controllerAs: name,
  controller: ProductList
});
