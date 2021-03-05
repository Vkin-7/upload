import { combineReducers } from 'redux'
import UploadedFilesReducer from './uploaded_files'
import SeletedFilesReducer from './selected_files'
import MessageReducer from './message'
import LoadReducer from './load'

export default combineReducers({
    uploadedFiles: UploadedFilesReducer,
    selectedFiles: SeletedFilesReducer,
    message: MessageReducer,
    load: LoadReducer,
})