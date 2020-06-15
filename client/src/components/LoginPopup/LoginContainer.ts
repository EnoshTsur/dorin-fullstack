import LoginPopup from './LoginPopup'
import { compose, } from 'redux'
import { connect, } from 'react-redux'
import { Dispatch, } from 'react'
import { IState, } from '../../redux/userReducer'
import { IAction, SetUser, SetAccessToken, } from '../../redux/actions'
import { ICustomer, IAdmin, } from '../../model/user'

const mapStateToProps = (state: IState) => {
    return {
        user: state.user,
        accessToken: state.accessToken
    }
}


const mapDispatchToProps = (dispatch: Dispatch<IAction>)=> {
    return {
        setUser: (user: ICustomer | IAdmin) => dispatch(SetUser(user)),
        setAccessToken: (accessToken: string) => dispatch(SetAccessToken(accessToken))
    }
}

export const LoginContainer = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(LoginPopup)

