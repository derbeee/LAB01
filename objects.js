const object = {
    firstName : "Oleksandr",
    lastName : "Derbenov",
    introduce : function() {
    return ('Hello, Im ' + object.firstName + ' ' + object.lastName + '!');
}
}
module.exports = object;
