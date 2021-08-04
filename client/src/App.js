import { useState } from 'react';
import { io } from 'socket.io-client';
import NameForm from './components/NameForm';
import Game from './components/Game';

const App = () => {
    const [connectMessage, setConnectMessage] = useState('');

    // connect to the server
    const socket = io('http://localhost:3001');
    
    // ---------- !!! THIS BREAKS IT !!! ---------------------------------------
    // socket.on('connect', () => {
    //     setConnectMessage(`You connected with id: ${socket.id}`);
    //     console.log(`socket id: ${socket.id}`);
    // });
    // -------------------------------------------------------------------------

    return (
        <div>
            {/* <h3>{connectMessage}</h3> */}
            <NameForm />
            {/* <Game /> */}
        </div>
    );
};

export default App;