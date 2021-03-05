import { HYDRATE } from 'next-redux-wrapper'
import { SELECTED_FILES_UPDATE, SELECTED_FILES_RESET } from '../../actions'

const initialState = []


function Reducer(state = initialState, action) {
    switch(action.type){
        case HYDRATE:
            return { ...state, ...action.payload.files }
        case SELECTED_FILES_UPDATE:
            return [ ...action.payload ]
        case SELECTED_FILES_RESET:
            return initialState
        default: 
            return state
    }
}

export default Reducer