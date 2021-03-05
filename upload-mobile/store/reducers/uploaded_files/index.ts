import { 
    UPLOADED_FILES_UPDATE,
    UPLOADED_FILES_RESET,
} from '../../actions'

const initialState = []

function Reducer(state = initialState, action) {
    switch(action.type){
        case UPLOADED_FILES_UPDATE:
            return [...action.payload]
        case UPLOADED_FILES_RESET:
            return initialState
        default: 
            return state
    }
}

export default Reducer