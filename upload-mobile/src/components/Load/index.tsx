import React from 'react'
import { ActivityIndicator } from 'react-native'

import { useSelector } from 'react-redux'

import { Container, LoadText } from '../../styles/load'
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Load: React.FC  = () => {
    const load = useSelector(state => state.load)

    return (
        <Container>
            <ActivityIndicator size='large' color="#27455c" />
            <LoadText>{load.progress}%</LoadText>
        </Container>
    )
}

export default Load