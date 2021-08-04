const c_users = [];

// joins the user to the specific chatroom
const join_User = (id, username, room) => {
    const p_user = { id, username, room };

    c_users.push(p_user);
    console.log(c_users, 'users');

    return p_user;
};

console.log('user out', c_users);

// Gets a particular user id to return the current user
const get_Current_User = id => c_users.find(p_user => p_user.id === id);

// called when the user leaves the chat and its user object deleted from array
const user_Disconnect = id => {
    const index = c_users.findIndex(p_user => p_user.id === id);

    if (index !== -1) return c_users.splice(index, 1)[0];
};

module.exports = { join_User, get_Current_User, user_Disconnect };

// code source:
// https://www.section.io/engineering-education/creating-a-real-time-chat-app-with-react-socket-io-with-e2e-encryption/
