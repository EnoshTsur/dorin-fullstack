import React from 'react'
import { ICustomer, IAdmin, } from './model/user'
import LoginPopup from './components/LoginPopup/LoginPopup'

interface Props {
    user: ICustomer | IAdmin,
    setUser: (user: ICustomer | IAdmin) => void,
    accessToken: string,
    setAccessToken: (accessToken: string) => void,
}

export const App: React.FC<Props> = ({ user, setUser, accessToken, setAccessToken, }) => {

    return (
    <div>
        <LoginPopup />
   </div>
  );
}

