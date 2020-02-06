const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const { Client, Server } = require('node-osc');

const port = 3000;

app.use('/public', express.static(__dirname + '/public'));
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/index.html');
})

var oscIN = new Server(12000, '127.0.0.1');
const clientWek = new Client('127.0.0.1', 6448);
oscIN.on('message', function (msg) {
        
    console.log(msg[0])
    io.emit(msg[0], {x : msg[1], y : msg[2], r : msg[3], g : msg[4], b : msg[5], rad : msg[6]});
    // io.emit("save");
    // oscIn.close();
  });


  io.on('connection', socket =>{
  
    socket.on('massive' , (pix) => {
    clientWek.send('/wek/inputs',  pix.pix['10']/255 ,pix.pix['10']/255 ,pix.pix['10']/255 ,pix.pix['10']/255 ,pix.pix['10']/255 );
    // clientProc.send('/running');
    console.log(pix.pix['10']/255)
});
})

http.listen(port, () => console.log(`Your app is now running! Head to url localhost:${port}`))
