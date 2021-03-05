import { MESSAGE_UPDATE, MESSAGE_RESET } from '../'

export function messageUpdate(visible) {
    return ({
        type: MESSAGE_UPDATE,
        payload: visible,
    })
}

export function messageReset() {
    return ({
        type: MESSAGE_RESET,
    })
}