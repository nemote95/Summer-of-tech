function initMap(mapElement,directionsDisplay) {

	var map = new google.maps.Map(mapElement, {
	  zoom: 7,
	  center: {lat: -40.9006, lng: 174.8860}
	});
	directionsDisplay.setMap(map); 
  }
	  
function  calculateAndDisplayRoute(directionsService, directionsDisplay,start,end) {
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'CYCLING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
	  