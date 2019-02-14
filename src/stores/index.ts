import * as reducers from './reducers';
import Store from 'redux-store-init';
import thunk from 'redux-thunk';

export default Store({ reducers, devtool: true }, [thunk]);




