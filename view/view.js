'use strict';

angular.module('myApp.view', ['ngRoute', 'mgcrea.ngStrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view', {
    templateUrl: 'view/view.html',
    controller: 'ViewCtrl as v1'
  });
}])
.controller('ViewCtrl', ['$scope', '$http',
  function($scope, $http) {
  	var vm = this;
  	vm.cityWeatherArray= [];
	
	//object holding weather data for a city
	var cityWeather = function cityWeather(){
		this.cityName = '';
		this.concatCityName = '';
		this.countryName ='';
		this.weather='';
		this.weatherID='';
		this.temp='';
	}

	//load list of cities for typeahead
	$scope.typelist = masterList;
	
	//set Fahrenheit as default
	$scope.button = {
		"radio": 1
	};

	var getWeather = function(cityidlist){
  		var cityString= convertArray(cityidlist); //calling helper function in util.js
		var weatherUrl = "http://api.openweathermap.org/data/2.5/group?id=" + cityString +"&units=metric&APPID=cfc04876b1398f3e1a86c5e795466757";
		$http({method: 'GET', url: weatherUrl})
		.success(function(data) {

		//Create object for each city returned and push to array
		for (var i=0; i<data.list.length; i++){
			var currentcity = data.list[i]
			var cityinfo = new cityWeather()
			cityinfo.concatCityName = currentcity.name.replace(/\s+/g, '');
			cityinfo.cityName = currentcity.name;
			cityinfo.countryName = currentcity.sys.country; 
			cityinfo.weather = currentcity.weather[0].description;
			cityinfo.weatherID = currentcity.weather[0].icon;
			cityinfo.temp = {celcius: (Math.round(currentcity.main.temp)), fahrenheit: Math.round(currentcity.main.temp*(9/5)+32)};
			vm.cityWeatherArray.push(cityinfo);
			}
		}).
		error(function(data, status) {
		  $scope.data = data || "Request failed";
		  $scope.status = status;
		});
	}

	//initial call with London and NYC Ids
	getWeather([2643743, 5128581]);


	$scope.submit = function() {
        if ($scope.selectedCity){
        var cityId = _(masterList)
			.filter(function(city){ return city.name == $scope.selectedCity})
			.pluck('id')
			.value();
		getWeather([cityId[0]]);
        $scope.selectedCity = '';
        }
      };
}]);