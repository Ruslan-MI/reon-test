import {
  createReducer,
} from '@reduxjs/toolkit';

import {
  editTask,
  removeTask,
} from '../actions/data';
import {
  taskGroups,
} from '../../mocks';

const initialState = {
  taskGroups,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(editTask, (state, action) => {
    const {
      id,
    } = action.payload;

    let taskGroupIndex;
    let taskIndex;

    state.taskGroups.forEach((taskGroup, i) => {
      const index = taskGroup.taskList.findIndex((task) => task.id === id);

      if (index >= 0) {
        taskIndex = index;
        taskGroupIndex = i;
      }
    });

    state.taskGroups = [
      ...state.taskGroups.slice(0, taskGroupIndex),
      {
        ...state.taskGroups[taskGroupIndex],
        taskList: [
          ...state.taskGroups[taskGroupIndex].taskList.slice(0, taskIndex),
          action.payload,
          ...state.taskGroups[taskGroupIndex].taskList.slice(taskIndex + 1),
        ],
      },
      ...state.taskGroups.slice(taskGroupIndex + 1),
    ];
  });

  builder.addCase(removeTask, (state, action) => {
    const id = action.payload;

    let taskGroupIndex;
    let taskIndex;

    state.taskGroups.forEach((taskGroup, i) => {
      const index = taskGroup.taskList.findIndex((task) => task.id === id);

      if (index >= 0) {
        taskIndex = index;
        taskGroupIndex = i;
      }
    });

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
  });
});
