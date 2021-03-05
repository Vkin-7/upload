import { LOAD_UPDATE, LOAD_RESET } from '../'

export function loadUpdate(load) {
    return ({
        type: LOAD_UPDATE,
        payload: load,
    })
}

export function loadReset() {
    return ({
        type: LOAD_RESET,
    })
}