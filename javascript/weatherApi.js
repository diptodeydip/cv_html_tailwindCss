$(document).ready(function(){

  $("#addressDetails").click(function(){

    axios.get('https://api.openweathermap.org/data/2.5/weather?q=sylhet&units=metric&mode=json&appid=cf28874233f2084094d36b257c6f6b54')
    .then(function (response) {
    // handle success
    $("#overlay").show();

    // var temp = "Temp: "+response.data["main"]["temp"];
    // var feels_like = "Feels Like :"+response.data["main"]["feels_like"];
    // var humidity = "Humidity: "+response.data["main"]["humidity"];
    // var weather_mode = "("+response.data["weather"][0]["main"]+")";

    //object and array destructuring
    const {data: {main: {temp}}, data: {main: {feels_like}} , data: {main: {humidity}}, data: {weather: [{main: weather_mode}]}} = response;
  
   $("#temp").html("Temp: "+temp);
   $("#feels_like").html("Feels Like :"+feels_like);
   $("#humidity").html("Humidity: "+humidity);
   $("#weather_mode").html("("+weather_mode+")");
   
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