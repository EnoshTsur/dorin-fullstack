import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { rest, } from '../../fetch-api/index'
import classes from './Sign.module.css'
import { USER_REGISTER, USER_LOGIN, } from '../../configuration/urls'
import { isEmptyStringIn, } from '../../utils/validation'
import { useDispatch, } from 'react-redux'

const { post: register } = rest(USER_REGISTER)
const { post: login } = rest(USER_LOGIN)


const SignUp: React.FC = () => {
   
    const [ firstName , setFirstName, ] = React.useState('')
    const [ lastName, setLastName, ] = React.useState('')
    const [ username, setUsername, ] = React.useState('')
    const [ password, setPassword, ] = React.useState('')

    const { FormContainer, InputContainer, } = classes

    const dispatch = useDispatch()

    function signup(): void {
        const user = { firstName, lastName, username, password }

       register(user)
        .then(({sucess, content, }) => {
                
                dispatch({ type: 'SET_USER', payload: user })

                login({ username, password})

                .then(({ content, }) => 
                    dispatch({ 
                        type: 'SET_ACCESS_TOKEN', 
                        payload: content, 
                    }))
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
