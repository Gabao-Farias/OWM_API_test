import styled from 'styled-components/native';

export const Container = styled.View`
    height: 170px;
    border: 2px solid #fff;
    margin-top: 20px;
    border-radius: 20px;
`;

export const Title = styled.Text`
    margin: 5px;
    color: #fff;
    font-size: 26px;
    text-align: center;
`;

export const ScrollView = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    flex: 1;
    flex-direction: row;
`;

export const ForecastCard = styled.View`
    justify-content: center;
    border: 2px solid #fff;
    width: 75px;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
`;

export const Separator = styled.View`
    border-bottom-color: #fff;
    border-bottom-width: 1px;
`;


export const ImageStyle = styled.Image`
    align-self: center;
    height: 40px;
    width: 40px;
    margin: -5px;
`;

export const DayNightDivision = styled.Text`
    color: #fff;
    text-align: center;
`;

export const DayWeek = styled.Text`
    margin-top: 5px;
    color: #fff;
    text-align: center;
    font-size: 14px;
`;
