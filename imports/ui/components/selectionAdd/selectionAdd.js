import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Meteor } from 'meteor/meteor';

import template from './selectionAdd.html';
import { Selections } from '../../../api/selections'

class SelectionAdd {
	constructor() {
		this.selection = {};
	}

	submit() {
		this.selection.owner = Meteor.userId();
		this.selection.id = this.selection.name;
		this.selection.verified = false;
		Selections.insert(this.selection);
		this.reset();
	}

	reset() {
		this.selection = {};
	}
}

const name = 'selectionAdd';

// create a module
export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	controllerAs: name,
	controller: SelectionAdd
});

