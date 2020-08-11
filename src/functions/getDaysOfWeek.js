import {format} from 'date-fns';
import PT_BR from 'date-fns/locale/pt-BR';

export default function getDaysOfWeek(forecast){
    let i, y, m, d;
    let dayWeekList = [];
    for(i=0;i<forecast.length;i++){

        y = Number(forecast[i].dt_txt.slice(0,4));
        m = Number(forecast[i].dt_txt.slice(5,7)) - 1;  //-1 cause month starts on 0 and goes 11
        d = Number(forecast[i].dt_txt.slice(8,10));
        
        dayWeekList.push(format(
            new Date(y, m, d),
            "eee",
            {locale: PT_BR},
            )
        );
    }
    
    for(i=0;i<forecast.length;i++){
        dayWeekList[i] = dayWeekList[i][0].toUpperCase() + dayWeekList[i].slice(1, dayWeekList[i].length);
    }

    return dayWeekList;
}