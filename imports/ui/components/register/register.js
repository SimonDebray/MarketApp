import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import template from './register.html';

class Register {
	constructor($scope, $reactive){
		'ngInject';
		$reactive(this).attach($scope);
		this.users = {};

		this.theMap = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 46.468133, lng: 2.592773},
			zoom: 5
		});
		this.geocoder = new google.maps.Geocoder();
	}

	register() {
		if (this.users.password == this.users.passwordConfirmed){
			delete this.users['passwordConfirmed'];
			Accounts.createUser(this.users);
			this.reset();
		}
		else {
			console.log('Mot de passe différents ...');
		}
	}

	reset() {
		this.users = {};
	}

	geocodePlaceId(map,geocoder,address, user) {
		geocoder.geocode({'address': address}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location
				});
				user.profile.lat = results[0].geometry.location.lat();
				user.profile.lng = results[0].geometry.location.lng();
			} else {
				console.log(status);
			}
		});
		
	}
}

const name = 'register';

// create a module
export default angular.module(name, [
	angularMeteor,
	uiRouter
]).component(name, {
	template,
	controllerAs: name,
	controller: Register
}).config(config);

function config($stateProvider) {
	'ngInject';
	$stateProvider
		.state('register', {
			url: '/register',
			template: '<register></register>',
			resolve: {
				currentUser($q) {
					if (Meteor.userId() === null) {
						return $q.resolve();
					} else {
						return $q.reject('ALREADY_AUTH');
					}
				}
			}
		});
}
