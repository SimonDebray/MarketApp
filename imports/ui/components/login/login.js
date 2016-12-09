import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './login.html';

class Login {
	constructor(){
		this.users = {};
	}

	login() {
		Meteor.loginWithPassword(this.users.email,this.users.password);
		this.reset();
	}

	reset() {
		this.users = {};
	}
}

const name = 'login';

// create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	controllerAs: name,
	controller: Login
});


