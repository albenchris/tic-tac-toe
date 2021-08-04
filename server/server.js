const app = require('express')();
const PORT = process.env.PORT || 3001;
const {
    join_User,
    get_Current_User,
    user_Disconnect
} = require('./dummyuser');
// setting up the server
const server = app.listen(
    PORT,
    console.log(`Server is running on port: ${PORT}`)
);
// setting up socket with CORS options
// ============== ORIGINALLY THIS =====================
// const io = require('socket.io')(3001, {
//     cors: {
//         origin: ['http://localhost:3000']
//     }
// });
// ================ NEW VERSION ====================
const io = require('socket.io')(server, {
    cors: {
        origin: ['http://localhost:3000']
    }
});

// initializing the socket io connection
io.on('connection', socket => {
    // for a new user joining the room
    socket.on('joinRoom', ({ username, roomname }) => {
        // create user
        const p_user = join_User(socket.id, username, roomname);
        console.log(socket.id, '=id');
        socket.join(p_user.room);

        // display a welcome message to the new user
        socket.emit('message', {
            userId: p_user.id,
            username: p_user.username,
            text: `Welcome ${p_user.username}!`
        });

        // display a message to other users in room except new user
        socket.broadcast.to(p_user.room).emit('message', {
            userId: p_user.id,
            username: p_user.username,
            text: `${p_user.username} has joined the game room`
        });
    });


});
