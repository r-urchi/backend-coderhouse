const endText = () => {
    console.log('Fin del texto');
}

const complete = () => {
    console.log('Proceso completo');
}

const showText = (text, endText, time = 1000) => {

    text = text.split(' ');
    let counter = 0;

    return new Promise((resolve, reject) => {
        
        const interval = setInterval(() => {
            if(counter < text.length){
                console.log(text[counter]);
                counter++;
            } else {
                clearInterval(interval);
                endText();
                resolve();
            }
        }, time);
    });
};

const time = 500;

showText('Nombre: Ramón', endText, time)
.then(() => showText('Apellido: Urchipia', endText, time))
.then(() => showText('Edad: 34', endText, time))
.then(() => complete())