'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', '$http', '$templateCache',
  function($scope, $http, $templateCache) {
	
  	$scope.method = 'GET';
    $scope.url = "http://api.openweathermap.org/data/2.5/group?id=2643743,5128581&units=metric&APPID=cfc04876b1398f3e1a86c5e795466757";
	$http({method: 'GET', url: $scope.url, cache: $templateCache})
	.success(function(data, status) {
		$scope.status = status;
		var response = data;

	 	var cityWeather = function cityWeather(){
			this.cityName = '';
			this.concatCityName = '';
			this.countryName ='';
			this.weather='';
			this.weatherID='';
			this.temp='';
			this.sunrise='';
			this.sunset='';
		}

		$scope.cityWeatherArray= [];
		$scope.temp = '2'; //set Fahrenheit as default


		//Function to convert Unix time to HH/Min in 12 hour format
		function timeConvert(timegiven){
		  var t = new Date(timegiven*1000);
		  var hour = function returnhour(){
		  	var h = t.getHours();
		  	if (h > 12){
		  		h = h-12;
		  		return h;
		  	}
		  	else{
		  		return h;
		  	}
		  }
		  var min = t.getMinutes();
		  var time =  hour() + ':' + min ;
		  return time;
		}

		
		//Function to return temperature in celcius and Fahrenheit
		function returntemp(){
			var cTemp = Math.round(currentcity.main.temp);
			if ($scope.temp == '1'){
				return cTemp;
			}
			else{
				return cTemp*(9/5)+32;
			}
		} 

		//Creating object for each city returned
		for (var i=0; i<response.list.length; i++){
			var currentcity = response.list[i]
			var cityinfo = new cityWeather()
			cityinfo.concatCityName = currentcity.name.replace(/\s+/g, '');

			cityinfo.cityName = currentcity.name;
			cityinfo.countryName = currentcity.sys.country; 
			cityinfo.weather = currentcity.weather[0].description;
			cityinfo.weatherID = currentcity.weather[0].icon;
			cityinfo.temp = {celcius: (Math.round(currentcity.main.temp)), fahrenheit: Math.round(currentcity.main.temp*(9/5)+32)};
			cityinfo.sunrise = timeConvert(currentcity.sys.sunrise);
			cityinfo.sunset = timeConvert(currentcity.sys.sunset);
			$scope.cityWeatherArray.push(cityinfo);
			}
		}).
		error(function(data, status) {
		  $scope.data = data || "Request failed";
		  $scope.status = status;
		});
}]);