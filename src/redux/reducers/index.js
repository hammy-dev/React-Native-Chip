/* Redux import  */
import { combineReducers } from 'redux';

/* custom redux component */
import changeTheNumber from './upDown';

/* combineReducers combine all the reducers into a centerlize rootReducer */
combineReducers({
  changeTheNumber,
});

export default changeTheNumber;
