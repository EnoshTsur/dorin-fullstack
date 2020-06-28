

function isInvalidAttributes<T>(badArg: T): (...args: Array<T>) => boolean {
    return(...args) => args.includes(badArg)
}

function isNullIn(...args: Array<any>) {
    return args.includes(null)
}

function isAllMatch<T>(value: T): (...args: Array<any>) => boolean {
    return (...args) => {
        console.log('!!! ', args.filter(arg => arg == value).length  === args.length)
        return args.filter(arg => arg == value).length  === args.length
    }
}

const isEmptyStringIn = isInvalidAttributes('')


export { isEmptyStringIn, isNullIn, isAllMatch,  }
