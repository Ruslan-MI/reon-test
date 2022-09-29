import {
  createReducer,
} from '@reduxjs/toolkit';

import {
  taskGroups,
} from '../../mocks';

const initialState = {
  taskGroups,
};

export const reducer = createReducer(initialState, () => { });
