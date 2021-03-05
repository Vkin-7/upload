import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker'
import { uniqueId } from 'lodash'
import Base from '../../../utils/Base64'

import {
  Container,
  Content,
  Upload,
  UploadText,
} from '../../styles/index'

import ControllMenu from '../../components/ControllMenu'
import Message from '../../components/Message'
import FileList from '../../components/FileList'
import Load from '../../components/Load'
import ReanimatedList from '../../components/ReanimatedList'

import api from '../../../services/api'
import filesize from 'filesize'

import { UploadedFileProps } from './types'
import { useSelector, useDispatch } from 'react-redux'

import { uploadedFilesUpdate } from '../../../store/actions/uploaded_files'
import { loadUpdate, loadReset } from '../../../store/actions/load'

const MainScreen: React.FC = () => {
  const uploadedFiles = useSelector(state => state.uploadedFiles)
  const message = useSelector(state => state.message)
  const load = useSelector(state => state.load)

  const dispatch = useDispatch()

  useEffect(() => {
    LoadFiles()
  }, [])


  async function LoadFiles() {
    try {
      const { data } = await api.get('posts');

      const newFiles = data.map((file: UploadedFileProps) => ({
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

    }
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync()

    if (status !== 'granted') {
      alert('Libera as fotos aí')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      base64: true
    })

    if (result.cancelled)
      return

    const { uri: image } = result
    const size = filesize(Base.atob(result.base64).length);
    const id = uniqueId()
    const name = `IMG_${id}.jpg`
    const file = {
      name: name,
      type: 'image/jpg',
      uri: image,
    }

    const newFile = {
      file,
      id,
      name,
      readableSize: size,
      preview: image,
      uploaded: false,
      progress: 0,
      error: false,
      url: null,
      visible: true,
      selected: false,
    }

    dispatch(uploadedFilesUpdate([...uploadedFiles, newFile]))

    await UploadFile(newFile)

  }

  async function UploadFile(file) {
    let aux = uploadedFiles

    try {
      const data = new FormData()

      data.append('file', file.file, file.name)


      try {
        dispatch(loadUpdate({ loading: true, progress: 0 }))
        const response = await api.post('posts', data, {
          onUploadProgress: e => {
            const progress = Math.round((e.loaded * 100) / e.total)

            if (progress < 100) {
              dispatch(loadUpdate({ loading: true, progress }))
            } else {
              
            }
          }
        })

        dispatch(loadReset())

        const newFiles = [...aux,
        {
          ...file, uploaded: true,
          id: response.data._id,
          url: response.data.url
        }]

        aux = newFiles
        dispatch(uploadedFilesUpdate(aux))
      } catch (err) {
        console.log(err)
      }

    } catch (err) { }
  }

  return (
    <>
      <Container>
        <StatusBar style='light' backgroundColor='#27455c' translucent={false} />
        <Content>
          <Upload onPress={handleSelectImages}>
            <UploadText>Select the images to upload</UploadText>
          </Upload>

          {!!uploadedFiles.length && (
            <FileList data={uploadedFiles} />
          )}
          {/* <ReanimatedList /> */}
          <ControllMenu />
        </Content>
      </Container>
      {message.visible && (
        <Message />
      )}
      {load.loading && (
        <Load />
      )}
    </>
  );
}

export default MainScreen