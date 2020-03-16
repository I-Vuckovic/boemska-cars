import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './saga/rootSaga';
import { routerMiddleware } from 'connected-react-router'

import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer(history), composeWithDevTools(applyMiddleware(sagaMiddleware), applyMiddleware(routerMiddleware(history))));

sagaMiddleware.run(rootSaga);

export default store;