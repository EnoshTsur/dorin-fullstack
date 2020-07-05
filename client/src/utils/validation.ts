

function isInvalidAttributes<T>(badArg: T): (...args: Array<T>) => boolean {
    return(...args) => args.includes(badArg)
}

function isNullIn(...args: Array<any>) {
    return args.includes(null)
}


const isEmptyStringIn = isInvalidAttributes('')


export { isEmptyStringIn, isNullIn, }
