import { applyMiddleware, createStore } from 'redux';
import { Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { IState } from './storeTypes';

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};

export default function configureStore(
  initialState: any,
): Store<IState> {
  const middlewares = [thunk];
  const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(
    rootReducer,
    initialState,
    middlewareEnhancer,
  );

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers/rootReducer', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
}
