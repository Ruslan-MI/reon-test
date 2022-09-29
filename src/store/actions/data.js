import {
  createAction,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../../const';

const ActionType = {
  EDIT_TASK: `${StoreNameSpace.DATA}/editTask`,
};

export const editTask = createAction(ActionType.EDIT_TASK, (data) => ({
  payload: data,
}));
