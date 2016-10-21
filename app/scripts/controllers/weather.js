'use strict';

/**
 * @ngdoc function
 * @name translateApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the translateApp
 */
angular.module('translateApp')
  .controller('WeatherCtrl', function ($scope,currentWeatherAppData, $stateParams) {
	  if($stateParams["city"]!==null){
		  $scope.city = $stateParams["city"];
		  $scope.cnt = $stateParams["cnt"];
		  currentWeatherAppData.getCurrentWeatherData($scope.city,$scope.cnt).then(function(res){
              $scope.citydataname= res.city.name;
              $scope.citycoordlat= res.city.coord.lat;
              $scope.citycoordlon= res.city.coord.lon;
		      $scope.cod= res.cod;
              $scope.weatherData = res.list;
              $scope.weatherDate = res.dt * 1000; //receiving unix timestamp in seconds, convert to miliseconds
          });
	  }
      $scope.countries = {
          'India': {
              'Maharashtra': ['Pune', 'Mumbai', 'Nagpur', 'Akola'],
              'Delhi': ['Faridabad', 'Delhi', 'Noida','Gurgaon'],
              'Rajasthan': ['Jaipur', 'Ajmer', 'Jodhpur']
          },
          'USA': {
              'Alabama': ['Montgomery', 'Birmingham'],
              'California': ['Sacramento', 'Fremont'],
              'Illinois': ['Springfield', 'Chicago']
          },
          'Australia': {
              'New Wales': ['Sydney'],
              'Victoria': ['Melbourne']
          }
      };
      $scope.GetSelectedCountry = function () {
          $scope.strCountry = document.getElementById("country").value;
      };
      $scope.GetSelectedState = function () {
          $scope.strState = document.getElementById("state").value;
      };
      $scope.searchCurrentWeatherByCity = function(city, cnt){

          currentWeatherAppData.getCurrentWeatherData(city,cnt).then(function(res){
              $scope.citydataname= res.city.name;
              $scope.citycoordlat= res.city.coord.lat;
              $scope.citycoordlon= res.city.coord.lon;
              $scope.cod= res.cod;
              $scope.weatherData = res.list;
              $scope.weatherDate = res.dt * 1000; //receiving unix timestamp in seconds, convert to miliseconds
          });
      };

    // Yeoman part (for tests)
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
