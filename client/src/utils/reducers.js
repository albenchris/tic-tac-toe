import { PLAYER_MOVE } from './actions';

const initialState = {
    board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_MOVE:
            return {
                ...state,
                board: [...state.board, action.move]
            };
    };

};

export default reducer;