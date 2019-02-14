import { IAction, IType } from '../types';

export interface IState {
    name: string,
};

const actionType = 'USER';
const initState: IState = {
    name: 'user',
};

export default (state: IState, action: IAction<IState>): IState => {
    if (action.type === actionType && action.newState) {
        return action.newState(state, initState) || state;
    }
    return state || initState;
}

// action
export const updateName = (name: string) => async (dispatch: IType<IState>) => {
    dispatch({
        type: actionType,
        newState: state => ({ ...state, name: state.name })
    });
}
