import React from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import UserContext from './context/UserContext'

const App: React.FC = () => {

    const [ user, setUser, ] = React.useState({})
    const [ accessToken, setAccessToken, ] = React.useState('')

    const { Provider, } = UserContext;

        return (
            <div>
                <Provider value={({ 
                    
                     user, 
                     setUser, 
                     accessToken, 
                     setAccessToken

                   })}>
                    <LoginPopup />
                </Provider>    
            </div>
        );
}


export default App
