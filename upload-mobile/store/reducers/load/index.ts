import { LOAD_UPDATE, LOAD_RESET } from '../../actions'

const initialState = {
    loading: false,
    progress: 0,
}

function Reducer(state = initialState, action) {
    switch(action.type){
        case LOAD_UPDATE:
            return { ...action.payload }
        case LOAD_RESET:
            return initialState
        default:
            return state
    }
}

export default Reducer