/*import openSocket from 'socket.io-client';
const socket = openSocket();

socket.on('connect', () => {
    console.debug('Successfully connected to socket!');
    document.cookie = "socketId=" + socket.id;
    socket.on('test', (msg) => {
        console.log('hello');
    })
});

const sendUserToken = () => {
    socket.emit('setToken', getCookie('access-token'));
}

const sendNewMessage = (name, payload) => {
    socket.emit(name, payload);
}

const sub = (name, callback) => {
    socket.on(name, callback);
}

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
}

export default { sendUserToken, sendNewMessage, sub }*/