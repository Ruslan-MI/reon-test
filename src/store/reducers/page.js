import {
  createReducer,
} from '@reduxjs/toolkit';

import {
  changeTaskFormAction,
  changeTaskGroupHeadingAction,
  changeTaskSearch,
} from '../actions/page';

const initialState = {
  taskFormAction: {
    type: null,
    id: null,
  },
  taskGroupHeadingAction: {
    id: null,
  },
  taskSearch: '',
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

  builder.addCase(changeTaskGroupHeadingAction, (state, action) => {
    state.taskGroupHeadingAction.id = action.payload.id;
  });

  builder.addCase(changeTaskSearch, (state, action) => {
    state.taskSearch = action.payload;
  });
});
