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
}