import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './account.html';

class Account {
	logout() {
		Meteor.logout(function() {
			$location.path("/");
		});
	}
}

const name = 'account';

// create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	controllerAs: name,
	controller: Account
});



