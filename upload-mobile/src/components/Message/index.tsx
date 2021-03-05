import React, { useState } from 'react'
import { MessageContainer } from '../../styles/message'

import { useSelector, useDispatch } from 'react-redux'
import { messageReset } from '../../../store/actions/message'

export default function Message() {
    const [positiveColor, setPositiveColor] = useState('#78E5D5')
    const [negativeColor, setNegativeColor] = useState('#E57878')

    const dispatch = useDispatch()
    const message = useSelector(state => state.message)

    return (
        <MessageContainer>
            <MessageContainer.MessageContent>

                <MessageContainer.MessageTop>
                    <MessageContainer.MessageTitle>
                        {message.context.toUpperCase()}
                    </MessageContainer.MessageTitle>
                </MessageContainer.MessageTop>

                <MessageContainer.MessageMiddle>
                    <MessageContainer.MessageText>
                        {message.text}
                    </MessageContainer.MessageText>
                </MessageContainer.MessageMiddle>

                <MessageContainer.MessageBottom>
                    <MessageContainer.Button
                        activeOpacity={.6}
                        underlayColor='#78E5D5'
                        onPress={() => {
                            message.action()
                            dispatch(messageReset())
                        }}
                        onPressIn={() => setPositiveColor('#FFF')}
                        onPressOut={() => setPositiveColor('#78E5D5')}
                    >
                        <MessageContainer.ButtonText textColor={positiveColor}>
                            Ok
                        </MessageContainer.ButtonText>
                    </MessageContainer.Button>

                    <MessageContainer.Button
                        activeOpacity={1}
                        underlayColor='#E57878'
                        onPress={() => dispatch(messageReset())}
                        onPressIn={() => setNegativeColor('#FFF')}
                        onPressOut={() => setNegativeColor('#E57878')}
                    >
                        <MessageContainer.ButtonText textColor={negativeColor}>
                            Cancel
                        </MessageContainer.ButtonText>
                    </MessageContainer.Button>
                </MessageContainer.MessageBottom>

            </MessageContainer.MessageContent>
        </MessageContainer>
    )
}