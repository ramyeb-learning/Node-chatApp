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
    socket.on('broadcast-message', (text)=>{
        postMessage(text);
    })

    socket.emit("set username", "TEST")
    
    document.querySelector('button').onclick = () => {
        const text = document.querySelector('.message').value;
        if(!text==""){
            socket.emit('messageFromClient', text);
        }
    };
   });



