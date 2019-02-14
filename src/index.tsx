import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/app.css';
import { Provider } from 'react-redux';
import App from './app';
import store from './stores';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root') as HTMLElement
);

// registerServiceWorker();
// import registerServiceWorker from './registerServiceWorker';

