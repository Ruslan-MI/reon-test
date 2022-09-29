import {
  createAction,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../../const';

const ActionType = {
  CHANGE_TASK_FORM_ACTION: `${StoreNameSpace.PAGE}/changeTaskFormAction`,
};

export const changeTaskFormAction = createAction(ActionType.CHANGE_TASK_FORM_ACTION, (data) => ({
  payload: data,
}));
