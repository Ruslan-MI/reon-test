import {
  createSelector,
} from '@reduxjs/toolkit';

import {
  StoreNameSpace,
} from '../const';

const getTaskGroups = (state) => state[StoreNameSpace.DATA].taskGroups;
const getTaskSearch = (state) => state[StoreNameSpace.PAGE].taskSearch;

export const getSearchFilter = createSelector([
  getTaskGroups,
  getTaskSearch,
], (taskGroups, taskSearch) => {
  let filteredTaskGroups = taskGroups;
  const searchString = taskSearch.trim();

  if (taskSearch.length) {
    filteredTaskGroups = taskGroups.map((item) => ({
      ...item,
      taskList: item.taskList.filter(({
        heading,
        description,
      }) => heading.toLowerCase().includes(searchString) || description.toLowerCase().includes(searchString)),
    })).filter(({
      taskList,
    }) => taskList.length);
  }

  return {
    filteredTaskGroups,
  };
});
