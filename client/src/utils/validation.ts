

function isInvalidAttributes<T>(badArg: T): (...args: Array<T>) => boolean {
    return(...args) => args.includes(badArg)
}

const isEmptyStringIn = isInvalidAttributes('')

export { isEmptyStringIn, }
