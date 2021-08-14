const titleFrom = document.querySelector('#name')
const priceForm = document.querySelector('#price')
const thumbnailForm = document.querySelector('#thumbnail')
const send = document.querySelector('#enviar')

send.addEventListener('click', () => {

    const datos = {
        title: titleFrom.value,
        price: priceForm.value,
        thumbnail: thumbnailForm.value
    }
    // console.log(datos)
    return JSON.stringify(datos)
})