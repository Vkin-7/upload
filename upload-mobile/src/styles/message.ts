//@ts-nocheck
import styled from 'styled-components/native'

export const MessageContainer = styled.View`
    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, .8);

    justify-content: center;
    align-items: center;

    position: absolute;

    z-index: 100;
`

MessageContainer.MessageContent = styled.View`
    width: 90%;
    height: 50%;

    background-color: #FFFFFF;

    border-radius: 20px;

    overflow: hidden;
`

MessageContainer.MessageTop = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`

MessageContainer.MessageTitle = styled.Text`
    font-size: 23px;
    font-weight: 100;
    letter-spacing: 10px;
    text-align: center;
`

MessageContainer.MessageMiddle = styled.View`
    flex: 3;

    justify-content: center;
    align-items: center;
`

MessageContainer.MessageText = styled.Text`
    font-size: 13px;
    font-weight: 100;
`

MessageContainer.MessageBottom = styled.View`
    flex: 1;

    border: 1px solid #CCC;

    flex-direction: row;
`

MessageContainer.Button = styled.TouchableHighlight`
    flex: 1;

    justify-content: center;
    align-items: center;
`

MessageContainer.ButtonText = styled.Text`
    font-size: 13px;
    font-weight: 100;
    text-align: center;

    color: ${props => props.textColor};
`