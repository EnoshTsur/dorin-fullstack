import { createStore, combineReducers, } from 'redux'
import { reducer as userReducer } from './userReducer'

const reducers = combineReducers({ userReducer, })

export const store = createStore(reducers)
