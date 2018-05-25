import {combineReducers} from 'redux';
import likes from './likesReducer';

const rootReducer = combineReducers({
    likes
})

export default rootReducer;