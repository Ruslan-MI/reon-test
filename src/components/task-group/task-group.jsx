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
    taskFormAction: {
      id: taskFormActionID,
    }
  } = useSelector((state) => ({
    ...state[StoreNameSpace.DATA],
    ...state[StoreNameSpace.PAGE],
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
              <TaskCard task={item} taskFormActionID={taskFormActionID} />
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default TaskGroup;
