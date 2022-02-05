const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();

const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: 'http://127.0.0.1:3000',
    methods: ['GET', 'POST'],
  },
});

const connectionWS = require('./ws');

app.use(express.json());
app.use(cors());

const router = require('./router');
app.use(router);

io.on('connection', connectionWS);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
