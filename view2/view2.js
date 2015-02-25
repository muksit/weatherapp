'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);

/*

http://api.openweathermap.org/data/2.5/history/city?id=5128581&type=day&start=1424671108&cnt=30
response = {
	"message":"",
	"cod":"200",
	"city_id":5128581,
	"calctime":0.3009,
	"cnt":28,
	"list":[
		{"main":
			{"temp":272.324,
			"temp_min":272.324,
			"temp_max":272.324,
			"pressure":1020.05,
			"sea_level":1034.65,
			"grnd_level":1020.05,
			"humidity":91},
			"wind":{
				"speed":2.82,
				"deg":293.502
			},
			"clouds":{
				"all":44
			},
			"weather":[
				{
					"id":802,
					"main":"Clouds",
					"description":"scattered clouds",
					"icon":"03n"
				}
			],
			"dt":1424672163
		},

		{"main":{"temp":272.324,"temp_min":272.324,"temp_max":272.324,"pressure":1020.05,"sea_level":1034.65,"grnd_level":1020.05,"humidity":91},"wind":{"speed":2.82,"deg":293.502},"clouds":{"all":44},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"dt":1424676207},{"main":{"temp":270.561,"temp_min":270.561,"temp_max":270.561,"pressure":1020.59,"sea_level":1035.4,"grnd_level":1020.59,"humidity":87},"wind":{"speed":2.66,"deg":313.001},"clouds":{"all":44},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"dt":1424680224},{"main":{"temp":270.561,"temp_min":270.561,"temp_max":270.561,"pressure":1020.59,"sea_level":1035.4,"grnd_level":1020.59,"humidity":87},"wind":{"speed":2.66,"deg":313.001},"clouds":{"all":44},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"dt":1424683002},{"main":{"temp":270.561,"temp_min":270.561,"temp_max":270.561,"pressure":1020.59,"sea_level":1035.4,"grnd_level":1020.59,"humidity":87},"wind":{"speed":2.66,"deg":313.001},"clouds":{"all":44},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"dt":1424686990},{"main":{"temp":268.482,"temp_min":268.482,"temp_max":268.482,"pressure":1022.03,"sea_level":1037.13,"grnd_level":1022.03,"humidity":80},"wind":{"speed":3.72,"deg":324.502},"clouds":{"all":88},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"dt":1424690832},{"main":{"temp":268.482,"temp_min":268.482,"temp_max":268.482,"pressure":1022.03,"sea_level":1037.13,"grnd_level":1022.03,"humidity":80},"wind":{"speed":3.72,"deg":324.502},"clouds":{"all":88},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"dt":1424694139},{"main":{"temp":268.482,"temp_min":268.482,"temp_max":268.482,"pressure":1022.03,"sea_level":1037.13,"grnd_level":1022.03,"humidity":80},"wind":{"speed":3.72,"deg":324.502},"clouds":{"all":88},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"dt":1424697726},{"main":{"temp":266.244,"temp_min":266.244,"temp_max":266.244,"pressure":1025.53,"sea_level":1040.55,"grnd_level":1025.53,"humidity":72},"wind":{"speed":3.55,"deg":320.501},"clouds":{"all":80},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"dt":1424701809},{"main":{"temp":266.159,"temp_min":266.159,"temp_max":266.159,"pressure":1023.88,"sea_level":1039,"grnd_level":1023.88,"humidity":68},"wind":{"speed":4.35,"deg":317.5},"clouds":{"all":92},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"dt":1424708692},{"main":{"temp":267.426,"temp_min":267.426,"temp_max":267.426,"pressure":1023.67,"sea_level":1038.71,"grnd_level":1023.67,"humidity":66},"wind":{"speed":4.16,"deg":312.001},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}],"dt":1424712414},{"main":{"temp":266.627,"temp_min":266.627,"temp_max":266.627,"pressure":1022.59,"sea_level":1037.7,"grnd_level":1022.59,"humidity":65},"wind":{"speed":4.91,"deg":315.001},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}],"dt":1424715544},{"main":{"temp":266.323,"temp_min":266.323,"temp_max":266.323,"pressure":1023.05,"sea_level":1038.35,"grnd_level":1023.05,"humidity":63},"wind":{"speed":4.37,"deg":313.007},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}],"dt":1424720150},{"main":{"temp":266.323,"temp_min":266.323,"temp_max":266.323,"pressure":1023.05,"sea_level":1038.35,"grnd_level":1023.05,"humidity":63},"wind":{"speed":4.37,"deg":313.007},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}],"dt":1424726877},{"main":{"temp":266.323,"temp_min":266.323,"temp_max":266.323,"pressure":1023.05,"sea_level":1038.35,"grnd_level":1023.05,"humidity":63},"wind":{"speed":4.37,"deg":313.007},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01d"}],"dt":1424730510},{"main":{"temp":262.589,"temp_min":262.589,"temp_max":262.589,"pressure":1025.49,"sea_level":1040.67,"grnd_level":1025.49,"humidity":60},"wind":{"speed":3.71,"deg":320.001},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424734351},{"main":{"temp":262.589,"temp_min":262.589,"temp_max":262.589,"pressure":1025.49,"sea_level":1040.67,"grnd_level":1025.49,"humidity":60},"wind":{"speed":3.71,"deg":320.001},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424737189},{"main":{"temp":262.589,"temp_min":262.589,"temp_max":262.589,"pressure":1025.49,"sea_level":1040.67,"grnd_level":1025.49,"humidity":60},"wind":{"speed":3.71,"deg":320.001},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424740996},{"main":{"temp":259.988,"temp_min":259.988,"temp_max":259.988,"pressure":1026.7,"sea_level":1042.18,"grnd_level":1026.7,"humidity":67},"wind":{"speed":2.92,"deg":326.007},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424744814},{"main":{"temp":259.988,"temp_min":259.988,"temp_max":259.988,"pressure":1026.7,"sea_level":1042.18,"grnd_level":1026.7,"humidity":67},"wind":{"speed":2.92,"deg":326.007},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424748153},{"main":{"temp":259.988,"temp_min":259.988,"temp_max":259.988,"pressure":1026.7,"sea_level":1042.18,"grnd_level":1026.7,"humidity":67},"wind":{"speed":2.92,"deg":326.007},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424751682},{"main":{"temp":257.484,"temp_min":257.484,"temp_max":257.484,"pressure":1026.75,"sea_level":1042.23,"grnd_level":1026.75,"humidity":64},"wind":{"speed":2.21,"deg":325.501},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424755612},{"main":{"temp":257.484,"temp_min":257.484,"temp_max":257.484,"pressure":1026.75,"sea_level":1042.23,"grnd_level":1026.75,"humidity":64},"wind":{"speed":2.21,"deg":325.501},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424758596},{"main":{"temp":257.484,"temp_min":257.484,"temp_max":257.484,"pressure":1026.75,"sea_level":1042.23,"grnd_level":1026.75,"humidity":64},"wind":{"speed":2.21,"deg":325.501},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424762566},{"main":{"temp":254.784,"temp_min":254.784,"temp_max":254.784,"pressure":1025.95,"sea_level":1041.75,"grnd_level":1025.95,"humidity":80},"wind":{"speed":1.4,"deg":315.004},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424766404},{"main":{"temp":254.784,"temp_min":254.784,"temp_max":254.784,"pressure":1025.95,"sea_level":1041.75,"grnd_level":1025.95,"humidity":80},"wind":{"speed":1.4,"deg":315.004},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424769713},{"main":{"temp":254.784,"temp_min":254.784,"temp_max":254.784,"pressure":1025.95,"sea_level":1041.75,"grnd_level":1025.95,"humidity":80},"wind":{"speed":1.4,"deg":315.004},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424773291},{"main":{"temp":252.651,"temp_min":252.651,"temp_max":252.651,"pressure":1024.72,"sea_level":1040.48,"grnd_level":1024.72,"humidity":68},"wind":{"speed":1.08,"deg":322.004},"clouds":{"all":0},"weather":[{"id":800,"main":"Clear","description":"Sky is Clear","icon":"01n"}],"dt":1424777331}]}



function*/