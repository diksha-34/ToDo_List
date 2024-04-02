
let nextTaskId = 1; 

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: {
    id: nextTaskId++, 
    value: task
  }
});

export const deleteTask = (id) => ({
  type: 'DELETE_TASK',
  payload: {
    id
  }
});

export const editTask = (index, editedTodo) => ({
  type: 'EDIT_TASK',
  payload: {
    index,
    editedTodo
  }
});
