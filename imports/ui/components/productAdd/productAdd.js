import angular from 'angular';
import angularMeteor from 'angular-meteor';
import Products from '../../../api/products'
import template from './productAdd.html';

class ProductAdd {
	constructor() {
		this.product = {};
	}

	submit() {
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