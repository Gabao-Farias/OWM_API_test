import React, {Component} from 'react';
import {PermissionsAndroid, StatusBar, ScrollView, Image} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import api from '../services/weatherApi';

import WeatherInfo from '../components/WeatherInfo';

import Icon from 'react-native-vector-icons/EvilIcons';

import {
    Container,
    LocationContainer,
    Location,
    City,
    CityName,
    Refresh,
    TestsContainer,
    Title,
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
        try{
            Geolocation.getCurrentPosition(location => this.refreshWeather(location));
        }catch(err){
            console.log(err);
        }
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
            const response = await api.get(`/weather?q=${cityName}&lang=pt_br&appid=ad8dbb008061c49628217468c674d26c`);

            const parsedResponse = JSON.parse(response.request._response);

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
            const response = await api.get(`/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&lang=pt_br&appid=ad8dbb008061c49628217468c674d26c`);

            const parsedResponse = JSON.parse(response.request._response);

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

            console.log(String(err));
        }
    }

    componentDidMount(){
        this.requestLocationPermission();
    }

    render(){
        return(
            <Container>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
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


                <WeatherInfo info={this.state} />

                <TestsContainer>

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
                    <FastTest onPress={() => {this.refreshWeatherByCityName('São Paulo')}}>
                        <Icon name="location" size={40} color="#fff"/>
                        <FastTestText>São Paulo</FastTestText>
                    </FastTest>
                    <FastTest onPress={() => {this.refreshWeatherByCityName('Tokyo')}}>
                        <Icon name="location" size={40} color="#fff"/>
                        <FastTestText>Tóquio</FastTestText>
                    </FastTest>
                    
                </TestsContainer>
                </ScrollView>
            </Container>
        );
    }
}