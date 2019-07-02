
import {call,all,fork} from 'redux-saga/effects';
import {watchFetchFood,watchAddNewFood,watchUpdateFood,watchDeleteFood} from './sagaAction';

export default function* rootSaga(){
    yield all([
        watchFetchFood(),
        watchAddNewFood(),
        watchUpdateFood(),
        watchDeleteFood(),
    ])
        //fork(watchAddNewFood),
    
    // all([
    //         watchFetchFood,
    //         watchAddNewFood,
    //     ])

        

}