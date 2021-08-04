import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';

import Game from "./game/Game";
import NameForm from "./components/NameForm";

const socket = io.connect('/');

const App = () => {

    return (
        <div>
            <Router>
                <Switch>
                    {/* <Route exact path='/' component={Home} /> */}
                    <Route exact path='/login' component={NameForm} />
                    <Route exact path='/game' component={Game} />
                    {/* <Route component={NoMatch} /> */}
                </Switch>
            </Router>
        </div>
    );
};

export default App;