import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'
import { Dimensions, FlatList } from 'react-native'

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const CARD_PADDING = screenWidth - (screenWidth * .9)
const CARD_WIDTH = screenWidth - (CARD_PADDING * 2)
const CARD_HEIGHT = screenHeight - (screenHeight * .3)

const List = Animated.createAnimatedComponent(FlatList)

export const Container = styled(List)`
    width: 100%;
    height: 100%;
    flex: 1;
`

export const ItemContainer = styled.View`
    width: ${CARD_WIDTH}px;
    height: ${CARD_HEIGHT}px;

    flex: 1;
    transform: scale(.91);

    align-items: center;

    margin-top: 10%;
`

export const ItemImageContainer = styled.View`
    width: 100%;
    height: 90%;

    background-color: #000;
    border-radius: 8px;
    overflow: hidden;

`

export const ItemImage = styled.Image`
    width: 100%;
    height: 100%;

    z-index: 1;
`

export const ItemInfo = styled.View`
    width: 100%;
    height: 20%;

    position: absolute;
    bottom: 0;

    background-color: rgba(0, 0, 0, .7);

    justify-content: center;
    align-items: center;

    z-index: 2;
`

export const ItemText = styled.Text`
    color: #FFF;
`

export const AnimatedContainer = styled(Animated.View)`
    width: 30%;
    height: 10%;

    background-color: #FFFFFF;

    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;

    position: absolute;
    right: 0;

    justify-content: center;
    align-items: center;

    z-index: 3;   
`

export const ItemDeleteButton = styled.TouchableOpacity`
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
    overflow: hidden;

`

export const ItemDeleteText = styled(Animated.Text)`
    color: #E57878;
    width: 100%;
    text-align: center;

    justify-content: center;
    align-items: center;

    opacity: 0;
`

export const UploadedContainer = styled.View`
    width: 20%;
    height: 10%;

    position: absolute;
    left: 0;
    top: 20px;

    justify-content: center;
    align-items: center;

    z-index: 2;
`

export const SelectedContainer = styled.View`
    width: 20%;
    height: 10%;

    position: absolute;
    left: 0;
    bottom: 20px;

    justify-content: center;
    align-items: center;

    z-index: 3;
`

export const DownloadContainer = styled.TouchableOpacity`
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
    
`
