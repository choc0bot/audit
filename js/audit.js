 function getLocationConstant()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);
    } else {
        alert("Your browser or device doesn't support Geolocation");
    }
}

// If we have a successful location update
function onGeoSuccess(event)
{
    document.getElementById("GPS").value =  event.coords.latitude + ", " + event.coords.longitude;
}

// If something has gone wrong with the geolocation request
function onGeoError(event)
{
    alert("Error code " + event.code + ". " + event.message);
}
