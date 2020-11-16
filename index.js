import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './App'
import { name as appName } from './app.json'
import React from 'react'
import { store } from './redux/Store'

const MyApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => MyApp)
