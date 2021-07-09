const operation = (num1: number, num2: number, op: string ) => {

    return new Promise((resolve, reject) => {
        import ('./operations.js')
        .then((module) => {
            op === 'add' ? resolve(module.add(num1, num2)) : resolve(module.subtract(num1, num2));
        })
        .catch((err) => {
            console.log(err, 'Hubo un error');
        })
    });
};

const operations = () => {
    operation(10, 5, 'add')
    .then((result) => {
        console.log(result);
    })

    operation(10, 5, 'subtract')
    .then((result) => {
        console.log(result);
    })
};

operations();