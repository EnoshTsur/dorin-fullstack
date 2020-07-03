import { userFormActions, } from './actions'
import { withCustomer, } from '../utils/transformUtil'
import { ICustomer } from '../model/user'

export interface UserFormDispatch {
    type: string,
    payload: string
}

export default function userFormReducer(user: ICustomer, { type, payload, }: any) {
    const { SET_FIRST_NAME, SET_LAST_NAME, SET_USERNAME, SET_PASSWORD } = userFormActions
    const withUser = withCustomer(user)

    switch (type) {
        case SET_FIRST_NAME:
            return withUser('firstName')(payload)
        case SET_LAST_NAME:
            return withUser('lastName')(payload)
        case SET_PASSWORD:
            return withUser('password')(payload)
        case SET_USERNAME:
            return withUser('username')(payload)
        default:
            return ({ ...user, })
    }
}