const app = require('express')();
const PORT = process.env.PORT || 3001;

const server = app.listen(
    PORT,
    console.log(`Server is running on port: ${PORT}`)
);

const io = require('socket.io')(server, {
    cors: {
        origin: ['http://localhost:3000']
    }
});

const { join_User, get_Current_User, user_Disconnect } = require('./dummyuser');


// const io = require('socket.io')(3001, {
//     cors: {
//         origin: ['http://localhost:3000']
//     }
// });

io.on('connection', socket => {
    console.log(socket.id);
});
