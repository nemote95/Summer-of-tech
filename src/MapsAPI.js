function calculateAndDisplayRoute(directionsService, directionsDisplay,start,end) {
        directionsService.route({
          origin: "Spark New Zealand (Corporate Office) Victoria Street West, Auckland",
          destination: "Spark Business Auckland Ponsonby Road, Grey Lynn, Auckland",
          travelMode: 'BICYCLING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
			console.log(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }