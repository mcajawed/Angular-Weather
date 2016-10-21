'use strict';

angular.module('translateApp').factory('currentWeatherAppData', function($resource, $q){
	
	var resource = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?q=:city&mode=json&APPID=923cc0aea7f8ce662653eddb7186a0cb&units=metric', {city:'@city',cnt:'@cnt'});
		return {
			getCurrentWeatherData: function(city,cnt){
				var deferred = $q.defer();
				
				resource.get({city:city,cnt:cnt},
					function (data){
					deferred.resolve(data);
				},
				function(response){
					deferred.reject(response);
				});
				
				return deferred.promise;
			}
			
		};

});