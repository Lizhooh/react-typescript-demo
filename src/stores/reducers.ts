
const initState = {
    name: 'test',
};

export default (state = initState) => {
    return state;
};

export { default as user } from './state/user';
export { default as home } from './state/home';
export { default as about } from './state/about';


