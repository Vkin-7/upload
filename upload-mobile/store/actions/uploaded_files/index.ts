import { 
    UPLOADED_FILES_UPDATE, 
    UPLOADED_FILES_RESET,
} from '..'

export function uploadedFilesUpdate(files: object[]) {
    return ({
        type: UPLOADED_FILES_UPDATE,
        payload: files,
    })
}

export function uploadedFilesReset() {
    return ({
        type: UPLOADED_FILES_RESET,
    })
}