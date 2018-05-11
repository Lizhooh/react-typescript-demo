import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import './styles/app.css';
import { Provider } from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);


// registerServiceWorker();
