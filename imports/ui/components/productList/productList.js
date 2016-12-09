import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './productList.html';
import { Products } from '../../../api/products';
import { name as ProductAdd } from '../productAdd/productAdd';
import { name as ProductRemove } from '../productRemove/productRemove';
import { name as SelectionAdd } from '../selectionAdd/selectionAdd';

class ProductList {
    constructor($scope, $reactive) {
        'ngInject';

        $reactive(this).attach($scope);

        this.subscribe('products');

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
    uiRouter,
    ProductAdd,
    ProductRemove,
    SelectionAdd
]).component(name, {
        template,
        controllerAs: name,
        controller: ProductList
    })
    .config(config);

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('products', {
            url: '/products',
            template: '<product-list></product-list>',
            resolve: {
                currentUser($q) {
                    if (Meteor.userId() === null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        });


}

