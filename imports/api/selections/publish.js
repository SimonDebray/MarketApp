import { Meteor } from 'meteor/meteor';

import { Selections } from './collection';

if (Meteor.isServer) {
	Meteor.publish('selections', function() {
		const selector = {
			$or: [{
				// when logged in user is the owner
				$and: [{
					verified: true
				}]
			}]
		};
		return Selections.find(selector);
	});
}
