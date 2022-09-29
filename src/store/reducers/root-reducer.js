import {
  combineReducers,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../../const';

import {
  reducer as dataReducer,
} from './data';

export const rootReducer = combineReducers({
  [StoreNameSpace.DATA]: dataReducer,
});
