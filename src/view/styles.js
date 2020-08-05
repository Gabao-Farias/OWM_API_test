import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#2B0547','#148BD0'],
    start: {x: 0, y: 0.1},
    end: {x: 0, y: 1},
})`
    flex: 1;
    padding: 20px;
    padding-top: 45px;
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
    font-size: 16px;
`;

export const Refresh = styled.TouchableOpacity``;

export const WeatherContainer = styled.View`
    margin-top: 20px;
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 10px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 26px;
    text-align: center;
`;

export const Ambient = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 10px;
    margin-top: 10px;
`;

export const SmallCard = styled.View`
    padding: 5px;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 10px;
    width: 70px;
    height: 70px;
    margin: 10px;
`;

export const SmallCardDescription = styled.Text`
    color: #fff;
    font-size: 14px;
`;

export const FastTest = styled.TouchableOpacity`
    margin-top: 6px;
    flex-direction: row;
    align-items: center;
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 6px;
`;

export const FastTestText = styled.Text`
    color: #fff;
    font-size: 16px;
`;