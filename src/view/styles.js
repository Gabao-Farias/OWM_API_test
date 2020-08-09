import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
    colors: ['#2B0547','#148BD0'],
    start: {x: 0, y: 0.1},
    end: {x: 0, y: 1},
})`
    flex: 1;
`;

export const ScrollContainer = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
})`
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
    align-items: center;
`;

export const City = styled.View`
    padding: 2px;
    border-radius: 10px;
`;

export const CityName = styled.TextInput`
    color: #fff;
    font-size: 20px;
`;

export const Options = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Search = styled.TouchableOpacity``;

export const Refresh = styled.TouchableOpacity``;

export const TestsContainer = styled.View`
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