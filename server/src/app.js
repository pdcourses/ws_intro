const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const cors = require('cors');

const app = express();

const server = http.createServer(app);
const io = socketIO(server);

const connectionWS = require('./ws');

app.use(cors());

const router = require('./router');
app.use(router);

io.on('connection', connectionWS);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
