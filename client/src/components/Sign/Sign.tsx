import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { isEmptyStringIn, } from '../../utils/validation'
import { rest, } from '../../fetch-api/index'
import { USER_REGISTER, USER_LOGIN, } from '../../configuration/urls'
import classes from './Sign.module.css'

const { FormContainer, InputContainer, } = classes

const { post: register } = rest(USER_REGISTER)
const { post: login } = rest(USER_LOGIN)

const SignUp: React.FC = () => {

    const [ firstName , setFirstName, ] = React.useState('')
    const [ lastName, setLastName, ] = React.useState('')
    const [ username, setUsername, ] = React.useState('')
    const [ password, setPassword, ] = React.useState('')


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


const SignIn: React.FC = () => {

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


export { SignUp, SignIn,  }
