import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { rest, } from '../../fetch-api/index'
import classes from './Sign.module.css'
import { USER_REGISTER, USER_LOGIN, } from '../../configuration/urls'
import { isEmptyStringIn, } from '../../utils/validation'
import { ICustomer, IAdmin, } from '../../model/user'

const { post: register } = rest(USER_REGISTER)
const { post: login } = rest(USER_LOGIN)

interface Props {
    setUser: (user: ICustomer | IAdmin) => void,
    setAccessToken: (accessToken: string) => void
}


const SignUp: React.FC<Props> = ({ setUser, setAccessToken, }) => {
   
    const [ firstName , setFirstName, ] = React.useState('')
    const [ lastName, setLastName, ] = React.useState('')
    const [ username, setUsername, ] = React.useState('')
    const [ password, setPassword, ] = React.useState('')

    const { FormContainer, InputContainer, } = classes

    function signup(): void {

       register({ firstName, lastName, username, password, })
        .then(({sucess, content, }) => {

                login({ username, password})
                .then(r => console.log(r))
                .catch(error => console.log(error))
         })
        .catch(error => console.log(error))
    }

    return (
        <div className={FormContainer} >
            <div className={InputContainer}>
                <Input 
                    handleChange={value => setFirstName(value)} 
                    placeholder="First Name"
                 />
                <Input
                    handleChange={value => setLastName(value)}
                    placeholder="Last Name"
                />
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
                                firstName, 
                                lastName, 
                                username, 
                                password
                )}
                type="success"
                title="Send"
                onClick={() => signup()}
            />
        </div>
    );
}


export default SignUp
