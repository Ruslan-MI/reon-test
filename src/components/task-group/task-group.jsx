import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import PropTypes from 'prop-types';

import TaskCard from '../task-card/task-card';
import TaskForm from '../task-form/task-form';

import {
  StoreNameSpace,
  TaskFormActionType,
} from '../../const';
import {
  changeTaskFormAction,
} from '../../store/actions/page';
import {
  changeTaskGroupHeading,
} from '../../store/actions/data';
import {
  task as taskPropTypes,
} from '../../prop-types';


const TaskGroup = ({
  taskGroup: {
    id: taskGroupID,
    heading,
    taskList,
  },
}) => {
  const {
    taskFormAction: {
      type: taskFormActionType,
      id: taskFormActionID,
    },
  } = useSelector((state) => ({
    ...state[StoreNameSpace.PAGE],
  }));

  const [
    localState,
    setLocalState,
  ] = useState({
    isAddNewTask: false,
    isHeadingInput: false,
  });

  const headingInputRef = useRef();
  const dispatch = useDispatch();

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    dispatch(changeTaskGroupHeading({
      heading: headingInputRef.current.value.trim(),
      taskGroupID,
    }));

    setLocalState(() => ({
      ...localState,
      isHeadingInput: !localState.isHeadingInput,
    }));
  };

  const onChangeHeadingButtonClick = () => {
    setLocalState(() => ({
      ...localState,
      isHeadingInput: !localState.isHeadingInput,
    }));
  };

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

  useEffect(() => {
    if (localState.isHeadingInput) {
      headingInputRef.current.focus();
    }
  }, [
    localState.isHeadingInput,
  ]);

  return (
    <section className="task-group" id={taskGroupID}>
      {
        localState.isHeadingInput ? (
          <form className='task-group__heading-form' id='heading-form' onSubmit={onFormSubmit}>
            <div className='task-group__heading-input-wrapper'>
              <label className='task-group__heading-input-label' htmlFor="heading">Введите название списка:</label>
              <input className='task-group__heading-input' type="text" name="heading" id="heading"
                defaultValue={heading} ref={headingInputRef}
              />
            </div>
          </form>
        ) : (
          <h2 className="task-group__heading">{heading}</h2>
        )
      }
      <ul className='task-group__buttons-list'>
        {
          localState.isHeadingInput && (
            <li className='task-group__buttons-item'>
              <button className='task-group__save-heading-button' type='submit' form='heading-form'>Сохранить</button>
            </li>
          )
        }
        <li className='task-group__buttons-item'>
          <button className='task-group__change-heading-button' type='button' onClick={onChangeHeadingButtonClick}>
            {localState.isHeadingInput ? 'Отменить переименование' : 'Переименовать список'}
          </button>
        </li>
        <li className='task-group__buttons-item'>
          <button className='task-group__add-task-button' type='button' onClick={onAddTaskButtonClick}>Добавить новую задачу</button>
        </li>
      </ul>
      {
        localState.isAddNewTask &&
        <TaskForm isAddNewTask={localState.isAddNewTask} />
      }
      {
        taskList.length ? (
          <ul className='task-group__list'>
            {
              taskList.map((item) => (
                <li className='task-group__item' key={item.id}>
                  <TaskCard task={item} taskGroupID={taskGroupID} taskFormActionID={taskFormActionID} />
                </li>
              ))
            }
          </ul>
        ) : (
          <p className='task-group__stup'>Добавьте новую задачу.</p>
        )
      }
    </section>
  );
};

TaskGroup.propTypes = {
  taskGroup: PropTypes.exact({
    id: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    taskList: PropTypes.arrayOf(PropTypes.exact(taskPropTypes)).isRequired,
  }),
};

export default TaskGroup;
