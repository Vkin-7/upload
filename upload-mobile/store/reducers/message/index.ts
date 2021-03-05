import { MESSAGE_UPDATE, MESSAGE_RESET } from '../../actions'

const initialState = {
    text: '',
    visible: false,
    context: ''
}


function Reducer(state = initialState, action: { type: string, payload: object}) {
    switch(action.type){
        case MESSAGE_UPDATE:
            return { ...state, ...action.payload }
        case MESSAGE_RESET:
            return initialState
        default: 
            return state
    }
}

export default Reducer