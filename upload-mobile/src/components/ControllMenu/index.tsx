import React, { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import filesize from 'filesize'
import {
    Container,
    Content,
    ButtonContainer,
    ButtonControll,
    ButtonAnimated,
} from '../../styles/controllMenu'
import { MaterialIcons } from '@expo/vector-icons'

import api from '../../../services/api'

import { useSelector, useDispatch } from 'react-redux'
import { uploadedFilesUpdate, uploadedFilesReset } from '../../../store/actions/uploaded_files'
import { messageUpdate, messageReset } from '../../../store/actions/message'
import { selectedFilesReset } from '../../../store/actions/selected_files'

export default function ControllMenu() {
    const [fadeAnim] = useState(new Animated.Value(0))
    const [heightContentAnim] = useState(new Animated.Value(0))
    const [top] = useState(new Animated.Value(0))

    const [openMenu, setOpenMenu] = useState(false)

    const height = Dimensions.get('screen').height

    const uploadedFiles = useSelector(state => state.uploadedFiles)
    const selectedFiles = useSelector(state => state.selectedFiles)
    const dispatch = useDispatch()

    const yVal = top.interpolate({
        inputRange: [0, 1],
        outputRange: [height / 14, -(height - (height * 1.13))],
    });

    useEffect(() => {
        handleMenuAnim()
    }, [openMenu])

    function handleMenuAnim() {
        if (openMenu) {
            Animated.timing(heightContentAnim, {
                toValue: height - (height * .7),
                duration: 1500,
                easing: Easing.inOut(Easing.ease)
            }).start()

            Animated.timing(top, {
                toValue: 1,
                duration: 1500,
                easing: Easing.inOut(Easing.ease)
            }).start();

            setTimeout(() => {
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.inOut(Easing.ease)
                }).start()
            }, 1500)

        } else {
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 500,
                easing: Easing.inOut(Easing.ease)
            }).start()

            setTimeout(() => {
                Animated.timing(top, {
                    toValue: 0,
                    duration: 1500,
                    easing: Easing.inOut(Easing.ease)
                }).start();
                Animated.timing(heightContentAnim, {
                    toValue: 0,
                    duration: 1500,
                    easing: Easing.inOut(Easing.ease)
                }).start()
            }, 500)
        }
    }

    async function handleDeleteAll() {
        try {
            dispatch(messageUpdate(
                'delete',
                'Do you really want delete all files?',
                true,
                async () => {
                    if(uploadedFiles.length === 0)
                        return
                    
                    const result = await api.delete('posts/all')
                    if (result.status === 200)
                        dispatch(uploadedFilesReset())
                }))
        } catch (err) {

        }
    }

    async function handleDeleteSelected() {
        try {
            dispatch(messageUpdate(
                'delete',
                'Do you really want delete the files selected?',
                true,
                async () => {
                    const data: { listId: string[] } = { listId: selectedFiles.map(file => file.id) }

                    if(data.listId.length === 0)
                        return

                    const response = await api.delete('posts/list', { data })

                    if (response.status === 200) {
                        const newFiles = uploadedFiles.filter(file => data.listId.indexOf(file.id) !== -1 ?
                            false : file)

                        dispatch(uploadedFilesUpdate(newFiles))
                        dispatch(selectedFilesReset())
                    }

                }))
        } catch (err) {

        }
    }

    async function handleRefresh() {
        try {
            const { data } = await api.get('posts');

            const newFiles = data.map((file) => ({
                file,
                id: file._id,
                name: file.name,
                readableSize: filesize(file.size),
                preview: file.url,
                uploaded: true,
                progress: 100,
                error: false,
                url: file.url,
                visible: true,
                selected: false,
            }))

            dispatch(uploadedFilesUpdate(newFiles))
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container>
            <ButtonControll onPress={() => setOpenMenu(!openMenu)}>
                {openMenu ?
                    <MaterialIcons name='close' size={25} color='#FFFFFF' />
                    : <MaterialIcons name='sort' size={25} color='#FFFFFF' />
                }
            </ButtonControll>

            <Content style={{
                height: heightContentAnim,
                bottom: yVal,
            }}>
                <ButtonContainer onPress={handleDeleteAll}>
                    <ButtonAnimated
                        style={{ opacity: fadeAnim }}
                        color='#b82f1a'
                    >
                        <MaterialIcons
                            name='delete-forever'
                            size={25}
                            color='#FFFFFF'
                        />
                    </ButtonAnimated>
                </ButtonContainer>

                <ButtonContainer onPress={handleDeleteSelected}>
                    <ButtonAnimated
                        style={{ opacity: fadeAnim }}
                        color='#E57878'
                    >
                        <MaterialIcons name='delete-sweep' size={25} color='#FFFFFF' />
                    </ButtonAnimated>
                </ButtonContainer>

                <ButtonContainer onPress={handleRefresh}>
                    <ButtonAnimated
                        style={{ opacity: fadeAnim }}
                        color='#78E5D5'
                    >
                        <MaterialIcons name='refresh' size={25} color='#FFFFFF' />
                    </ButtonAnimated>
                </ButtonContainer>

            </Content>

        </Container>
    )
}