import {
  createAction,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../../const';

const ActionType = {
  EDIT_TASK: `${StoreNameSpace.DATA}/editTask`,
  REMOVE_TASK: `${StoreNameSpace.DATA}/removeTask`,
  ADD_TASK: `${StoreNameSpace.DATA}/addTask`,
  CHANGE_TASK_GROUP_HEADING: `${StoreNameSpace.DATA}/changeTaskGroupHeading`,
  ADD_TASK_GROUP: `${StoreNameSpace.DATA}/addTaskGroup`,
};

export const editTask = createAction(ActionType.EDIT_TASK, (data) => ({
  payload: data,
}));

export const removeTask = createAction(ActionType.REMOVE_TASK, (data) => ({
  payload: data,
}));

export const addTask = createAction(ActionType.ADD_TASK, (data) => ({
  payload: data,
}));

export const changeTaskGroupHeading = createAction(ActionType.CHANGE_TASK_GROUP_HEADING, (data) => ({
  payload: data,
}));

export const addTaskGroup = createAction(ActionType.ADD_TASK_GROUP);
