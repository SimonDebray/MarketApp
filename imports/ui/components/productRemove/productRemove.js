import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './productRemove.html';
import { Products } from '../../../api/products';

class ProductRemove {
  remove() {
    if (this.product) {
      Products.remove(this.product._id);
    }
  }
}

const name = 'productRemove';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    product: '<'
  },
  controllerAs: name,
  controller: ProductRemove
});
