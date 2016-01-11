'use strict';

angular.module('weatherApp')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'MainController as controller'
  });
}])
.controller('MainController', ['$scope', '$http',
  function($scope, $http) {

  	var vm = this;
  	var appId = config.appId;
  	var masterMap = {};
  	vm.cityWeatherArray = [];
	$scope.typeList = masterList;
	

	//set Fahrenheit as default
	$scope.temp = {
		unit: 0
	};

	$scope.$watch('vm.temp');


	var mapList = function(array){
		var answer = _.map(array, 'name');
		masterMap = answer;
	};

	var createWeatherObject = function(data, cityId){
		var cityinfo = {};
		cityinfo.cityId = cityId;
		cityinfo.cityName = data.name;
		cityinfo.countryName = data.sys.country; 
		cityinfo.weather = data.weather[0].description;
		cityinfo.weatherID = data.weather[0].icon;
		cityinfo.temp = {
			celcius: Math.round(data.main.temp), 
			fahrenheit: Math.round(data.main.temp*(9/5)+32)
		};
		return cityinfo;
	};

	var getWeather = function(cityId){
		var apiUrl = "http://api.openweathermap.org/data/2.5/weather?id=" + cityId +"&units=metric&APPID=" + appId;
		$http({method: 'GET', url: apiUrl})
		.success(function(data) {
			if (data.cod == '404'){
				vm.error = data.message;
			}
			else{
				vm.error = null;
				var newCity = createWeatherObject(data, cityId);
				vm.cityWeatherArray.push(newCity);
				mapList(vm.cityWeatherArray);
			}
			
		})
		.error(function(data, status) {
		  $scope.data = data || "Request failed";
		  $scope.status = status;
		});
	};

	vm.remove = function(index){
		vm.cityWeatherArray.splice(index, 1);
	};

	$scope.submit = function() {
        if ($scope.selectedCity){
        var cityId = $scope.selectedCity.id;
		getWeather(cityId);
        $scope.selectedCity = '';
        }
      };


    //initial card for London
	getWeather(2643743);

}]);