
const INIT_STATE = {
    name: 'text',
}

export default (state = INIT_STATE) => {
    return state;
}

export { default as user } from './state/user';
export { default as home } from './state/home';
export { default as about } from './state/about';


