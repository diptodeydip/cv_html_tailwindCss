$(document).ready(function(){

  $("#addressDetails").click(function(){

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=sylhet&units=metric&mode=json&appid=cf28874233f2084094d36b257c6f6b54')
    .then(function (response) {
    // handle success
    $("#overlay").show();

    //var line_break = "<br>";
    var temp = "Temp: "+response.data["main"]["temp"];
    //var temp_max = "Temp_max: "+response.data["main"]["temp_max"]+line_break;
    //var temp_min = "Temp_min: "+response.data["main"]["temp_min"]+line_break;
    var feels_like = "Feels Like :"+response.data["main"]["feels_like"];
    var humidity = "Humidity: "+response.data["main"]["humidity"];
    var weather_mode = "("+response.data["weather"][0]["main"]+")";
  
    //var city = "City: "+response.data["name"]+line_break;
    //var sunrise = "Sunrise: "+response.data["sys"]["sunrise"]+line_break;
    //var sunset = "Sunset: "+response.data["sys"]["sunset"]+line_break;
    //var country = "Country: "+response.data["sys"]["country"]+line_break;
  

   $("#temp").html(temp);
   $("#feels_like").html(feels_like);
   $("#humidity").html(humidity);
   $("#weather_mode").html(weather_mode);
   
    setTimeout(myFunction, 5000);
    
  })
    .catch(function (error) {
    // handle error
    alert(error);

  })
    .then(function () {
    // always executed
  });
  });

});


function myFunction() {
     $("#overlay").hide();
}