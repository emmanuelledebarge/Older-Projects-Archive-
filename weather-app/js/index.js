$(document).ready(function(){
  var long;
  var lat;
  var fTemp;
  var cTemp;
  var tempSwap= true;
  if (navigator.geolocation) {

navigator.geolocation.getCurrentPosition(function(position) {
   long = position.coords.longitude;
    lat = position.coords.latitude;
$("#data").html("latitude: " + lat + "<br>longitude: " + long);

  
var api = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=2933afc0f12ae13fcadf8f55220609e5";
  
  
  
  $.getJSON(api, function(data){
    var weatherType = data.weather[0].description;
    var kTemp = data.main.temp;
    var windSpeed = data.wind.speed;
    var city = data.name;
    
    
    fTemp = (kTemp*(9/5)-459.67).toFixed(1);
    cTemp = (kTemp - 273).toFixed(1);
    
    
    
    
    console.log(city);
    $("#city").html(city);
    console.log(api);
    $("#weatherType").html(weatherType);
    $("#fTemp").html(fTemp + " &#8457");
    $("#fTemp").click(function(){
      if(tempSwap === false){
       $("#fTemp").html(fTemp+ " &#8457")
        
        tempSwap = true;
    }
      else {
        $("#fTemp").html(cTemp+ "&#8451");
        tempSwap = false;
      }
    });
    windSpeed = (2.237 *(windSpeed)).toFixed(1);
    $("#windSpeed").html(windSpeed+ " mph");
    if(fTemp > 80){
      $("body").css("background-image","url(http://www.mrwallpaper.com/wallpapers/sunny-day-landscape-1600x1200.jpg)")
    }
    else if (fTemp > 70) {
      $("body").css("background-image","url(http://www.mrwallpaper.com/wallpapers/sunny-day-landscape-1600x1200.jpg)")
      
    }
  });
});
   }
  });