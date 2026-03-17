import createStore from './createStore.js';
import combineReducers from './combineReducers.js';
import taskReducer from './reducers/taskReducer.js';

let rootReducer = combineReducers({
  taskState: taskReducer
});

let store = createStore(rootReducer);

export default store;
