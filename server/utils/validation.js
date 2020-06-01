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


module.exports = {

    isNullIn,
    Response,

}
