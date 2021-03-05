import { createStore } from 'redux'
import reducers from './reducers'

export default function makeStore() {
    const store = createStore(reducers)

    return store
}