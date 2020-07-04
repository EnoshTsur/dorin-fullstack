import React from 'react'
import SignContainer from './components/Sign/SignContainer/SignContainer'
import UserContext from './context/UserContext'
import { tokenStorage, } from './dataSources/localStorage'
import userReducer from './reducers/userReducer'



const App: React.FC = () => {

    const [accessToken, setAccessToken,] = React.useState(null)

    React.useEffect(() => {

        if(tokenStorage.getItem() != null) {
            setAccessToken(tokenStorage.getItem())
        }

    }, [])

    const { Provider, } = UserContext;


    return (
        <Provider value={({ accessToken, setAccessToken, })}>
            <SignContainer />
        </Provider>
    );
}


export default App
