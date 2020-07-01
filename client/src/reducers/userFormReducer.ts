import { userFormActions, } from './actions'
import { withCustomer, } from '../utils/transformUtil'
import { ICustomer } from '../model/user'

export default function userFormReducer(user: ICustomer, { type, payload, }: any) {
    const { FIRST_NAME, LAST_NAME, USERNAME, PASSWORD } = userFormActions
    const withUser = withCustomer(user)

    switch (type) {
        case FIRST_NAME:
            return withUser('firstName')(payload)
        case LAST_NAME:
            return withUser('lastName')(payload)
        case PASSWORD:
            return withUser('password')(payload)
        case USERNAME:
            return withUser('username')(payload)
        default:
            return ({ ...user, })
    }
}