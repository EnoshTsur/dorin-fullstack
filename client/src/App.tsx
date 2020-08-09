import React from 'react'
// import SignContainer from './components/Sign/SignContainer/SignContainer'
import UserContext from './context/UserContext'
import { tokenStorage, } from './dataSources/localStorage'
import tokenReducer from './reducers/tokenReducer'
import Header from './components/Header/Header'
import Vacation from './components/Vacation/Vacation'

const App: React.FC = () => {

    const [accessToken, setAccessToken,] = React.useReducer(tokenReducer, null)

    React.useEffect(() => {

        if (tokenStorage.getItem() != null) {
            setAccessToken(tokenStorage.getItem())
        }

    }, [])

    const { Provider, } = UserContext;

    return (
        <Provider value={({ accessToken, setAccessToken, })}>
            <Header title="Vacationary" />
            {/* <SignContainer /> */}
            <Vacation />
        </Provider>
    );
}


export default App
