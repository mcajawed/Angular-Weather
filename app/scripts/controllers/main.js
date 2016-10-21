'use strict';

/**
 * @ngdoc function
 * @name translateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the translateApp
 */
angular.module('translateApp')
  .controller('MainCtrl', function ($scope,currentWeatherAppData, $state) {
     /* $scope.cod= '';
      $scope.weatherData = '';
      $scope.weatherDate = '';
      if($state.data.weatherData){
          $scope.cod= $state.data.cod;
          $scope.weatherData = $state.data.weatherData;
          $scope.weatherDate = $state.data.weatherDate;
      }
*/
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
			$state.go('/weather',{ 'city': city, 'cnt': cnt });
      };
    // Yeoman part (for tests)
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
