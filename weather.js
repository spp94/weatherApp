$(document).ready(function(){
    $("#submitCity").click(function(){
        return getWeather();
    });
});

function getWeather(){
    var city = $("#city").val();
    
    if(city != ''){
        
        $.ajax({
           url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=metric" + "&APPID=c10bb3bd22f90d636baa008b1529ee25",
            type: "GET",
            dataType: "jsonp",
            success: function(data){
                var widget = showResults(data)
                
                
                $("#showWeather").html(widget);
                
                $("#city").val('');
            }
            
        });
        
        
    }else{
        $("#error").html("<div class='alert alert-danger' id='errorCity'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a>City field cannot be empty</div>");
    }
    
    
}


function showResults(data){
    return  '<h2 style="font-weight:bold; font-size:30px; padding-top:20px;" class="text-center">Current Weather for '+data.name+', '+data.sys.country+'</h2>'+
            "<h3 style='padding-left:40px;'><strong>Weather</strong>: "+data.weather[0].main+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Description</strong>:<img src='http://openweathermap.org/img/w/"+data.weather[0].icon+".png'> "+data.weather[0].description+"</h3>"+
            "<h3 style='padding-left:40px;'><strong>Temperature</strong>: "+data.main.temp+" &deg;C</h3>"+
            "<h3 style='padding-left:40px;'><strong>Pressure</strong>: "+data.main.pressure+" hpa</h3>"+
            "<h3 style='padding-left:40px;'><strong>Humidity</strong>: "+data.main.humidity+"%</h3>";
}












