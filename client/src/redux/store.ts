import { createStore, combineReducers, } from 'redux'
import { reducer as userReducer } from './userReducer'
import { composeWithDevTools, } from 'redux-devtools-extension' 

const reducers = combineReducers({ userReducer, })


export const store = createStore(
    reducers,
    /* preloadedState, */
    composeWithDevTools()
)
