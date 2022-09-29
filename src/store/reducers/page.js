import {
  createReducer,
} from '@reduxjs/toolkit';

import {
  changeTaskFormAction,
} from '../actions/page';

const initialState = {
  taskFormAction: {
    type: null,
    id: null,
  },
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
