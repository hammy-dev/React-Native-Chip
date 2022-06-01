/* redux import */
import { createStore } from 'redux';

/* custom rootReducer component */
import rootReducer from './reducers';

const store = createStore(rootReducer);
export default store;
