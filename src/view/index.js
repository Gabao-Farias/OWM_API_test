import React, {Component} from 'react';

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
        location: {},
    };

    refreshWeather(){

    }

    componentDidMount(){}

    render(){
        return(
            <Container>
                <LocationContainer>
                    <Location>
                        <Icon name="location" size={40} color="#fff"/>
                        <City>
                            <CityName>London</CityName>
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