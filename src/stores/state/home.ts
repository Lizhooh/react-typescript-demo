import { IAction, IType } from '../types';

export interface IState {
    name: string,
    count: number,
};

export interface IFunc {
    add: () => any,
    updateName: (name: string) => any,
};

const actionType = 'HOME';
const initState: IState = {
    name: 'home',
    count: 0,
};

export default (state: IState, action: IAction<IState>): any => {
    if (action.type === actionType && action.newState) {
        return action.newState(state, initState) || state;
    }
    return state || initState;
}

// action
export const updateName = (name: string) => async (dispatch: IType<IState>) => {
    dispatch({
        type: actionType,
        newState: state => ({ ...state, name })
    });
}

// action
export const add = () => async (dispatch: IType<IState>) => {
    dispatch({
        type: actionType,
        newState: state => ({ ...state, count: state.count + 1 }),
    });
}

