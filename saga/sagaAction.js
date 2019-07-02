import {api} from './api';
import {put,takeLatest} from 'redux-saga/effects';
function* fetchFood(){
    try{
        const Food = yield api.getFoodFromApi();
        yield put({type : "FETCH_SUCCEEDED", Food})

    }
    catch(error){
        console.log(error);
    }
}
export function* watchFetchFood(){
    yield takeLatest("FETCH_FOOD",fetchFood);
}

function* addNewFood(action){
    try{
        const result = yield api.insertNewFoodFromApi(action.newFood);
        if (result === "Ok"){
            yield put ({type:'FETCH_FOOD'})
        }

    }
    catch(error){

    }
}

export function* watchAddNewFood(){
    yield takeLatest("ADD_FOOD",addNewFood)
}
function* updateFood(action){
    try{
        const result = yield api.UpdateFood(action.updateFood);
       // console.log(result);
        if (result === 'Ok'){
            yield put ({type:"UPDATE_SUCCEEDED",updateFood: action.updateFood})
        }

    }
    catch(error){

    }
    

}
export function* watchUpdateFood(){
    yield takeLatest("UPDATE_FOOD",updateFood)
}
function* deleteFood(action){
    try{
        const result = yield api.DeleteFood(action.deleteFood);
        console.log(result);
        if (result === "Ok")
        yield put({type:"DELETE_SUCCEEDED",deleteFood: action.deleteFood})


    }
    catch(error){
        
    }
}
export function* watchDeleteFood(){
    yield takeLatest("DELETE_FOOD",deleteFood)
}