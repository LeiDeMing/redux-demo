import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from '../reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store