var operation = function (num1, num2, op) {
    return new Promise(function (resolve, reject) {
        Promise.resolve().then(function () { return require('./operations.js'); }).then(function (module) {
            op === 'add' ? resolve(module.add(num1, num2)) : resolve(module.subtract(num1, num2));
        })["catch"](function (err) {
            console.log(err, 'Hubo un error');
        });
    });
};
var operations = function () {
    operation(10, 5, 'add')
        .then(function (result) {
        console.log(result);
    });
    operation(10, 5, 'subtract')
        .then(function (result) {
        console.log(result);
    });
};
operations();
