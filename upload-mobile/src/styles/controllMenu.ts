import { Dimensions, TouchableOpacity } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

// const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity)

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export const Container = styled.View`
    width: ${width - (width * .82)}px;
    height: 50%;

    position: absolute;
    right: 10px;
    bottom: 10px;

    justify-content: center;
    align-items: center;
`

export const ButtonControll = styled.TouchableOpacity`
    width: ${width - (width * .82)}px;
    height: ${width - (width * .82)}px;

    border-radius: 35px;

    background-color: #27455c;

    position: absolute;
    bottom: 0;

    justify-content: center;
    align-items: center;
`

export const Content = styled(Animated.View)`
    width: 100%;
    /* transform: translateY(${-(height - (height * .78))}px); */
    height: 200px;

    background-color: #27455C;

    border-radius: 35px;

    position: absolute;

    /* top: -${height - (height * .68)}px; */

    align-items: center;
    justify-content: space-around;
`

export const ButtonAnimated = styled(Animated.View)`
    width: 100%;
    height: 100%;

    background-color: ${props => {
        if(props.color)
            return props.color
        else 
            return '#0FF'
    }};

    justify-content: center;
    align-items: center;
`

export const ButtonContainer = styled.TouchableOpacity`
    width: ${width - (width * .87)}px;
    height: ${width - (width * .87)}px;

    border-radius: 50px;

    overflow: hidden;
    
    justify-content: center;
    align-items: center;
`