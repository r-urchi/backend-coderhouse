const socket = io.connect();

console.log(moment())
socket.emit('askComment', comments);

const sendData = (e) => {
    console.log('LLAMANDO A ADD MESSAGE');
    let info = {
      email: document.querySelector('#email').value,
      comment: document.querySelector('#comment').value,
      time: moment().format('MMMM Do YYYY, h:mm:ss a'),
    };
  
    socket.emit('new-comment', info);
    return false;
  }
  
const renderComment = data => {
    let html = data
      .map(function (elem, index) {
        //   console.log(elem)
        return `
            <p><b>${elem.comment.email} [${elem.comment.time}]:</b> ${elem.comment.comment}</p>
          `;
      })
      .join(' ');
  
    document.querySelector('#comments').innerHTML = html;
  }
  
  socket.on('comments', data => {
    console.log('RECIBI MENSAJE',data);
    renderComment(data);
  });