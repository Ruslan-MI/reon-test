import React from 'react';
import {
  useSelector,
} from 'react-redux';

import TaskCard from '../task-card/task-card';

import {
  StoreNameSpace,
} from '../../const';


const TaskGroup = () => {
  const {
    taskGroups,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.DATA],
  }));

  const {
    heading,
    taskList,
  } = taskGroups[0];

  return (
    <section className="task-group">
      <h2 className="task-group__heading">{heading}</h2>
      <ul className='task-group__list'>
        {
          taskList.map((item) => (
            <li className='task-group__item' key={item.id}>
              <TaskCard task={item} />
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default TaskGroup;
