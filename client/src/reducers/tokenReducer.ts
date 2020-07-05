import { tokenStorage, } from '../dataSources/localStorage'

export default function tokenReducer(token: string | null, payload: string) {
    if(!!payload) {
        tokenStorage.setItem(payload)
        return payload
    }
    return token
}