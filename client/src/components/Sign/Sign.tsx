import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

const SignUp: React.FC = () => {

    const [ firstName , setFirstName, ] = React.useState('')
    const [ lastName, setLastName, ] = React.useState('')
    const [ username, setUsername, ] = React.useState('')
    const [ password, setPassword, ] = React.useState('')

    return (
        <div style={{ padding: '1rem',}}>
            <div style={{  marginBottom: '0.5rem',  }}>
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
                isDisabled
                type="warning"
                title="Send"
                onClick={() => console.log('Hi')}
            />
        </div>
    );
}


const SignIn: React.FC = () => {

    return (
        <div>
            SingIn
        </div>
    )
}


export { SignUp, SignIn,  }
