import {
  createReducer,
  nanoid,
} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import {
  addTask,
  editTask,
  removeTask,
} from '../actions/data';
import {
  taskGroups,
} from '../../mocks';

const initialState = {
  taskGroups: JSON.parse(localStorage.getItem('tasks')) || taskGroups,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(editTask, (state, action) => {
    const {
      task,
      currentTaskGroupID,
    } = action.payload;

    const taskGroupIndex = state.taskGroups.findIndex((item) => item.id === currentTaskGroupID);
    const taskIndex = state.taskGroups[taskGroupIndex].taskList.findIndex((item) => item.id === task.id);

    state.taskGroups = [
      ...state.taskGroups.slice(0, taskGroupIndex),
      {
        ...state.taskGroups[taskGroupIndex],
        taskList: [
          ...state.taskGroups[taskGroupIndex].taskList.slice(0, taskIndex),
          task,
          ...state.taskGroups[taskGroupIndex].taskList.slice(taskIndex + 1),
        ],
      },
      ...state.taskGroups.slice(taskGroupIndex + 1),
    ];

    localStorage.setItem('tasks', JSON.stringify(state.taskGroups));
  });

  builder.addCase(removeTask, (state, action) => {
    const {
      id,
      currentTaskGroupID,
    } = action.payload;

    const taskGroupIndex = state.taskGroups.findIndex((item) => item.id === currentTaskGroupID);
    const taskIndex = state.taskGroups[taskGroupIndex].taskList.findIndex((item) => item.id === id);

    state.taskGroups = [
      ...state.taskGroups.slice(0, taskGroupIndex),
      {
        ...state.taskGroups[taskGroupIndex],
        taskList: [
          ...state.taskGroups[taskGroupIndex].taskList.slice(0, taskIndex),
          ...state.taskGroups[taskGroupIndex].taskList.slice(taskIndex + 1),
        ],
      },
      ...state.taskGroups.slice(taskGroupIndex + 1),
    ];

    localStorage.setItem('tasks', JSON.stringify(state.taskGroups));
  });

  builder.addCase(addTask, (state, action) => {
    const {
      task,
      currentTaskGroupID,
    } = action.payload;

    const newTask = {
      ...task,
      id: nanoid(),
      creationDate: dayjs().toISOString(),
      isComplete: false,
    };

    const taskGroupIndex = state.taskGroups.findIndex((item) => item.id === currentTaskGroupID);

    state.taskGroups = [
      ...state.taskGroups.slice(0, taskGroupIndex),
      {
        ...state.taskGroups[taskGroupIndex],
        taskList: [
          ...state.taskGroups[taskGroupIndex].taskList,
          newTask,
        ],
      },
      ...state.taskGroups.slice(taskGroupIndex + 1),
    ];

    localStorage.setItem('tasks', JSON.stringify(state.taskGroups));
  });
});
