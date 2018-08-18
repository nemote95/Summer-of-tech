function initMap(mapElement,directionsDisplay) {

	var map = new google.maps.Map(mapElement, {
	  zoom: 7,
	  center: {lat: 41.85, lng: -87.65}
	});
	directionsDisplay.setMap(map); 
  }
	  
function  calculateAndDisplayRoute(directionsService, directionsDisplay,start,end) {
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'RIDING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
	  