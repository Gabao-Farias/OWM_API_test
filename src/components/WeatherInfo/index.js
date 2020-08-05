import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    WeatherContainer,
    Title,
    Ambient,
    SmallCard,
    SmallCardDescription,
} from './styles';

export default function WeatherInfo({info}){
    return(
        <WeatherContainer>
        <Title>{info.weather.dayWeather.description}</Title>
            <Ambient>
                <SmallCard>
                    <MaterialIcon name="thermometer-chevron-down" size={30} color="#fff" />
                    <SmallCardDescription>{Math.round(info.weather.ambient.temp_min - 273.15)}°C</SmallCardDescription>
                </SmallCard>
                <SmallCard>
                    <MaterialIcon name="thermometer" size={30} color="#fff" />
                    <SmallCardDescription>{Math.round(info.weather.ambient.temp - 273.15)} °C</SmallCardDescription>
                </SmallCard>
                <SmallCard>
                    <MaterialIcon name="thermometer-chevron-up" size={30} color="#fff" />
                    <SmallCardDescription>{Math.round(info.weather.ambient.temp_max - 273.15)} °C</SmallCardDescription>
                </SmallCard>
                <SmallCard>
                    <MaterialIcon name="water-outline" size={30} color="#fff" />
                    <SmallCardDescription>{info.weather.ambient.humidity}%</SmallCardDescription>
                </SmallCard>
                <SmallCard>
                    <MaterialIcon name="human-handsdown" size={30} color="#fff" />
                    <SmallCardDescription>{Math.round(info.weather.ambient.feels_like - 273.15)} °C</SmallCardDescription>
                </SmallCard>
                <SmallCard>
                    <MaterialIcon name="weather-windy" size={30} color="#fff" />
                    <SmallCardDescription>{Math.round(info.weather.ambient.wind_speed * 1.609)} Km/h</SmallCardDescription>
                </SmallCard>
            </Ambient>
        </WeatherContainer>
    );
}