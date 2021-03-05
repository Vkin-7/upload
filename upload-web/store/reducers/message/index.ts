import { HYDRATE } from 'next-redux-wrapper'
import { MESSAGE_UPDATE, MESSAGE_RESET } from '../../actions'

const initialState = {
    text: '',
    visible: false,
    context: ''
}


function Reducer(state = initialState, action) {
    switch(action.type){
        case HYDRATE:
            return { ...state, ...action.payload.message }
        case MESSAGE_UPDATE:
            return { ...state, ...action.payload }
        case MESSAGE_RESET:
            return initialState
        default: 
            return state
    }
}

export default Reducer