function onMapsInit(){
document.getElementById('go').onclick=calculateAndDisplayRoute;}


function calculateAndDisplayRoute() {
	var start=document.getElementById('start').value;
	var end=document.getElementById('end').value;
        directionsService.route({
          origin: start,
          destination: end,
          travelMode: 'BICYCLING'
        }, function(response, status) {
          if (status === 'OK') {
			  var directionsArray=[];
			  window.response =response.routes;
			  //value of this loop is 0 because its first value of response
			  console.log(response);
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }