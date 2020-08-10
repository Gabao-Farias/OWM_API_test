export default function getParsedForecast(forecast){
    const baseHour = Number(forecast[0].dt_txt.slice(11, 13));
    const stringBaseHour = forecast[0].dt_txt.slice(11, 19);
    let hour;

    if(baseHour > 12){
        hour = baseHour - 12;
    }else{
        if(baseHour < 12){
            hour = baseHour + 12;
        }else{
            otherHour = "00:00:00";
        }
    }

    hour = hour + ":00:00";

    if(hour.length < 8)
        hour = "0" + hour;

    let forecastList = forecast.filter((item) => {
        if(item.dt_txt.slice(11,19) === stringBaseHour || item.dt_txt.slice(11,19) === hour){
            return(item);
        }
    });

    return(forecastList);
}