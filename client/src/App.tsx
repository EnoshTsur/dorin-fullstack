import React from 'react'
import { ICustomer, IAdmin, } from './model/user'

interface Props {
    user: ICustomer | IAdmin,
    setUser: (user: ICustomer | IAdmin) => void,
    accessToken: string,
    setAccessToken: (accessToken: string) => void,
}

export const App: React.FC<Props> = ({ user, setUser, accessToken, setAccessToken, }) => {

    return (
    <div>
   </div>
  );
}

