import React from 'react';
import {
  useSelector,
} from 'react-redux';

import TaskSearch from '../task-search/task-search';
import TaskGroups from '../task-groups/task-groups';
import TaskGroup from '../task-group/task-group';

import {
  StoreNameSpace,
} from '../../const';
import {
  getSearchFilter,
} from '../../store/selectors';

const Tasks = () => {
  const {
    taskGroups,
    filteredTaskGroups,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.DATA],
    ...getSearchFilter(state),
  }));

  return (
    <main>
      <h1>Задачи</h1>
      <TaskSearch />
      <TaskGroups taskGroups={taskGroups.map(({
        id,
        heading,
      }) => ({
        id,
        heading,
      }))}
      />
      {
        filteredTaskGroups.map((item) => (
          <TaskGroup taskGroup={item} key={item.id} />
        ))
      }
    </main>
  );
};

export default Tasks;
