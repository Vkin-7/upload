import { SELECTED_FILES_UPDATE, SELECTED_FILES_RESET } from '../'

export function selectedFilesUpdate(files) {
    return ({
        type: SELECTED_FILES_UPDATE,
        payload: files,
    })
}

export function selectedFilesReset() {
    return ({
        type: SELECTED_FILES_RESET,
    })
}