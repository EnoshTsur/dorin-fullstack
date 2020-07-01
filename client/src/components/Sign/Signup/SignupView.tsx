import React from 'react'
import Input from '../../Input/Input'
import Button from '../../Button/Button'
import { rest, } from '../../../Fetch/Fetch'
import classes from '../Sign.module.css'
import { USER_REGISTER_URL, USER_LOGIN_URL, } from '../../../configuration/urls'
import { isEmptyStringIn, } from '../../../utils/validation'
import { ICustomer, } from '../../../model/user'
import { withCustomer, } from '../../../utils/transformUtil'
import { tokenStorage } from '../../../dataSources/localStorage'
import UserContext from '../../../context/UserContext'

const { post: register } = rest(USER_REGISTER_URL)
const { post: login } = rest(USER_LOGIN_URL)

const initialState: ICustomer = {
    firstName: null,
    lastName: null,
    username: null,
    password: null
}

const SignupView: React.FC = () => {

    const [user, setUser,] = React.useState<ICustomer>(initialState)

    const { FormContainer, InputContainer, } = classes
    const { user: u, setUser: loadUser, accessToken, setAccessToken, } = React.useContext(UserContext)


    function signup(): void {

        console.log(user)
        register(user)
            .then(({ sucess, content, }) => {
                console.log('!! ', content)
                const { username, password } = user;
                login({ username, password })
                    .then(({ content, }) =>{
                        loadUser(user)
                        setAccessToken(content)
                        tokenStorage.setItem(content)
                    })
            .catch(error => console.log(error))
    })
            .catch (error => console.log(error))
        }

const withUser = withCustomer(user);
return (
    <div className={FormContainer} >
        <div className={InputContainer}>
            <Input
                handleChange={value => setUser(withUser('firstName')(value))}
                placeholder="First Name"
            />
            <Input
                handleChange={value => setUser(withUser('lastName')(value))}
                placeholder="Last Name"
            />
            <Input
                handleChange={value => setUser(withUser('username')(value))}
                placeholder="Username"
            />
            <Input
                handleChange={value => setUser(withUser('password')(value))}
                placeholder="Password"
                type="password"
            />
        </div>
        <Button
            isDisabled={isEmptyStringIn(...Object.values(user))}
            type="success"
            title="Send"
            onClick={() => signup()}
        />
        <h1>{accessToken}</h1>
        <h1>{JSON.stringify(u)}</h1>
    </div>
);
}


export default SignupView
