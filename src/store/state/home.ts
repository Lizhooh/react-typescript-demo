import { A, D } from '../types';

export interface State {
    name: string,
}

const actionType = 'HOME';
const INIT_STATE: State = {
    name: 'home',
}

export default (state: State, action: A<State>): any => {
    if (action.type === actionType && action.newState) {
        return action.newState(state, INIT_STATE) || state;
    }
    return state || INIT_STATE;
}

// action
export const updateName = name => async (dispatch: D<State>, getState) => {
    dispatch({
        type: actionType,
        newState: state => ({ ...state, name: state.name })
    });
}
