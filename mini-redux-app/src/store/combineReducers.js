function combineReducers(reducers) {
  return function(state, action) {
    if (!state) {
      state = {};
    }
    let newState = {};
    let keys = Object.keys(reducers);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      newState[key] = reducers[key](state[key], action);
    }
    return newState;
  };
}

export default combineReducers;
