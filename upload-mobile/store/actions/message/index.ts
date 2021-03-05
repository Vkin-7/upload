import { MESSAGE_UPDATE, MESSAGE_RESET } from '..'

export function messageUpdate(context: string, text: string, visible: boolean, action: () => void) {
    return ({
        type: MESSAGE_UPDATE,
        payload: { context, text, visible, action },
    })
}

export function messageReset() {
    return ({
        type: MESSAGE_RESET,
    })
}