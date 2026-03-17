let initialState = {
  tasks: []
};

function taskReducer(state, action) {
  if (state === undefined) {
    state = initialState;
  }

  if (action.type === 'ADD_TASK') {
    let newTasks = [];
    for (let i = 0; i < state.tasks.length; i++) {
      newTasks.push(state.tasks[i]);
    }
    newTasks.push(action.payload);
    return { tasks: newTasks };
  }

  if (action.type === 'DELETE_TASK') {
    let newTasks = [];
    for (let i = 0; i < state.tasks.length; i++) {
      if (state.tasks[i].id !== action.payload) {
        newTasks.push(state.tasks[i]);
      }
    }
    return { tasks: newTasks };
  }

  return state;
}

export default taskReducer;
