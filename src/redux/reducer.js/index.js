import { combineReducers } from 'redux';
import handleCart from './handlecart'; // Ensure the path is correct

const rootReducer = combineReducers({
  handleCart,
});

export default rootReducer;