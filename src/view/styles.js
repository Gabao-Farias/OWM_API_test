import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#2B0547','#148BD0'],
    start: {x: 0, y: 0},
    end: {x: 0, y: 1},
})`
    flex: 1;
    padding: 20px;
`;

export const LocationContainer = styled.View`
    flex-direction: row;
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 10px;
    justify-content: space-between;
`;

export const Location = styled.View`
    flex-direction: row;
`;

export const City = styled.View`
    padding: 5px;
    border-radius: 10px;
`;

export const CityName = styled.Text`
    color: #fff;
    font-size: 20px;
`;

export const WeatherContainer = styled.View``;
