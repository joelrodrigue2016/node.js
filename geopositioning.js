navigator.geolocation.getCurrentPosition(function getPosition(position){
	console.log("Lat:" + position.coords.latitude);
	console.log("Long:" + position.coords.longitude)

})