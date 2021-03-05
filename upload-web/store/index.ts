import { createStore } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

function makeStore() {
    const store = createStore(reducers, composeWithDevTools())

    return store
}

export const storeWrapper = createWrapper(makeStore, { debug: false, })