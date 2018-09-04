import * as React from 'react';
import * as ReactDOM from 'react-dom';
import configureStore from './app/store/configureStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('no root element');
}

const store = configureStore({});
ReactDOM.render(<Root store={store} />, rootElement);
registerServiceWorker();
