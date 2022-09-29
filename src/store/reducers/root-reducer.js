import {
  combineReducers,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../../const';

import {
  reducer as dataReducer,
} from './data';
import {
  reducer as pageReducer,
} from './page';

export const rootReducer = combineReducers({
  [StoreNameSpace.DATA]: dataReducer,
  [StoreNameSpace.PAGE]: pageReducer,
});
