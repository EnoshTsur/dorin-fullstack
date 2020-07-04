function isNullIn(...args) {
    return args
        .filter(arg => arg == null)
        .length > 0;

}

function Response(success, message, content) {
    this.success = success
    this.message = message
    this.content = content
}

function isEqualsValues(...first) {
    return (...second) => first
        .filter((e, i) => e === second[i])
        .length === second.length
}

module.exports = {

    isNullIn,
    isEqualsValues,
    Response,

}
