import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;

    background-color: #27455c;

    padding: 5% 0;
`

export const Content = styled.View`
    width: 100%;
    height: 100%;
    
    padding-bottom: 0;

    background-color: #FFFFFF;

    border-radius: 5px;
    
    align-items: center;
`

export const Upload = styled.TouchableOpacity`
    width: 90%;
    height: 15%;

    border: 1px dotted #CCC;
    border-radius: 5px;

    margin-top: 5%;

    justify-content: center;
    align-items: center;
`

export const UploadText = styled.Text`
    color: #CCC;
`