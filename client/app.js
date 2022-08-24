const socket = io ('ws://localhost:3000')
document.addEventListener("DOMContentLoaded", () => {  

    function postMessage(text) {
        const liElement = document.createElement('li');
        liElement.innerHTML = text
        document.querySelector('.conversation').appendChild(liElement)
    }
    
    socket.on('messageFromServer', (text)=>{
        postMessage(text);
    })
    
    document.querySelector('button').onclick = () => {
        const text = document.querySelector('.message').value;
        if(!text==""){
            socket.emit('messageFromClient', text);
            postMessage(text);
        }
    };
   });



