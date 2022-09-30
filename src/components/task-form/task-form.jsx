import React, {
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  addTask,
  editTask,
  removeTask,
} from '../../store/actions/data';
import {
  changeTaskFormAction,
} from '../../store/actions/page';
import {
  task as taskPropTypes,
} from '../../prop-types';
import {
  StoreNameSpace,
} from '../../const';

const initialState = {
  heading: '',
  description: '',
};

const TaskForm = ({
  task,
  isAddNewTask = false,
}) => {
  const {
    currentTaskGroupID,
  } = useSelector((state) => ({
    ...state[StoreNameSpace.PAGE],
  }));

  const [
    localState,
    setLocalState,
  ] = useState({
    ...initialState,
    ...task,
  });

  const headingInputRef = useRef();

  const dispatch = useDispatch();

  const onFormChange = (evt) => {
    const {
      name,
      value,
    } = evt.target;

    setLocalState(() => ({
      ...localState,
      [name]: value,
    }));
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();

    if (isAddNewTask) {
      dispatch(addTask({
        task: localState,
        currentTaskGroupID,
      }));
    } else {
      dispatch(editTask({
        task: localState,
        currentTaskGroupID,
      }));
    }

    dispatch(changeTaskFormAction(null));
  };

  const onRemoveButtonClick = () => {
    dispatch(removeTask({
      id: localState.id,
      currentTaskGroupID,
    }));
  };

  const onCancelButtonClick = () => {
    dispatch(changeTaskFormAction(null));
  };

  useEffect(() => {
    headingInputRef.current.focus();
  }, []);

  return (
    <form className='task-form' onChange={onFormChange} onSubmit={onFormSubmit}>
      <div className='task-form__input-wrapper'>
        <label className='task-form__input-label' htmlFor="heading">Заголовок:</label>
        <input className='task-form__input' type="text" name="heading" id="heading"
          ref={headingInputRef} value={localState.heading} onChange={() => { }} required
        />
      </div>
      <div className='task-form__input-wrapper'>
        <label className='task-form__input-label' htmlFor="description">Описание:</label>
        <textarea className='task-form__input' name="description" id="description" cols="30" rows="10"
          value={localState.description} onChange={() => { }}
        />
      </div>
      <ul className='task-card__buttons-list'>
        <li className='task-card__buttons-item'>
          <button className='task-card__submit-button' type='submit'>Сохранить</button>
        </li>
        <li className='task-card__buttons-item'>
          <button className='task-card__cancel-button' type='button' onClick={onCancelButtonClick}>Отменить</button>
        </li>
        {
          localState.id &&
          <li className='task-card__buttons-item'>
            <button className='task-card__remove-button' type='button' onClick={onRemoveButtonClick}>Удалить</button>
          </li>
        }
      </ul>
    </form>
  );
};

TaskForm.propTypes = {
  task: PropTypes.exact(taskPropTypes),
  isAddNewTask: PropTypes.bool,
};

export default TaskForm;
