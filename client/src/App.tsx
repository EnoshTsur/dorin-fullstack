import React from 'react'
import SignContainer from './components/Sign/SignContainer/SignContainer'
import UserContext from './context/UserContext'
import { tokenStorage, } from './dataSources/localStorage'
import { isAllMatch, } from './utils/validation'
import userReducer from './reducers/userReducer'



const App: React.FC = () => {

    const [userState, userDispatch,] = React.useReducer(
        userReducer, { accessToken: '', user: null}
    )

    const { user, } = userState

    const { Provider, } = UserContext;

    return (
        <div>
            <Provider value={({  userState, userDispatch, })}>
                {
                    isAllMatch(null)(user, tokenStorage.getItem()) && (
                        <SignContainer />
                    )
                }

            </Provider>
        </div>
    );
}


export default App
