exports.getSuffixName = function (doc) {
    console.log(!!doc.split('.')[1])
    if (typeof doc !== "string" || !doc.split('.')[1]) {
        throw new Error(`${doc} must be a suffix containing the dot`)
    }
    return doc.split('.')[1];
}