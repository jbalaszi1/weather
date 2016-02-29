// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {
  $('.geolocation').show(); 
} else {
  $('.geolocation').hide();
}


// On Click, Get Geolocation, Call Weather Function
$('button').click( function() {
  
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

// Wrap Plugin, in Function to be Called
// Otherwise, runs when page loads
var getWeather = function(location) {
  
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
 
      
      // Display Data
     
    
     });
    
      // Entire weather object
      console.log();
    };