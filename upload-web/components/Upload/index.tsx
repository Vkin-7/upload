import DropZone from 'react-dropzone' 
import { DropContainer, UploadMessage } from '../../styles/upload'

import { uniqueId } from 'lodash'
import filesize from 'filesize'
import api from '../../services/api'

import { useSelector, useDispatch } from 'react-redux'
import { uploadedFilesUpdate } from '../../store/actions/uploaded_files'
import { loadUpdate, loadReset } from '../../store/actions/load'

import { UploadedFileProps } from './types'

export default function Uploads() {
    const uploadedFiles = useSelector(state => state.uploadedFiles)
    const dispatch = useDispatch()

    const renderDragMessage = (isDragActive, isDragReject) => {
        if(!isDragActive)
            return <UploadMessage>Drag files here...</UploadMessage>
        else if(isDragReject)
            return <UploadMessage type='error'>File don't supported</UploadMessage>

        return <UploadMessage type='success'>Drop the files here</UploadMessage>
        
    }

    async function onUpload(files: File[]) {
        const newFile = files.map(file => ({
          file,
          id: uniqueId(),
          name: file.name,
          readableSize: filesize(file.size),
          preview: URL.createObjectURL(file),
          uploaded: false,
          progress: 0,
          error: false,
          url: null,
          visible: true,
          selected: false
        }))
    
        const newUploadedFiles = uploadedFiles.concat(newFile)

        dispatch(uploadedFilesUpdate(newUploadedFiles))
    
        processUpload(newUploadedFiles)
    
      }

      async function processUpload(uploadedFile: UploadedFileProps[]) {

        let aux = uploadedFiles
    
        uploadedFile.map(async (file) => {
          if (!file.uploaded) {
            const data = new FormData()
    
            data.append('file', file.file, file.name)
    
            try {
              const response = await api.post('posts', data, {
                onUploadProgress: e => {
                  const progress = Math.round((e.loaded * 100) / e.total)
    
                  if (progress < 100) {
                    dispatch(loadUpdate({
                      load: true,
                      progress,
                    }))
                  } else {
                    dispatch(loadReset())
                  }
    
                }
              })
    
              const newFiles = [...aux,
              {
                ...file, uploaded: true,
                id: response.data._id,
                url: response.data.url
              }]
    
              aux = newFiles
              dispatch(uploadedFilesUpdate(aux))
    
            } catch (err) {
              const newFiles = [...aux,
              {
                ...file, error: true,
              }]
    
              aux = newFiles
              dispatch(uploadedFilesUpdate(aux))
            }
    
          }
    
        })
    
      }

    return (
        <DropZone accept='image/*' onDropAccepted={onUpload}>
            { ({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <DropContainer
                    {...getRootProps()}
                    isDragActive={isDragActive}
                    isDragReject={isDragReject}
                >
                    <input {...getInputProps()} />
                    {renderDragMessage(isDragActive, isDragReject)}
                </DropContainer>
            ) }
        </DropZone>
    )
}