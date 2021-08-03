import { io } from 'socket.io-client';
import NameForm from './components/NameForm';
import Game from './components/Game';

const App = () => {
    // connect to the server
    const socket = io('http://localhost:3001');

    return (
        <div>
            <NameForm />
            {/* <Game /> */}
        </div>
    );
};

export default App;