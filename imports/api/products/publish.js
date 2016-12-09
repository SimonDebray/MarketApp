import { Meteor } from 'meteor/meteor';

import { Products } from './collection';

if (Meteor.isServer) {
  Meteor.publish('products', function() {
    const selector = {
      $or: [{
        // when logged in user is the owner
        $and: [{
          owner: this.userId
        }, {
          owner: {
            $exists: true
          }
        }]
      }]
    };
  
    return Products.find(selector);
  });
}
