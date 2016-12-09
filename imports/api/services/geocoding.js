import angular from 'angular';
import angularMeteor from 'angular-meteor';

class geocoding{
	constructor($q){
		'ngInject';
		
		this._$q = $q;
	}
	
	geocodePlaceId(map,geocoder,address) {
		geocoder.geocode({'address': address}, function(results, status) {
			console.log(results);
			if (status == google.maps.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map: map,
					position: results[0].geometry.location
				});
				console.log(results);
				return results;
			} else {
				return status;
			}
		});
	}
}

const name = 'geocoding';

export default angular.module(name, [
	angularMeteor
]).service("geocoding", geocoding);
