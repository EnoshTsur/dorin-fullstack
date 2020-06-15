import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { isEmptyStringIn, } from '../../utils/validation'
import { rest, } from '../../fetch-api/index'
import { USER_REGISTER, USER_LOGIN, } from '../../configuration/urls'
import classes from './Sign.module.css'
import { ICustomer, IAdmin, } from '../../model/user'
const { FormContainer, InputContainer, } = classes

const { post: login } = rest(USER_LOGIN)

interface Props {
    setUser: (user: ICustomer | IAdmin) => void,
    setAccessToken: (accessToken: string) => void
}

const SignIn: React.FC<Props> = ({ setUser, setAccessToken,  }) => {

    const [ username, setUsername, ] = React.useState('')
    const [ password, setPassword, ] = React.useState('')

    function signIn(): void {
        login({ username, password, })
        .then(r => console.log(r))
        .catch(error => console.log(error))
    }

    return (
        <div className={FormContainer}>
            <div className={InputContainer}>
                <Input
                    handleChange={value => setUsername(value)}
                    placeholder="Username"
                 />
                <Input
                    handleChange={value => setPassword(value)}
                    placeholder="Password"
                    type="password"
                 />
            </div>
           <Button
               isDisabled={isEmptyStringIn(
                    username,
                    password
               )}
               type="success"
               title="Login"
               onClick={() => signIn()}
           /> 
        </div>
    )
}


export default SignIn
