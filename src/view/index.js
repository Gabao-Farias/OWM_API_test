import React, {Component} from 'react';
import {PermissionsAndroid, StatusBar, ScrollView, Alert} from 'react-native';
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
                feels_like: 273,
                humidity: 0,
                temp: 273,
                temp_max: 273,
                temp_min: 273,
                wind_speed: 0,
            },
            dayWeather: {
                description: '',
                icon: '',
                main: '',
            },
        },
        location: {
            cityName: '',
        },
        error: {
            errorState: false,
            errorMessage:'',
        },
    };

    refreshLocation(){
        try{
            Geolocation.getCurrentPosition(location => this.refreshWeather(location));
        }catch(err){
            Alert.alert("Erro!", "Problema ao encontrar localização!");
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
                Alert.alert("Permissão negada!","Serão habilitados apenas os testes rápidos ao invés da sua localização atual. Para autorizar permissão, atualize.");
                this.refreshWeatherByCityName("Los Angeles");
            }
        }catch(err){
            Alert.alert("Erro!", "Problema na autorização da localização!");
        }
    }

    async refreshWeatherByCityName(cityName){
        try{
            const response = await api.get(`/weather?q=${cityName}&lang=pt_br&appid=dfa9dceaeb9c36a193b24efaa4e27a76`);

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
            if(String(err) === "Error: Network Error"){
                Alert.alert("Erro ao atualizar!", "Sem internet!");
            }else{
                Alert.alert("Erro ao atualizar!", "Não foi possível recarregar os dados! " + err);
            }
        }
    }

    async refreshWeather(location){
        try{
            const response = await api.get(`/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&lang=pt_br&appid=dfa9dceaeb9c36a193b24efaa4e27a76`);

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
                    },
                },
                location: {
                    cityName: parsedResponse.name,
                },
            });
        }catch(err){
            if(String(err) === "Error: Network Error"){
                Alert.alert("Erro ao atualizar!", "Sem internet!");
            }else{
                Alert.alert("Erro ao atualizar!", "Não foi possível recarregar os dados! " + err);
            }
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