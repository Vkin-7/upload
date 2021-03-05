import {
    Container,
    ListItem,
    FileInfo,
    Preview,
    ErrorIcon,
    CheckIcon,
    SelectedIcon,
    UnselectedIcon
} from '../../styles/filelist'
import { MdLink } from 'react-icons/md'

import { UploadedFileProps } from './types'

import { useSelector, useDispatch } from 'react-redux'
import { uploadedFilesUpdate } from '../../store/actions/uploaded_files'

import api from '../../services/api'

export default function FileList() {

    const uploadedFiles = useSelector(state => state.uploadedFiles)
    const dispatch = useDispatch()

    async function handleDelete(id: string) {
        console.log(uploadedFiles)
        try {
            const response = await api.delete(`posts/${id}`)

            if (response.status === 200) {
                const newFiles = uploadedFiles.map(file => file.id === id
                    ? { ...file, visible: false } : file)

                dispatch(uploadedFilesUpdate(newFiles))

                setTimeout(() => {
                    const filesRemoved = uploadedFiles.filter(file => file.id !== id)
                    dispatch(uploadedFilesUpdate(filesRemoved))
                }, 700)
            } else
                alert(response.data.message)

        } catch (err) {
            alert(err)
        }

    }

    function handleSelect(id: string, selected) {
        const newFiles = uploadedFiles.map(file => file.id === id
            ? { ...file, selected } : file)

        dispatch(uploadedFilesUpdate(newFiles))
    }

    function handleUnableUpload(id: string) {
        alert('This file is so large')

        const newFiles = uploadedFiles.filter(file => file.id !== id)

        dispatch(uploadedFilesUpdate(newFiles))
    }


    return (
        <Container>
            {uploadedFiles.map((uploadedFile: UploadedFileProps) => (
                <ListItem key={uploadedFile.id} visible={uploadedFile.visible}>
                    <FileInfo>
                        <Preview src={uploadedFile.preview}>
                            {uploadedFile.uploaded && <CheckIcon size={24} color='#78E5D5' />}
                            {uploadedFile.error && <ErrorIcon onClick={() => handleUnableUpload(uploadedFile.id)} size={24} color='#E57878' />}
                            {!!uploadedFile.url && (
                                <span>
                                    <button onClick={() => handleDelete(uploadedFile.id)}>Delete</button>
                                </span>
                            )}
                            {uploadedFile.url && (
                                <a
                                    href={uploadedFile.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <MdLink size={24} color='#222222' />
                                </a>
                            )}

                            {(!!uploadedFile.url && uploadedFile.selected) ? (
                                <SelectedIcon
                                    size={20}
                                    color='#FFFFFF'
                                    onClick={() => handleSelect(uploadedFile.id, false)}
                                />
                            ) : (
                                    <UnselectedIcon
                                        size={20}
                                        color='#FFFFFF'
                                        onClick={() => handleSelect(uploadedFile.id, true)}
                                    />
                                )}
                        </Preview>

                        <div>
                            <strong>{uploadedFile.name}</strong>
                            <span>{uploadedFile.readableSize}</span>
                        </div>
                    </FileInfo>

                </ListItem>
            ))}
        </Container>
    )
}