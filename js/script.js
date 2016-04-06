$(function () {

    $('form').on("submit", function (e) {
        e.preventDefault();
        var zipcode = $("#zip").val();
        console.log(zipcode);
        var apiKey = $("#apikey").val();
        console.log(apiKey);
        var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&appid=" + apiKey;
        console.log(zipcode, apiKey, url)
        $.getJSON(url)
            .done(function (data) {

                var weatherInfo = "";
                weatherInfo += "<p> humidity " + data.main.humidity + "</p>";
                weatherInfo += "<h2>temperature " + converTemp(data.main.temp) + "</p>";
                weatherInfo += "<p>wind " + data.wind.speed + "</p>";
                $("form").append("<div>" + weatherInfo + "</div>");


            });









    });

    function converTemp(temp) {

        return Math.round((temp * 1.8) - 459.67);
    }









});