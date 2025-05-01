

exports.getResult = () => {
    const ret = {
        code: 200,
        message: "success"
    }
    return ret;
}
exports.getDataResult = (it) => {
    const ret = {
        code: 200,
        message: "success",
        data: it
    }
    return ret;
}
exports.getFailResult = (err) => {
    const ret = {
        code: -100,
        message: err.message
    }
}