import {
  createReducer,
  nanoid,
} from '@reduxjs/toolkit';
import dayjs from 'dayjs';

import {
  addTask,
  editTask,
  removeTask,
  changeTaskGroupHeading,
  addTaskGroup,
  removeTaskGroup,
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
      taskGroupID,
    } = action.payload;

    const taskGroupIndex = state.taskGroups.findIndex((item) => item.id === taskGroupID);
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
      taskGroupID,
    } = action.payload;

    const taskGroupIndex = state.taskGroups.findIndex((item) => item.id === taskGroupID);
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
      taskGroupID,
    } = action.payload;

    const newTask = {
      ...task,
      id: nanoid(),
      creationDate: dayjs().toISOString(),
      isComplete: false,
    };

    const taskGroupIndex = state.taskGroups.findIndex((item) => item.id === taskGroupID);

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

  builder.addCase(changeTaskGroupHeading, (state, action) => {
    const {
      heading,
      taskGroupID,
    } = action.payload;

    const taskGroupIndex = state.taskGroups.findIndex((item) => item.id === taskGroupID);

    state.taskGroups = [
      ...state.taskGroups.slice(0, taskGroupIndex),
      {
        ...state.taskGroups[taskGroupIndex],
        heading,
      },
      ...state.taskGroups.slice(taskGroupIndex + 1),
    ];

    localStorage.setItem('tasks', JSON.stringify(state.taskGroups));
  });

  builder.addCase(addTaskGroup, (state) => {
    state.taskGroups = [
      {
        id: nanoid(),
        heading: 'Новый список задач',
        taskList: [],
      },
      ...state.taskGroups,
    ];

    localStorage.setItem('tasks', JSON.stringify(state.taskGroups));
  });

  builder.addCase(removeTaskGroup, (state, action) => {
    const {
      taskGroupID,
    } = action.payload;

    const taskGroupIndex = state.taskGroups.findIndex((item) => item.id === taskGroupID);

    state.taskGroups = [
      ...state.taskGroups.slice(0, taskGroupIndex),
      ...state.taskGroups.slice(taskGroupIndex + 1),
    ];

    localStorage.setItem('tasks', JSON.stringify(state.taskGroups));
  });
});
