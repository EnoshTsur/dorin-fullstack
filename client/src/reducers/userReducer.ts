import { userActions, } from './actions'
import { ICustomer, IAdmin, } from '../model/user'
import Dispatch from './dispatchType'
import { tokenStorage, } from '../dataSources/localStorage'

interface Payload {
    accessToken?: string | null,

}


export default function userReducer(state: any, action: Dispatch) {
    const { type, payload, } = action
    const { accessToken, }: Payload = payload
    const { USER_LOGIN, ADMIN_LOGIN, } = userActions

    switch (type) {
        case USER_LOGIN:
            tokenStorage.setItem(accessToken);
            return { accessToken }

        case ADMIN_LOGIN:

            tokenStorage.setItem(accessToken);
            return { accessToken }
        default:
            return { ...state }
    }
}