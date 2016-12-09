import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './productAdd.html';
import { Products } from '../../../api/products';
import { Selections } from '../../../api/selections'

class ProductAdd {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.subscribe('selections');

    this.helpers({
      selections() {
        return Selections.find({});
      }
    });

    this.product = {};
  }
  
  submit() {
    this.product.owner = Meteor.userId();
    Products.insert(this.product);
    this.reset();
  }

  reset() {
    this.product = {};
  }
}

const name = 'productAdd';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: name,
  controller: ProductAdd
});
