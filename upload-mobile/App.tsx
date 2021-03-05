import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducers'
import MainScreen from './src/pages/MainScreen'

const store = createStore(reducer)

export default function App(){
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  )
}