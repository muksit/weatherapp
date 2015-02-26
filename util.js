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

//Function to convert list of cityIds into a string
function convertArray(x){
    endlist = "";
    for(var i=0; i<x.length; i++){
        var m = x[i].toString();
      var endlist = endlist + m + ','
    }
    return endlist.slice(0, - 1);
}