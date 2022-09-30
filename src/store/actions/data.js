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
