<<<<<<< HEAD
function Array_of_Elevation(results){
    var elevation_arrays = [];
    for(var elevaton of results){
        elevation_arrays.push(results.elevation);
    }
    return elevation_arrays;
}


function Elevation_API(route){
    URL_Base = "https://maps.googleapis.com/maps/api/elevation/json?path=";
    api_Key = "&key=AIzaSyBHVHSBJ6sVHbvHCBIWcKMiXiYDqZoB-V8";

    for(var step of route.legs.steps){
        URL_Base += step.start_location + "|";
    }
    URL_Base += step.end_location + api_Key;
    return Array_of_Elevation(URL_Base);
=======
function getDirectionalAPIData(path, distance, time) {
	elevator.getElevationAlongPath({
          'path': path,
          'samples': 512
        }, ((elevations, status) => processElevationData(elevations, status, distance, time)));
}

function processElevationData(elevations, status, distance, timeTotal) {
	if (status != 'OK') alert("Panic - unable to retrieve elevations!"); // Panic

	let firstElevation = elevations[0].elevation;
	elevations[0].normalised = 0;
	let distancePerStep = distance / elevations.length;
	let totalEffort = 0;
	let totalDistanceSoFar = 0;
	let dataArray = [[0, elevations[0].normalised]];

	for (i = 1; i < elevations.length; i++) {
		elevations[i].normalised = elevations[i].elevation - firstElevation;
		let differenceInElevation = elevations[i].normalised - elevations[i - 1].normalised;
		totalEffort += getEnergyExpenditure(distancePerStep, differenceInElevation);
		totalDistanceSoFar += distancePerStep;
		dataArray.push([totalDistanceSoFar, elevations[i].normalised]);
	}

	var data = new google.visualization.DataTable();
    data.addColumn('number');
    data.addColumn('number');

	data.addRows(dataArray);

	var options = {
		legend: "none",
		backgroundColor: "#cccccc",
        hAxis: {title: 'Distance'},
        vAxis: {title: 'Elevation'}
      };
    chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);

    
    document.querySelector(".carddistance").innerHTML = "Distance: " + distance + " metres";
		document.querySelector(".cardEnergy").innerHTML = "Energy: " + totalEffort + " calories";
		document.querySelector(".cardTime").innerHTML = "Time: " + timeTotal + " minutes";
}
