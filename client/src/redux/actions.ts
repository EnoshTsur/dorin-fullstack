import { AppEvents, } from './events'
import { ICustomer, IAdmin, } from '../model/user'

const makeAction = <T extends AppEvents, P>(type: T) => (payload: P) => {
    return {
        type,
        payload
    }
}


export interface IAction {
    type: AppEvents,
    payload: any,
}

export const SetUser = makeAction<AppEvents.SET_USER, ICustomer | IAdmin>
    (AppEvents.SET_USER) 

export const SetAccessToken = makeAction<AppEvents.SET_ACCESS_TOKEN, string>
    (AppEvents.SET_ACCESS_TOKEN)

