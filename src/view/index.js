import React, {Component} from 'react';

import { PermissionsAndroid } from 'react-native';

import Geolocation from '@react-native-community/geolocation';

import api from '../services/weatherApi';

import Icon from 'react-native-vector-icons/EvilIcons';

import {
    Container,
    LocationContainer,
    Location,
    WeatherContainer,
    City,
    CityName} from './styles';

export default class App extends Component{
    state = {
        weather: {},
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

    async refreshWeather(location){
        try{
            const response = await api.get(`/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&lang=pt_br&appid=dfa9dceaeb9c36a193b24efaa4e27a76`);

            const parsedResponse = JSON.parse(response.request._response);

            console.log(parsedResponse);

            this.setState({
                location: {
                    cityName: parsedResponse.name,
                }
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
                <LocationContainer>
                    <Location>
                        <Icon name="location" size={40} color="#fff"/>
                        <City>
                            <CityName>{this.state.location.cityName}</CityName>
                        </City>
                    </Location>
                    <Icon name="refresh" size={40} color="#fff"/>
                </LocationContainer>
                <WeatherContainer>
                    
                </WeatherContainer>
            </Container>
        );
    }
}