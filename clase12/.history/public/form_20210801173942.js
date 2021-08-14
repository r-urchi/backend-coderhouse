const titleFrom = document.querySelector('#name');
const priceForm = document.querySelector('#price')
const thumbnailForm = document.querySelector('#thumbnail')
const sendData = document.querySelector('#enviar')

sendData.addEventListener('click', () => {

    const data = {
        title: titleFrom.value,
        price: priceForm.value,
        thumbnail: thumbnailForm.value
    }
    // console.log(data)
    return JSON.stringify(data)
})