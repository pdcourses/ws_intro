//WebSocket нужно написать и на сервере и на клиенте
// WebSocket - протокол !!

const express = require('express');
const app = express();
const expressWs = require('express-ws')(app);

app.use(express.json());

app.ws('/', function (ws, req) {
  // метод on слушает сообщенние
  ws.on('message', function (msg) {
    console.log(msg);
  });
  console.log('socket', req.testing);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
