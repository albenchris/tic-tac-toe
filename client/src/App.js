import { io } from 'socket.io-client';
import Game from './components/Game';

const App = () => {
    return (
        <div>
            <Game />
        </div>
    );
};

export default App;