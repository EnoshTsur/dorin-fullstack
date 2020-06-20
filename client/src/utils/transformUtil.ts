import { ICustomer, IAdmin } from "../model/user";

export default function objectTransform<T extends { [key: string]: any }>(object: T) {
    return (key: keyof T) =>
        (value: any) => {
            return Object.keys(object).includes(key as string) ? 
            ({ ...object, [key]: value }) : object;
        }
}

export function withCustomer(user: ICustomer) {
    return objectTransform(user);
}
