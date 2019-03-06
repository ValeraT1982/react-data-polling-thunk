import {combineReducers} from 'redux';
import data from './reducer';
import {reducer as toastr} from 'react-redux-toastr'

const rootReducer = combineReducers({
    data,
    toastr
});

export default rootReducer;