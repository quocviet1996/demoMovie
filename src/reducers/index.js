import { combineReducers } from 'redux';
import movieReducers from './movieReducers';

const allReducers = combineReducers({
    movieReducers,
    //you can add more reducers here, separated by , !
});
export default allReducers;