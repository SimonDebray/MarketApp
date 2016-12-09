import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navigation.html';
import { name as Login } from '../login/login'
import { name as Register } from '../register/register'
import { name as Account } from '../account/account'

class Navigation {
  constructor($scope, $reactive) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      isConnected() {
        if(Meteor.userId()){
          return true;
        }
        else{
          return false
        }
      },
      test(){
        return 'salut';
      }
    });
  }
}

const name = 'navigation';

// create a module
export default angular.module(name, [
  angularMeteor,
  'accounts.ui',
    Login,
    Register,
    Account
]).component(name, {
  template,
  controllerAs: name,
  controller: Navigation
});
