import styled from 'styled-components/native';

export const WeatherContainer = styled.View`
    align-items: center;
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

export const WeatherImage = styled.View`
    align-self: center;
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
    height: 90px;
    margin: 10px;
`;

export const SmallCardDescription = styled.Text`
    color: #fff;
    font-size: 14px;
    text-align: center;
`;

export const SmallerDescription = styled.Text`
    color: #fff;
    font-size: 11px;
    text-align: center;
`;