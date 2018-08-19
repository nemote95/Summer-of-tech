function onMapsInit(){
	document.getElementById('go').onclick=calculateAndDisplayRoute;
}


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
			  window.response =response;
			  //value of this loop is 0 because its first value of response
			  var route_number=0;
			  
		
			for (var step of response.routes[0].legs[0].steps){
				for(var path of step.path){
				directionsArray.push({lat:path.lat(),lng:path.lng()});
				
				}
              }
			var total_distance=response.routes[0].legs[0].distance.value;
			var total_time= (response.routes[0].legs[0].duration.value)/60;

            directionsDisplay.setDirections(response);
			//calling elevation API
			getDirectionalAPIData(directionsArray, total_distance, total_time);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }
	  
function autocomplete(input,options,infowindowContent){
		

        var autocomplete = new google.maps.places.Autocomplete(input,options);
        autocomplete.bindTo('bounds', map);

        // Set the data fields to return when the user selects a place.
        autocomplete.setFields(
            ['address_components', 'geometry', 'name']);

        var infowindow = new google.maps.InfoWindow();
        infowindow.setContent(infowindowContent);
        

        autocomplete.addListener('place_changed', function() {
          infowindow.close();
          var place = autocomplete.getPlace();
          if (!place.geometry) {
            window.alert("No details available for input: '" + place.name + "'");
            return;
          }

          var address = '';
          if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
          }
          infowindowContent.children['place-name'].textContent = place.name;
          infowindowContent.children['place-address'].textContent = address;
        });

      }