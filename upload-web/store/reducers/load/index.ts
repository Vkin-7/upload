import { HYDRATE } from 'next-redux-wrapper'
import { LOAD_UPDATE, LOAD_RESET } from '../../actions'

const initialState = {
    load: false,
    progress: 0,
}

function Reducer(state = initialState, action) {
    switch(action.type){
        case HYDRATE:
            return { ...state, ...action.payload.load }
        case LOAD_UPDATE:
            return { ...state, ...action.payload }
        case LOAD_RESET:
            return initialState
        default:
            return state
    }
}

export default Reducer