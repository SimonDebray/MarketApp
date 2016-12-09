import { Mongo } from 'meteor/mongo';

export const Selections = new Mongo.Collection('selections');

Selections.allow({
	insert(userId) {
		return userId;
	},
	update(userId) {
		return userId;
	},
	remove(userId) {
		return userId;
	}
});
