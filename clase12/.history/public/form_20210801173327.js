const titleFrom = document.querySelector('#name')
const priceForm = document.querySelector('#price')
const thumbnailForm = document.querySelector('#thumbnail')
const enviar = document.querySelector('#enviar')

enviar.addEventListener('click', () => {

    const datos = {
        title: titleFrom.value,
        price: priceForm.value,
        thumbnail: thumbnailForm.value
    }
    // console.log(JSON.stringify(datos))
    return JSON.stringify(datos)
})