// const { message } = require('statuses');
// const { message } = require('statuses');


// const WebSocket = require('ws');

// const wss = new WebSocket.Server({port : 3000})

// wss.on('connection', (ws) => {
//     console.log("Client Connected");

//     ws.on('message', (message) => {
//         console.log('Received message : ', message);

//         ws.send('Server received the message : ' + message)
//     });

//     ws.on('close', ()=>{
//         console.log('Client disconnected');
//     })

// })


const express = require('express')
const http = require('http')
const ws = require('ws');
// const WebSocket = require('ws');

const app = express()
const server = http.createServer(app);

// const ws = new WebSocket('ws://localhost:3000')
// const wss = new WebSocket({server})
const wss = new ws.Server({server})


wss.on('connection', (ws)=>{
    console.log('conected');
    ws.on('messaage', (data)=>{
        console.log("data : ", data);
    })

    ws.send('somthing')
})


// ws.on('error', console.error);

// ws.on('connection', ()=>{
//     console.log("connected");
// })

// ws.on('open', () =>{
//     console.log("opened");
//     ws.send('1234567890')
// })

// ws.on('message', (data)=>{
//     console.log("Data : ", data);
// })


// wss.on('open', (ws) =>{
// // wss.on('connection', (ws) =>{
//     console.log('Client Connected');


    



//     ws.on('message', (message) =>{
//         // debugger
//         // const receivedMessage = JSON.parse(message);
//         console.log('Received message', message.toString());
//         wss.clients.forEach((client) =>{
//             if(client !== ws && client.readyState === WebSocket.OPEN ){
//                 client.send(message.toString())
//                 // client.send(message)
//             }
//         });

//     });

//     ws.on('error', console.error);
    
//     ws.on('close', () =>{
//         console.log('Client disconnected');
//     });

// });

server.listen(3000, () => {
    console.log('Server started on port 3000');
})









