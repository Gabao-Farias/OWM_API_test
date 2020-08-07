import React, { useState } from 'react';

import { Image, Alert } from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    WeatherContainer,
    CityName,
    Title,
    Ambient,
    SmallCard,
    SmallCardDescription,
    SmallerDescription,
    WeatherImage,
} from './styles';

export default function WeatherInfo({info}){
    return(
        <WeatherContainer>
            <CityName>{info.location.cityName}</CityName>
            <Title>{info.weather.dayWeather.description}</Title>

            <WeatherImage>
                <Image
                    style = {{height: 150, width: 150}}
                    source={{uri: `http://openweathermap.org/img/wn/${info.weather.dayWeather.icon}@2x.png`}}
                />
            </WeatherImage>

            <Ambient>
                <SmallCard>
                    <MaterialIcon name="thermometer-chevron-down" size={30} color="#fff" />
                    <SmallCardDescription>{Math.round(info.weather.ambient.temp_min - 273.15)}°C</SmallCardDescription>
                    <SmallerDescription>Mínima</SmallerDescription>
                </SmallCard>
                <SmallCard>
                    <MaterialIcon name="thermometer" size={30} color="#fff" />
                    <SmallCardDescription>{Math.round(info.weather.ambient.temp - 273.15)} °C</SmallCardDescription>
                    <SmallerDescription>Média</SmallerDescription>
                </SmallCard>
                <SmallCard>
                    <MaterialIcon name="thermometer-chevron-up" size={30} color="#fff" />
                    <SmallCardDescription>{Math.round(info.weather.ambient.temp_max - 273.15)} °C</SmallCardDescription>
                    <SmallerDescription>Máxima</SmallerDescription>
                </SmallCard>
                <SmallCard>
                    <MaterialIcon name="water-outline" size={30} color="#fff" />
                    <SmallCardDescription>{info.weather.ambient.humidity}%</SmallCardDescription>
                    <SmallerDescription>Humidade do ar</SmallerDescription>
                </SmallCard>
                <SmallCard>
                    <MaterialIcon name="human-handsdown" size={30} color="#fff" />
                    <SmallCardDescription>{Math.round(info.weather.ambient.feels_like - 273.15)} °C</SmallCardDescription>
                    <SmallerDescription>Sensação térmica</SmallerDescription>
                </SmallCard>
                <SmallCard>
                    <MaterialIcon name="weather-windy" size={30} color="#fff" />
                    <SmallCardDescription>{Math.round(info.weather.ambient.wind_speed * 1.609)} Km/h</SmallCardDescription>
                    <SmallerDescription>Vento</SmallerDescription>
                </SmallCard>
            </Ambient>
        </WeatherContainer>
    );
}