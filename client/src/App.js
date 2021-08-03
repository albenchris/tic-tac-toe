import { io } from 'socket.io-client';
import NameForm from './components/NameForm';
import Game from './components/Game';

const App = () => {
    return (
        <div>
            <NameForm />
            {/* <Game /> */}
        </div>
    );
};

export default App;