import {
  createAction,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../../const';

const ActionType = {
  CHANGE_TASK_FORM_ACTION: `${StoreNameSpace.PAGE}/changeTaskFormAction`,
  CHANGE_TASK_GROUP_HEADING_ACTION: `${StoreNameSpace.PAGE}/changeTaskGroupHeadingAction`,
  CHANGE_TASK_SEARCH: `${StoreNameSpace.PAGE}/changeTaskSearch`,
};

export const changeTaskFormAction = createAction(ActionType.CHANGE_TASK_FORM_ACTION, (data) => ({
  payload: data,
}));

export const changeTaskGroupHeadingAction = createAction(ActionType.CHANGE_TASK_GROUP_HEADING_ACTION, (data) => ({
  payload: data,
}));

export const changeTaskSearch = createAction(ActionType.CHANGE_TASK_SEARCH, (data) => ({
  payload: data,
}));
