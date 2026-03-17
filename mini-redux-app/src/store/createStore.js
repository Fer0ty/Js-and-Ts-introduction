function createStore(reducer, initialState) {
  let state = initialState;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0; i < listeners.length; i++) {
      listeners[i]();
    }
  }

  function subscribe(listener) {
    listeners.push(listener);
    return function unsubscribe() {
      let index = listeners.indexOf(listener);
      if (index >= 0) {
        listeners.splice(index, 1);
      }
    };
  }

  dispatch({ type: '@@INIT' });

  return {
    getState: getState,
    dispatch: dispatch,
    subscribe: subscribe
  };
}

export default createStore;
