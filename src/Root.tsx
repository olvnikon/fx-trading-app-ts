import * as React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import App from './App';
import { IState } from './app/store/storeTypes';

interface IProps {
  readonly store: Store<IState>,
}

const Root = ({ store }: IProps) => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
