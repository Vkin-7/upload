import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import api from '../../../services/api'
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'
import { Dimensions } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import { RadioButton, DarkTheme } from 'react-native-paper'
import * as Permissions from 'expo-permissions';

import {
    Container,
    ItemContainer,
    ItemText,
    ItemInfo,
    ItemImageContainer,
    ItemImage,
    ItemDeleteButton,
    ItemDeleteText,
    UploadedContainer,
    SelectedContainer,
    DownloadContainer,
    AnimatedContainer
} from '../../styles/file_list'

import { UploadedFileProps, FileListProps } from './types'
import { useSelector, useDispatch } from 'react-redux'
import { uploadedFilesUpdate } from '../../../store/actions/uploaded_files'
import { selectedFilesUpdate } from '../../../store/actions/selected_files'

const FileList = (props: FileListProps) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.uploadedFiles)
    const selectedFiles = useSelector(state => state.selectedFiles)

    const [widthAnim] = useState(new Animated.Value(0))
    const [deleteAnim] = useState(new Animated.Value(0))
    const width = Dimensions.get('window').width

    const getCameraRollPermission = async () => {
        const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (permission.status !== 'granted') {
            const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (newPermission.status === 'granted') return
        }
    }

    useEffect(() => {
        getCameraRollPermission()
        AnimRightButtons()
        setTimeout(() => {
            deleteTextAnim()
        }, 1000)
    }, []);

    function AnimRightButtons() {
        const finalWidth = width - (width * .8)
        Animated.timing(widthAnim, {
            toValue: finalWidth,
            duration: 2500,
            easing: Easing.inOut(Easing.ease)
        }).start()
    }

    function deleteTextAnim() {
        Animated.timing(deleteAnim, {
            toValue: 1,
            duration: 2500,
            easing: Easing.inOut(Easing.ease)
        }).start()
    }

    async function HandleDelete(id: string) {
        try {
            const response = await api.delete(`posts/${id}`)

            const newFiles = data.filter(file => file.id !== id)

            dispatch(uploadedFilesUpdate(newFiles))

        } catch (err) {

        }
    }

    function handleSelect(id: string) {
        const newFiles = data.map(file => file.id === id
            ? { ...file, selected: !file.selected } : file)

        const newSelectedFiles = newFiles.filter(file => file.selected && file)

        dispatch(uploadedFilesUpdate(newFiles))
        dispatch(selectedFilesUpdate(newSelectedFiles))
    }

    async function handleDownload(id: string) {

        try {
            const response = await api.get(`post?id=${id}`)

            const fileDownloaded = await FileSystem.downloadAsync(
                response.data.url,
                FileSystem.documentDirectory + response.data.name
            )
            await MediaLibrary.saveToLibraryAsync(fileDownloaded.uri)

            alert('Download concluido')

        } catch (err) {
            console.log(err)
        }
    }

    const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
    const CARD_PADDING = screenWidth - (screenWidth * .9)
    const CARD_WIDTH = screenWidth - (CARD_PADDING * 2)


    const Item = ({ file }: { file: UploadedFileProps }) => {

        return (
            <ItemContainer>
                <ItemImageContainer>
                    <ItemImage
                        source={{ uri: file.preview }}
                    />
                    {!!file.url && (
                        <AnimatedContainer
                            style={{
                                width: widthAnim,
                                top: 20
                            }}
                        >
                            <ItemDeleteButton onPress={() => HandleDelete(file.id)}>
                                <ItemDeleteText style={{ opacity: deleteAnim }}>Delete</ItemDeleteText>
                            </ItemDeleteButton>
                        </AnimatedContainer>
                    )}

                    <UploadedContainer>
                        {file.uploaded && (
                            <MaterialIcons name='check-circle' size={24} color='#78E5D5' />
                        )}
                        {file.error && (
                            <MaterialIcons name='error' size={24} color='#E57878' />
                        )}
                    </UploadedContainer>

                    {file.uploaded && (
                        <>
                            <SelectedContainer>
                                <RadioButton
                                    value="first"
                                    status={file.selected ? 'checked' : 'unchecked'}
                                    onPress={() => handleSelect(file.id)}
                                    color='#FFF'
                                    theme={DarkTheme}
                                />
                            </SelectedContainer>

                            <AnimatedContainer
                                style={{
                                    width: widthAnim,
                                    bottom: 20
                                }}
                            >
                                <DownloadContainer onPress={() => handleDownload(file.id)}>
                                    <MaterialIcons name='get-app' size={24} color='#27455c' />
                                </DownloadContainer>
                            </AnimatedContainer>
                        </>
                    )}
                    <ItemInfo>
                        <ItemText>{file.name}</ItemText>
                        <ItemText>{file.readableSize}</ItemText>
                    </ItemInfo>
                </ItemImageContainer>
            </ItemContainer>
        )
    };

    const renderItem = ({ item }: { item: UploadedFileProps }) => (
        <Item
            file={item}
        />
    )

    return (
        <Container
            data={data}
            //@ts-ignore
            renderItem={renderItem}
            //@ts-ignore
            keyExtractor={(item) => item.id}
            snapToAlignment='end'
            decelerationRate='fast'
            snapToInterval={CARD_WIDTH}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: CARD_WIDTH / 8 }}
        />
    )
}

export default FileList