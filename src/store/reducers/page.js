import {
  createReducer,
} from '@reduxjs/toolkit';

import {
  changeTaskFormAction,
} from '../actions/page';
import {
  taskGroups,
} from '../../mocks';

const initialState = {
  taskFormAction: {
    type: null,
    id: null,
  },
  currentTaskGroupID: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks'))[0].id : taskGroups[0].id,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeTaskFormAction, (state, action) => {
    let {
      type,
      id,
    } = initialState.taskFormAction;

    if (action.payload) {
      type = action.payload.type;
      id = action.payload.id;
    }

    state.taskFormAction = {
      type,
      id,
    };
  });
});
