import React from 'react';

import {format} from 'date-fns';
import PT_BR from 'date-fns/locale/pt-BR';

import getParsedForecast from '../../functions/getParsedForecast';

import {
    Container,
    ScrollView,
    ForecastCard,
    ImageStyle,
    Separator,
    DayWeek,
} from './styles';

export default function Forecast({forecast}){
    let parsedForecast;

    if(forecast.length > 0){
        parsedForecast = getParsedForecast(forecast);

        return(
            <Container>
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
                        <DayWeek>{format(
                            new Date(parsedForecast[0].dt_txt),
                            "dd'/'MM",
                            {locale: PT_BR}
                            )}</DayWeek>
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
                        <DayWeek>{format(
                            new Date(parsedForecast[2].dt_txt),
                            "dd'/'MM",
                            {locale: PT_BR}
                            )}</DayWeek>
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
                        <DayWeek>{format(
                            new Date(parsedForecast[4].dt_txt),
                            "dd'/'MM",
                            {locale: PT_BR}
                            )}</DayWeek>
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
                        <DayWeek>{format(
                            new Date(parsedForecast[6].dt_txt),
                            "dd'/'MM",
                            {locale: PT_BR}
                            )}</DayWeek>
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
                        <DayWeek>{format(
                            new Date(parsedForecast[8].dt_txt),
                            "dd'/'MM",
                            {locale: PT_BR}
                            )}</DayWeek>
                    </ForecastCard>
                </ScrollView>
            </Container>
        );
    }else {
        return <></>;
    }
}