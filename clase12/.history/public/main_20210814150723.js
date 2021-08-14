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
        return `<div>
                   <strong>${elem.message.title}</strong>:
                   <em>${elem.message.price}</em>
                   <em>${elem.message.thumbnail}</em>
          </div>
          <table class="table">
          <thead class="thead">
              <tr class="thead__tr">
                  <th class="thead__th">Producto</th>
                  <th class="thead__th">Precio</th>
                  <th class="thead__th">Imagen</th>
              </tr>
          </thead>
          <tbody>

              <% ${response.forEach(element => { %>
                  <tr class="tr">
                      <th class="tr__th"><%= element.title %></th>
                      <td class="tr__td"><%= element.price %></td>
                      <td class="tr__td"><img src="<%= element.thumbnail %>"></td>
                  </tr>
              <% })} %>
  
          </tbody>
      </table>
          
          `;
      })
      .join(' ');
  
    document.querySelector('#messages').innerHTML = html;
  }
  
  socket.on('messages', function (data) {
    console.log('RECIBI MENSAJE');
    render(data);
  });