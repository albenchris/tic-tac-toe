import X from './X';
import O from './O';

const Game = () => {
    return (
        <div className='game'>
            <div className='square-grid'>
                <div className='northwest box'></div>
                <div className='north box'></div>
                <div className='northeast box'></div>

                <div className='west box'></div>
                <div className='center box'>
                    <X />
                </div>
                <div className='east box'></div>

                <div className='southwest box'></div>
                <div className='south box'></div>
                <div className='southeast box'>
                    <O />
                </div>
            </div>
        </div>
    );
};

export default Game;