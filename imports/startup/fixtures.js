import { Meteor } from 'meteor/meteor';
import { Products } from '../api/products';
import { Selections } from '../api/selections';

Meteor.startup(() => {
  if (Products.find().count() === 0) {
    const products = [{
      'name': 'Dubstep-Free Zone',
      'description': 'Fast just got faster with Nexus S.'
    }, {
      'name': 'All dubstep all the time',
      'description': 'Get it on!'
    }, {
      'name': 'Savage lounging',
      'description': 'Leisure suit required. And only fiercest manners.'
    }];

    products.forEach((product) => {
      Products.insert(product)
    });
  }

  if (Selections.find().count() === 0) {
    const selections = [{
      'name': 'Carottes',
      'verified': true
    }, {
      'name': 'Tomates',
      'verified': true
    }, {
      'name': 'Salades',
      'verified': true
    }];

    selections.forEach((selection) => {
      Selections.insert(selection)
    });
  }
});
