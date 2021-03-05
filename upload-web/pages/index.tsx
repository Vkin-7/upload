import { useEffect, useState } from 'react'
import Head from 'next/head'

import api from '../services/api'
import filesize from 'filesize'

import {
  Container,
  Content,
} from '../styles'

import Message from '../components/Message'
import ControllMenu from '../components/ControllMenu'
import Upload from '../components/Upload'
import FileList from '../components/FileList'
import Progress from '../components/Progress'

import { useSelector, useDispatch } from 'react-redux'
import { uploadedFilesUpdate } from '../store/actions/uploaded_files'
import { selectedFilesUpdate } from '../store/actions/selected_files'

export default function Home() {
  const load = useSelector(state => state.load)

  const uploadedFiles = useSelector(state => state.uploadedFiles)
  const message = useSelector(state => state.message)
  const dispatch = useDispatch()

  useEffect(() => {
    loadFiles()
  }, [])

  useEffect(() => {
    const newFiles = uploadedFiles.filter(file => file.selected === true)

    dispatch(selectedFilesUpdate(newFiles))
  }, [uploadedFiles])

  async function loadFiles(){
    const { data } = await api.get('posts');

    const newFile = data.map(file => ({
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
      selected: false
    }))

    dispatch(uploadedFilesUpdate(newFile))
  }

  return (
    <Container>
      <Head>
        <title>Upload</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Content>
        <Upload />
        {!!uploadedFiles.length && (
          <FileList />
        )}
        <ControllMenu 
          refreshFiles={() => loadFiles()}
        />
      </Content>

      {load.load && (
        <Progress />
      )}

      {message.visible && (
        <Message />
      )}

    </Container>
  )
}
