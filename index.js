/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React, { Component } from 'react';
//import App from './App';
import {name as appName} from './app.json';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer/reducer';
//import allReducers from './src/reducers/index';
import Food from '././component/Food'
//import MovieContainer from './src/containers/MovieContainer';
import rootSaga from './saga/rootSaga';
//import rootSaga from './src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));

export default class App extends Component{
    render() {
        return (
            <Provider store = {store}>
                <Food/>
            </Provider>

        )
    }
}
sagaMiddleware.run(rootSaga);

AppRegistry.registerComponent(appName, () => App);
