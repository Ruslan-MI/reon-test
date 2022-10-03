import React from 'react';
import {
  useSelector,
} from 'react-redux';

import TaskGroups from '../task-groups/task-groups';
import TaskGroup from '../task-group/task-group';

import {
  StoreNameSpace,
} from '../../const';

const Tasks = () => {
  const {
    taskGroups,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.DATA],
  }));

  return (
    <main>
      <h1>Задачи</h1>
      <TaskGroups taskGroups={taskGroups.map(({
        id,
        heading,
      }) => ({
        id,
        heading,
      }))}
      />
      {
        taskGroups.map((item) => (
          <TaskGroup taskGroup={item} key={item.id} />
        ))
      }
    </main>
  );
};

export default Tasks;
