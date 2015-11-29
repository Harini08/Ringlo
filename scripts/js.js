$(document).ready(function () {
	google.maps.event.addDomListener(window, 'load', init_map);
});

// Init Google mpas
function init_map() {
	var var_location = new google.maps.LatLng(51.461387,-0.115185);
	var var_mapoptions = {
	  center: var_location,
	  zoom: 14
	};
	var var_marker = new google.maps.Marker({
	    position: var_location,
	    map: var_map,
	    title:"Brixton"});
	var var_map = new google.maps.Map(document.getElementById("map-container"),
	    var_mapoptions);
	var_marker.setMap(var_map); 
}






