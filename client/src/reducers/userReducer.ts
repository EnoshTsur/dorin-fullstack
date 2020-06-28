import { userActions, } from './actions'
import { ICustomer, IAdmin,} from '../model/user'
import Dispatch from './dispatchType'



interface Payload {
    accessToken? : string | null,
    user?: ICustomer | IAdmin | null
}


export default function userReducer(state: any, action: Dispatch) {
    const { type, payload,} = action
    const { accessToken, user, }: Payload = payload
    const { USER_LOGIN, ADMIN_LOGIN, } = userActions

    switch (type) {
        case USER_LOGIN:
            return { accessToken, user }

        case ADMIN_LOGIN:
            return { accessToken, user }
        default:
            return { ...state }
    }
}