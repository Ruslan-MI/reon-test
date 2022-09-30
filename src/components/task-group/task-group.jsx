import React, {
  useEffect,
  useState,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import TaskCard from '../task-card/task-card';
import TaskForm from '../task-form/task-form';

import {
  StoreNameSpace,
  TaskFormActionType,
} from '../../const';
import {
  changeTaskFormAction,
} from '../../store/actions/page';


const TaskGroup = () => {
  const {
    taskGroups,
    taskFormAction: {
      type: taskFormActionType,
      id: taskFormActionID,
    }
  } = useSelector((state) => ({
    ...state[StoreNameSpace.DATA],
    ...state[StoreNameSpace.PAGE],
  }));

  const [
    localState,
    setLocalState,
  ] = useState({
    isAddNewTask: false,
  });

  const {
    heading,
    taskList,
  } = taskGroups[0];

  const dispatch = useDispatch();

  const onAddTaskButtonClick = () => {
    if (!localState.isAddNewTask) {
      dispatch(changeTaskFormAction({
        type: TaskFormActionType.ADD,
      }));
    }
  };

  useEffect(() => {
    setLocalState(() => ({
      ...localState,
      isAddNewTask: taskFormActionType === TaskFormActionType.ADD,
    }));
  }, [
    taskFormActionType,
  ]);

  return (
    <section className="task-group">
      <h2 className="task-group__heading">{heading}</h2>
      <ul className='task-group__buttons-list'>
        <li className='task-group__buttons-item'>
          <button className='task-group__add-task-button' type='button' onClick={onAddTaskButtonClick}>Добавить новую задачу</button>
        </li>
      </ul>
      {
        localState.isAddNewTask &&
        <TaskForm isAddNewTask={localState.isAddNewTask} />
      }
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
