import {combineReducers} from 'redux';
import likes from './likesReducer';
import movies from './movieReducer';

const rootReducer = combineReducers({
    likes,
    movies
})

export default rootReducer;