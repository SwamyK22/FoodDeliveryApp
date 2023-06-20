import { combineReducers } from 'redux';
import imgUrlReducer from './imageUrlReducer/imgUrlReducer';
import serverErrorReducer from './serverErrorReducer';
import userReducer from './userReducer';
import resturantReducer from './resturantsReducer';
import visibleReducer from './modalVisibleReducer';

const combineReducer = combineReducers({
    imgs:imgUrlReducer,
    serverErr: serverErrorReducer,
    user: userReducer,
    resturants: resturantReducer,
    visible: visibleReducer
});

export default combineReducer;