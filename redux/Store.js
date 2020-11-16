import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { InfoReducer } from './info/Reducer'

export const store = createStore(InfoReducer, null)
