const socket = io.connect();

socket.emit('askData', messages);

const addMessage = (e) => {
    console.log('LLAMANDO A ADD MESSAGE');
    let info = {
      title: document.querySelector('#title').value,
      price: document.querySelector('#price').value,
      thumbnail: document.querySelector('#thumbnail').value,
    };
  
    socket.emit('new-message', info);
    return false;
  }
  
const render = (data) => {
    var html = data
      .map(function (elem, index) {
        //   console.log(elem)
        return `
          <tr class="tr">
            <th class="tr__th">${elem.message.title}</th>
            <td class="tr__td">${elem.message.price}</td>
            <td class="tr__td">${elem.message.thumbnail}</td>
          </tr>
          `;
      })
      .join(' ');
  
    document.querySelector('#messages').innerHTML = html;
  }
  
  socket.on('messages', data=> {
    console.log('RECIBI MENSAJE');
    render(data);
  });