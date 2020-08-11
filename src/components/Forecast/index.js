import React from 'react';

import {format} from 'date-fns';
import PT_BR from 'date-fns/locale/pt-BR';

import getParsedForecast from '../../functions/getParsedForecast';

import {
    Container,
    Title,
    ScrollView,
    ForecastCard,
    ImageStyle,
    Separator,
    DayWeek,
} from './styles';
import getDaysOfWeek from '../../functions/getDaysOfWeek';

export default function Forecast({forecast}){

    if(forecast.length > 0){
        let parsedForecast = getParsedForecast(forecast);
        let weekDays = getDaysOfWeek(parsedForecast);

        return(
            <Container>
                <Title>Previsão do Tempo</Title>

                <ScrollView>
                    <ForecastCard>
                        <Separator>
                            <ImageStyle
                                source={{uri: `http://openweathermap.org/img/wn/${parsedForecast[0].weather[0].icon}@2x.png`}}
                            />
                        </Separator>
                        <ImageStyle
                            source={{uri: `http://openweathermap.org/img/wn/${parsedForecast[1].weather[0].icon}@2x.png`}}
                        />
                        <DayWeek>{weekDays[0]}</DayWeek>
                    </ForecastCard>
                    <ForecastCard>
                        <Separator>
                            <ImageStyle
                                source={{uri: `http://openweathermap.org/img/wn/${parsedForecast[2].weather[0].icon}@2x.png`}}
                            />
                        </Separator>
                        <ImageStyle
                            source={{uri: `http://openweathermap.org/img/wn/${parsedForecast[3].weather[0].icon}@2x.png`}}
                        />
                        <DayWeek>{weekDays[2]}</DayWeek>
                    </ForecastCard>
                    <ForecastCard>
                        <Separator>
                            <ImageStyle
                                source={{uri: `http://openweathermap.org/img/wn/${parsedForecast[4].weather[0].icon}@2x.png`}}
                            />
                        </Separator>
                        <ImageStyle
                            source={{uri: `http://openweathermap.org/img/wn/${parsedForecast[5].weather[0].icon}@2x.png`}}
                        />
                        <DayWeek>{weekDays[4]}</DayWeek>
                    </ForecastCard>
                    <ForecastCard>
                        <Separator>
                            <ImageStyle
                                source={{uri: `http://openweathermap.org/img/wn/${parsedForecast[6].weather[0].icon}@2x.png`}}
                            />
                        </Separator>
                        <ImageStyle
                            source={{uri: `http://openweathermap.org/img/wn/${parsedForecast[7].weather[0].icon}@2x.png`}}
                        />
                        <DayWeek>{weekDays[6]}</DayWeek>
                    </ForecastCard>
                    <ForecastCard>
                        <Separator>
                            <ImageStyle
                                source={{uri: `http://openweathermap.org/img/wn/${parsedForecast[8].weather[0].icon}@2x.png`}}
                            />
                        </Separator>
                        <ImageStyle
                            source={{uri: `http://openweathermap.org/img/wn/${parsedForecast[9].weather[0].icon}@2x.png`}}
                        />
                        <DayWeek>{weekDays[8]}</DayWeek>
                    </ForecastCard>
                </ScrollView>
            </Container>
        );
    }else {
        return <></>;
    }
}