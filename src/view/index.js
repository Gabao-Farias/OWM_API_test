import React, {Component} from 'react';

import { PermissionsAndroid, StatusBar, Image } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import api from '../services/weatherApi';

import Icon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Container,
    LocationContainer,
    Location,
    City,
    CityName,
    Refresh,
    WeatherContainer,
    Title,
    Ambient,
    SmallCard,
    SmallCardDescription,
    FastTest,
    FastTestText,
} from './styles';

export default class App extends Component{
    state = {
        weather: {
            ambient: {
                feels_like: 0,
                humidity: 0,
                temp: 0,
                temp_max: 0,
                temp_min: 0,
                wind_speed: 0,
            },
            dayWeather: {
                description: '',
                icon: '',
                main: '',
            },
        },
        location: {
            cityName: 'London',
        },
    };

    refreshLocation(){
        Geolocation.getCurrentPosition(location => this.refreshWeather(location));
    }

    

    async requestLocationPermission(){
        try{
            const granted = await PermissionsAndroid.request(
                "android.permission.ACCESS_FINE_LOCATION",
            );
            if(granted === PermissionsAndroid.RESULTS.GRANTED){
                this.refreshLocation();
            }else{
                console.log("Location permission denied");
            }
        }catch(err){
            console.log(err);
        }
    }

    async refreshWeatherByCityName(cityName){
        try{
            const response = await api.get(`/weather?q=${cityName}&lang=pt_br&appid=dfa9dceaeb9c36a193b24efaa4e27a76`);

            const parsedResponse = JSON.parse(response.request._response);

            console.log(parsedResponse);

            this.setState({
                weather: {
                    ambient: {
                        feels_like: parsedResponse.main.feels_like,
                        humidity: parsedResponse.main.humidity,
                        temp: parsedResponse.main.temp,
                        temp_max: parsedResponse.main.temp_max,
                        temp_min: parsedResponse.main.temp_min,
                        wind_speed: parsedResponse.wind.speed,
                    },
                    dayWeather: {
                        description: parsedResponse.weather[0].description.charAt(0).toUpperCase() + parsedResponse.weather[0].description.slice(1),
                        icon: parsedResponse.weather[0].icon,
                        main: parsedResponse.weather[0].main,
                    }
                },
                location: {
                    cityName: parsedResponse.name,
                },
            });
        }catch(err){
            console.log(err);
        }

    }

    async refreshWeather(location){
        try{
            const response = await api.get(`/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&lang=pt_br&appid=dfa9dceaeb9c36a193b24efaa4e27a76`);

            const parsedResponse = JSON.parse(response.request._response);

            console.log(parsedResponse);

            this.setState({
                weather: {
                    ambient: {
                        feels_like: parsedResponse.main.feels_like,
                        humidity: parsedResponse.main.humidity,
                        temp: parsedResponse.main.temp,
                        temp_max: parsedResponse.main.temp_max,
                        temp_min: parsedResponse.main.temp_min,
                        wind_speed: parsedResponse.wind.speed,
                    },
                    dayWeather: {
                        description: parsedResponse.weather[0].description.charAt(0).toUpperCase() + parsedResponse.weather[0].description.slice(1),
                        icon: parsedResponse.weather[0].icon,
                        main: parsedResponse.weather[0].main,
                    }
                },
                location: {
                    cityName: parsedResponse.name,
                },
            });
        }catch(err){
            console.log(err);
        }
    }

    componentDidMount(){
        this.requestLocationPermission();
    }

    render(){
        return(
            <Container>
                <StatusBar backgroundColor="transparent" translucent barStyle="light-content" />
                <LocationContainer>
                    <Location>
                        <Icon name="location" size={40} color="#fff"/>
                        <City>
                            <CityName>{this.state.location.cityName}</CityName>
                        </City>
                    </Location>
                    <Refresh onPress={() => {this.refreshLocation()}}>
                        <Icon name="refresh" size={40} color="#fff"/>
                    </Refresh>
                </LocationContainer>
                <WeatherContainer>
                    <Title>{this.state.weather.dayWeather.description}</Title>
                    <Ambient>
                        <SmallCard>
                            <MaterialIcon name="thermometer-chevron-down" size={30} color="#fff" />
                            <SmallCardDescription>{Math.round(this.state.weather.ambient.temp_min - 273.15)}°C</SmallCardDescription>
                        </SmallCard>
                        <SmallCard>
                            <MaterialIcon name="thermometer" size={30} color="#fff" />
                            <SmallCardDescription>{Math.round(this.state.weather.ambient.temp - 273.15)} °C</SmallCardDescription>
                        </SmallCard>
                        <SmallCard>
                            <MaterialIcon name="thermometer-chevron-up" size={30} color="#fff" />
                            <SmallCardDescription>{Math.round(this.state.weather.ambient.temp_max - 273.15)} °C</SmallCardDescription>
                        </SmallCard>
                        <SmallCard>
                            <MaterialIcon name="water-outline" size={30} color="#fff" />
                            <SmallCardDescription>{this.state.weather.ambient.humidity}%</SmallCardDescription>
                        </SmallCard>
                        <SmallCard>
                            <MaterialIcon name="human-handsdown" size={30} color="#fff" />
                            <SmallCardDescription>{Math.round(this.state.weather.ambient.feels_like - 273.15)} °C</SmallCardDescription>
                        </SmallCard>
                        <SmallCard>
                            <MaterialIcon name="weather-windy" size={30} color="#fff" />
                            <SmallCardDescription>{Math.round(this.state.weather.ambient.wind_speed * 1.609)} Km/h</SmallCardDescription>
                        </SmallCard>
                    </Ambient>
                </WeatherContainer>

                <WeatherContainer>

                    <Title>Testes rápidos</Title>

                    <FastTest onPress={() => {this.refreshWeatherByCityName('Los Angeles')}}>
                        <Icon name="location" size={40} color="#fff"/>
                        <FastTestText>Los Angeles</FastTestText>
                    </FastTest>
                    <FastTest onPress={() => {this.refreshWeatherByCityName('Moscou')}}>
                        <Icon name="location" size={40} color="#fff"/>
                        <FastTestText>Moscou</FastTestText>
                    </FastTest>
                    <FastTest onPress={() => {this.refreshWeatherByCityName('Paris')}}>
                        <Icon name="location" size={40} color="#fff"/>
                        <FastTestText>Paris</FastTestText>
                    </FastTest>
                    <FastTest onPress={() => {this.refreshWeatherByCityName('Tokyo')}}>
                        <Icon name="location" size={40} color="#fff"/>
                        <FastTestText>Tokyo</FastTestText>
                    </FastTest>
                    
                </WeatherContainer>

            </Container>
        );
    }
}