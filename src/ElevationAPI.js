function Elevation_URL(route){
    URL_Base = "https://maps.googleapis.com/maps/api/elevation/json?path=";
    api_Key = "&key=AIzaSyBHVHSBJ6sVHbvHCBIWcKMiXiYDqZoB-V8";

    for(var step of route.legs.steps){
        URL_Base += step.start_location + "|";
    }

    URL_Base += step.end_location + api_Key;
    return URL_Base;

}
