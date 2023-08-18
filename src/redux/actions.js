export const addTask = {
  type: 'tasks/addTask',
  payload: {
    id: 'Generated id',
    text: 'User entered text',
    completed: false,
  },
};

export const deleteTask = {
  type: 'tasks/deleteTask',
  payload: 'Task id',
};

export const toggleCompleted = {
  type: 'tasks/toggleCompleted',
  payload: 'Task id',
};

export const setStatusFilter = {
  type: 'filters/setStatusFilter',
  payload: 'Filter value',
};
