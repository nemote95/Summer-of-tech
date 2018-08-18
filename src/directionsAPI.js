function calculateAndDisplayRoute(start,end) {
	var start= "167 Victoria St W, Auckland, 1010";//document.getElementById('start').value;
	var end= "Albert Park Bowen Lane, Auckland";//document.getElementById('end').value;
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'BICYCLING'
        }, function(response, status) {
          if (status === 'OK') {
			  var directionsArray=[];
			  window.response =response;
			  //value of this loop is 0 because its first value of response
			  console.log(response);
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }