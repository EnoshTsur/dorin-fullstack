import { IAction } from './actions'
import { AppEvents, } from './events'
import { ICustomer, IAdmin, } from '../model/user'    

export interface IState {
    user?: ICustomer | IAdmin,
    accessToken?: string
}

const initState: IState = {
    user: null,
    accessToken: null,
}

export const reducer = (state: IState = initState, action: IAction): IState => {
    switch(action.type) {

        case AppEvents.SET_USER:
            return {...state, user: action.payload, }

        case AppEvents.SET_ACCESS_TOKEN:
            return {...state, accessToken: action.payload, }

        default:
            return state
    }
}
